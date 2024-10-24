/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export interface Config {
  auth: {
    users: UserAuthOperations;
  };
  collections: {
    users: User;
    estates: Estate;
    residents: Resident;
    group_invites: GroupInvite;
    individual_one_time_invites: IndividualOneTimeInvite;
    individual_recurring_invites: IndividualRecurringInvite;
    active_devices: ActiveDevice;
    notifications: Notification;
    security: Security;
    'payload-locked-documents': PayloadLockedDocument;
    'payload-preferences': PayloadPreference;
    'payload-migrations': PayloadMigration;
  };
  db: {
    defaultIDType: number;
  };
  globals: {};
  locale: null;
  user: User & {
    collection: 'users';
  };
}
export interface UserAuthOperations {
  forgotPassword: {
    email: string;
    password: string;
  };
  login: {
    email: string;
    password: string;
  };
  registerFirstUser: {
    email: string;
    password: string;
  };
  unlock: {
    email: string;
    password: string;
  };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users".
 */
export interface User {
  id: number;
  firstName: string;
  lastName: string;
  roles?: ('admin' | 'estate_manager')[] | null;
  username?: string | null;
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string | null;
  resetPasswordExpiration?: string | null;
  salt?: string | null;
  hash?: string | null;
  loginAttempts?: number | null;
  lockUntil?: string | null;
  password?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "estates".
 */
export interface Estate {
  id: number;
  'Estate Name': string;
  'Estate Managers'?: (number | User)[] | null;
  'Estate Manager Email'?: string | null;
  'Estate Address': string;
  registrationCode?: string | null;
  registrationCodeGeneratedAt?: string | null;
  'Monthly Rate': number;
  'Onboarding Cost': number;
  'Subscription Duration': number;
  'Subscription Status'?: boolean | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "residents".
 */
export interface Resident {
  id: string;
  username?: string | null;
  email?: string | null;
  address?: string | null;
  phone_number?: string | null;
  estate_id?: string | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "group_invites".
 */
export interface GroupInvite {
  id: string;
  resident_name?: string | null;
  group_name?: string | null;
  otp?: string | null;
  status?: string | null;
  address?: string | null;
  start_date_time?: string | null;
  end_date_time?: string | null;
  entry_time?: string | null;
  exit_time?: string | null;
  members_checked_in?: string | null;
  created_by?: string | null;
  estate_id?: number | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "individual_one_time_invites".
 */
export interface IndividualOneTimeInvite {
  id: string;
  resident_name?: string | null;
  visitor_name?: string | null;
  visitor_phone?: string | null;
  otp?: string | null;
  status?: string | null;
  address?: string | null;
  start_date_time?: string | null;
  end_date_time?: string | null;
  entry_time?: string | null;
  exit_time?: string | null;
  created_by?: string | null;
  estate_id?: number | null;
  is_recurring?: boolean | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "individual_recurring_invites".
 */
export interface IndividualRecurringInvite {
  id: string;
  resident_name?: string | null;
  visitor_name?: string | null;
  visitor_phone?: string | null;
  otp?: string | null;
  status?: string | null;
  address?: string | null;
  start_date_time?: string | null;
  end_date_time?: string | null;
  entry_time?: string | null;
  exit_time?: string | null;
  created_by?: string | null;
  estate_id?: number | null;
  is_recurring?: boolean | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "active_devices".
 */
export interface ActiveDevice {
  id: string;
  user_id?: string | null;
  last_login?: string | null;
  device_id?: string | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "notifications".
 */
export interface Notification {
  id: string;
  title?: string | null;
  message?: string | null;
  user_id?: string | null;
  read?: boolean | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "security".
 */
export interface Security {
  id: string;
  security_name: string;
  email: string;
  password: string;
  estate: number | Estate;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-locked-documents".
 */
export interface PayloadLockedDocument {
  id: number;
  document?:
    | ({
        relationTo: 'users';
        value: number | User;
      } | null)
    | ({
        relationTo: 'estates';
        value: number | Estate;
      } | null)
    | ({
        relationTo: 'residents';
        value: string | Resident;
      } | null)
    | ({
        relationTo: 'group_invites';
        value: string | GroupInvite;
      } | null)
    | ({
        relationTo: 'individual_one_time_invites';
        value: string | IndividualOneTimeInvite;
      } | null)
    | ({
        relationTo: 'individual_recurring_invites';
        value: string | IndividualRecurringInvite;
      } | null)
    | ({
        relationTo: 'active_devices';
        value: string | ActiveDevice;
      } | null)
    | ({
        relationTo: 'notifications';
        value: string | Notification;
      } | null)
    | ({
        relationTo: 'security';
        value: string | Security;
      } | null);
  globalSlug?: string | null;
  user: {
    relationTo: 'users';
    value: number | User;
  };
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences".
 */
export interface PayloadPreference {
  id: number;
  user: {
    relationTo: 'users';
    value: number | User;
  };
  key?: string | null;
  value?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations".
 */
export interface PayloadMigration {
  id: number;
  name?: string | null;
  batch?: number | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "auth".
 */
export interface Auth {
  [k: string]: unknown;
}


declare module 'payload' {
  export interface GeneratedTypes extends Config {}
}