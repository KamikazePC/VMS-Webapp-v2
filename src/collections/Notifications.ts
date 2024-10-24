import { isAdmin, isAdminOrSelf, isEstateManager } from '@/access/access'
import type { CollectionConfig } from 'payload'

export const Notifications: CollectionConfig = {
  slug: 'notifications',
  admin: {
    useAsTitle: 'id',
  },
  access: {
      create: () => false,
      update: () => false,
      read:isAdminOrSelf,
      delete: () => false,
  },
  fields: [
    {
      name: 'id',
      label: 'ID',
      unique: true,
      type: 'text',
    },
    {
      name: 'title',
      label: 'Title',
      type: 'text',
    },
    {
      name: 'message',
      label: 'Message',
      type: 'text',
    },
    {
      name: 'user_id',
      label: 'User ID',
      type: 'text',
    },
    {
      name: 'read',
      label: 'Read',
      type: 'checkbox',
    },

  ],
}
