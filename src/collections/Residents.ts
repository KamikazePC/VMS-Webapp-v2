import { isAdmin, isAdminOrSelf, isEstateManager } from '@/access/access'
import type { CollectionConfig } from 'payload'

export const Residents: CollectionConfig = {
  slug: 'residents',
  admin: {
    useAsTitle: 'username',
  },
  access: {
    create: () => false,
    update: () => false,
    read: isAdminOrSelf,
    delete: isEstateManager,
  },
  fields: [
    {
      name: 'id',
      label: 'Resident ID',
      unique: true,
      type: 'text',
    },
    {
      name: 'username',
      label: 'Resident Name',
      type: 'text',
    },
    {
      name: 'email',
      label: 'Resident Email',
      type: 'email',
    },
    {
      name: 'address',
      label: 'Address',
      type: 'text',
    },
    {
      name: 'phone_number',
      label: 'Phone Number',
      type: 'text',
    },
    {
      name: 'estate_id',
      label: 'Estate ID',
      type: 'text',
    },
  ],
}
