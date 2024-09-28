import { isAdmin, isAdminOrSelf } from '@/access/access'
import type { CollectionConfig } from 'payload'
import { nanoid } from 'nanoid'

const generateUniqueRegistrationCode = async (payload: any) => {
  const code = nanoid(5) // Generates a 10-character unique code
  
  // Check if the code already exists
  const existingEstate = await payload.find({
    collection: 'estates',
    where: {
      registrationCode: code,
    },
  })

  // If the code already exists, generate a new one recursively
  if (existingEstate.totalDocs > 0) {
    return generateUniqueRegistrationCode(payload)
  }

  return code
}

const isCodeExpired = (codeGeneratedAt: Date) => {
  const twoWeeksInMs = 14 * 24 * 60 * 60 * 1000 // 14 days in milliseconds
  const now = new Date()
  return now.getTime() - codeGeneratedAt.getTime() > twoWeeksInMs
}

export const Estates: CollectionConfig = {
  slug: 'estates',
  access: {
    create: isAdmin,
    read: isAdminOrSelf,
    update: isAdminOrSelf,
    delete: isAdmin,
  },
  fields: [
    {
      name: 'Estate Name',
      type: 'text',
      required: true,
    },
    {
      name: 'Editor Email',
      type: 'email',
      required: true,
    },
    {
      name: 'registrationCode',
      type: 'text',
      required: true,
      admin: {
        readOnly: true,
      },
    },
    {
      name: 'registrationCodeGeneratedAt',
      type: 'date',
      admin: {
        readOnly: true,
      },
    },
    {
      name: 'Monthly Rate',
      type: 'number',
      required: true,
      admin: {
        placeholder: '100000',
      },
    },
    {
      name: 'Onboarding Cost',
      type: 'number',
      required: true,
      admin: {
        placeholder: '10000',
      },
    },
    {
      name: 'Subscription Duration',
      type: 'number',
      required: true,
      admin: {
        placeholder: '12',
      },
    },
  ],
 hooks: {
   beforeValidate: [
     async ({ operation, data, req: { payload } }) => {
       if (operation === 'create' || !data || !data.registrationCode || isCodeExpired(data.registrationCodeGeneratedAt)) {
         data = data || {};
         data.registrationCode = await generateUniqueRegistrationCode(payload);
         data.registrationCodeGeneratedAt = new Date();
       }
       return data;
     },
   ],
 },
}