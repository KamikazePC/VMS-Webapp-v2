'use server'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { code } from 'payload/shared'

 
 
 
 // Check if the code already exists
 export const existingEstateCodes = async (code: string) => {

    const payload = await getPayload({
             config: configPromise})

    const data = await payload.find({
        collection: 'estates',
        where: {
          registrationCode: { equals: code },
        },
      })

    return data
 }




 export const Estate_Managers = async () => {
    const payload = await getPayload({
      config: configPromise,
    });
  
    const data = await payload.find({
      collection: 'users',
      where: {
        roles: { equals: 'estate_manager' },
      },
    });
  
    // Map through the docs and return key-value pairs
    const estateManagerOptions = data.docs.map((user) => ({
      label: `${user.firstName} ${user.lastName}`,  // Full name as label
      value: `${user.firstName}_${user.lastName}`,  // Combined firstName_lastName as value
    }));
  
    return estateManagerOptions;
  };