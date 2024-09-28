import { isAdmin, isAdminOrSelf, isEstateManager } from '@/access/access'
import type { CollectionConfig } from 'payload'

export const Residents: CollectionConfig = {
  slug: 'residents',
  access: {
    // allow creation of users by admins by default
    create: isEstateManager,
    // Allow read and update access for admins or self in both environments
    read: isEstateManager,
    update: isEstateManager,
    // Only admins can delete in both environments
    delete: isEstateManager,
  },
  fields: [
    {
      name: 'Resident Name',
      type: 'text',
      required: true,
    },
    {
      name: 'Resident Email',
      type: 'email',
      required: true,
    },
    {
      name: 'Address',
      type: 'text',
      required: true,
    },
    {
      name: 'Phone Number',
      type: 'text',
      required: true,
    },
    {
      name: 'Time In',
      type: 'date',
      required: false,
    },
    {
      name: 'Time Out',
      type: 'date',
      required: false,
    },
    {
        name: 'roles',
        type: 'select',
        saveToJWT: true,
        required: true,
        options: [
          {
            label: 'Resident',
            value: 'resident',
          },
          {
            label: 'Security',
            value: 'security',
          },
        ],
      },
    {
      name: 'Estate',
      type: 'text',
      required: true,
      admin: {
          readOnly: true,
          position: 'sidebar',
      }
    },



  ],
}