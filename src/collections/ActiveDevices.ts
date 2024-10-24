import { isAdmin, isAdminOrSelf, isEstateManager } from '@/access/access'
import type { CollectionConfig } from 'payload'

export const ActiveDevices: CollectionConfig = {
  slug: 'active_devices',
  admin: {
    useAsTitle: 'user_id',
  },
  access: {
      create: () => false,
      update: () => false,
      read: () => false,
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
      name: 'user_id',
      label: 'User ID',
      type: 'text',
    },
    {
      name: 'last_login',
      label: 'Last Login',
      type: 'date',
    },
    {
      name: 'device_id',
      label: 'Device ID',
      type: 'text',
    },

  ],
}
