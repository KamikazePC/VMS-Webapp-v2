import { isAdmin, isAdminOrSelf, isEstateManager } from '@/access/access'
import type { CollectionConfig } from 'payload'

export const GroupInvites: CollectionConfig = {
  slug: 'group_invites',
  admin: {
    useAsTitle: 'status',
  },
  access: {
      create: () => false,
      update: () => false,
      read: isAdminOrSelf,
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
      name: 'resident_name',
      label: 'Resident Name',
      type: 'text',
    },
    {
      name: 'group_name',
      label: 'Group Invite Name',
      type: 'text',
    },
    {
      name: 'otp',
      label: 'Invite Code',
      type: 'text',
      hidden: true,
    },
    {
      name: 'status',
      label: 'Invite Status',
      type: 'text',
    },
    {
      name: 'address',
      label: 'Resident Address',
      type: 'text',
    },
    {
      name: 'start_date_time',
      label: 'Invite Start Time',
      type: 'text',
    },
    {
      name: 'end_date_time',
      label: 'Invite End Time',
      type: 'text',
    },
    {
      name: 'entry_time',
      label: 'Invite Entry Time',
      type: 'text',
    },
    {
      name: 'exit_time',
      label: 'Invite Exit Time',
      type: 'text',
    },
    {
      name: 'members_checked_in',
      label: 'Members Checked In',
      type: 'text',
    },
    {
      name: 'created_by',
      label: 'Created_By',
      type: 'text',
    },
    {
      name: 'estate_id',
      label: 'Estate ID',
      type: 'number',
    },


  ],
}
