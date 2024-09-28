import { isAdmin, isAdminOrSelf } from '@/access/access'
import type { CollectionConfig } from 'payload'

export const Estates: CollectionConfig = {
  slug: 'estates',
  access: {
    // allow creation of users by admins by default
    create: isAdmin,
    // Allow read and update access for admins or self in both environments
    read: isAdminOrSelf,
    update: isAdminOrSelf,
    // Only admins can delete in both environments
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
    },
    {
      name: 'Monthly Rate',
      type: 'number',
      required: true,
    },
    {
      name: 'Onboarding Cost',
      type: 'number',
      required: true,
    },
    {
      name: 'Subscription Duration',
      type: 'number',
      required: true,
    },

  ],
}
