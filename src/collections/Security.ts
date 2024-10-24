import { CollectionConfig } from 'payload';
import { supabase } from '@/lib/supabase';
import { isAdmin, isAdminOrSelf, isEstateManager } from '@/access/access';


export const Security: CollectionConfig = {
  slug: 'security',
  admin: {
    useAsTitle: 'security_name',
  },
  access: {
    create: isAdmin,
    update: isEstateManager,
    read: isAdminOrSelf,
    delete: () => false,
  },
  hooks: {
    beforeChange: [
      async ({ data, operation }) => {
        if (operation === 'create') {
          const { email, password } = data;

          if (!email || !password) {
            throw new Error('Email and password are required to create a user');
          }

          try {
            // Create the user in Supabase
            const { error } = await supabase.auth.admin.createUser({
              email,
              password,
              email_confirm: true,
            });

            if (error) {
              throw new Error(`Error creating Supabase user: ${error.message}`);
            }
          } catch (error) {
            console.error('Error creating Supabase user:', error);
            throw error;
          }
        }

        // if (operation === 'update') {
        //   const { email, password, estate } = data;

        //   if (!email || !password ) {
        //     throw new Error('Email and password are required to update a user');
        //   }

        //   if (estate) {
        //     throw new Error('Cannot update user\'s estate');
        //   }

        //   try {
        //     // update the user in Supabase
            
        //      const { data, error } = await supabase
        //      .from('security')
        //        .upsert({ some_column: 'someValue' })
        //        .select()

            
        //     if (error) {
        //       throw new Error(`Error creating Supabase user: ${error.message}`);
        //     }
        //   } catch (error) {
        //     console.error('Error creating Supabase user:', error);
        //     throw error;
        //   }
        
        // }
        return data; // Return the modified data if needed
      },
    ],
  },
  fields: [
    {
      name: 'id',
      label: 'Security ID',
      unique: true,
      type: 'text',
    },
    {
      name: 'security_name',
      label: 'Security Name',
      type: 'text',
      required: true,
    },
    {
      name: 'email',
      label: 'Security Email',
      type: 'email',
      required: true,
    },
    {
      name: 'password',
      label: 'Password',
      type: 'text',
      required: true,
    },
    {
      name: 'estate', // This field will create a relationship to the Estate collection
      label: 'Estate',
      type: 'relationship',
      relationTo: 'estates', // This should match the slug of your Estate collection
      required: true, // Set to true if you want this field to be mandatory
    },
  ],
};

