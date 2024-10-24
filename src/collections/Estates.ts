import { isAdmin, isAdminOrSelf } from '@/access/access';
import type { CollectionConfig, FieldHook } from 'payload';
import { nanoid } from 'nanoid';
import { Estate_Managers, existingEstateCodes } from "@/lib/codeCheck";

// Generates a unique registration code and stores the creation date
const generateUniqueRegistrationCode = async (): Promise<string> => {
  const code = nanoid(5); // Generates a 5-character unique code
  const existingEstate = await existingEstateCodes(code);

  // If the code already exists, generate a new one recursively
  if (existingEstate.docs.length > 0) {
    return generateUniqueRegistrationCode();
  }

  // Return the new code
  return code;
};

// Hook to check if the registration code has expired and regenerate if necessary
const regenerateCodeIfExpired: FieldHook = async ({ value, data, originalDoc }) => {
  const now = new Date();
  const twoWeeksInMs = 14 * 24 * 60 * 60 * 1000; // 14 days in milliseconds
  const generatedAt = originalDoc?.registrationCodeGeneratedAt
    ? new Date(originalDoc.registrationCodeGeneratedAt)
    : now;

  // If more than 14 days have passed since the code was generated, regenerate the code
  if (now.getTime() - generatedAt.getTime() > twoWeeksInMs) {
    const newCode = await generateUniqueRegistrationCode();
    data!.registrationCodeGeneratedAt = now; // Update the generation date
    return newCode; // Return the newly generated code
  }

  // If not expired, return the current code
  return value;
};


const estateManagers = async () => {
  const data = await Estate_Managers();
  return data.map((item) => ({ label: item.label, value: item.value }));
};



export const Estates: CollectionConfig = {
  slug: 'estates',
  access: {
    create: isAdmin,
    read: isAdmin,
    update: isAdmin,
    delete: isAdmin,
  },
  fields: [
    {
      name: 'Estate Name',
      label: 'Estate_Name',
      type: 'text',
      required: true,
    },
    {
      name: 'Estate Managers',
      label: 'Estate Managers',
      type: 'relationship',
      relationTo: 'users', // The 'users' collection
      hasMany: true, // Allows selecting multiple estate managers
      admin: {
        description: 'Select one or more estate managers',
        //isClearable: true,
        isSortable: true, // Enable drag and drop sorting for multiple selections
        allowCreate: true,
      },
      // Optional: Filter to only show estate managers in the relationship field
      filterOptions: {
        roles: { equals: 'estate_manager' },
      },
    },
    {
      name: 'Estate Manager Email',
      type: 'email',
    },
    {
      name: 'Estate Address',
      label: 'Estate_Address',
      type: 'text',
      required: true,
      //defaultValue: 'No. 1, Street, City, Country',
      admin: {
        placeholder: 'No2. Falakalalana Street, Kampala, Uganda',
      }
    },
    {
      name: 'registrationCode',
      type: 'text',
      admin: {
        readOnly: true,
      },
      hooks: {
        beforeValidate: [
          async ({ data }) => {
            // Generate a unique registration code before validation
            if (!data?.registrationCode) {
              data!.registrationCode = await generateUniqueRegistrationCode();
              data!.registrationCodeGeneratedAt = new Date(); // Set the generation date
            }
          },
          regenerateCodeIfExpired, // Regenerate code if expired
        ],
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
      defaultValue: 12,
      min: 1,
      max: 12,
      admin: {
        placeholder: '12',
      },
    },
    {
      name: 'Subscription Status',
      type: 'checkbox',
      label: 'Subscribed',
      defaultValue: false,
    },
  ],
};
