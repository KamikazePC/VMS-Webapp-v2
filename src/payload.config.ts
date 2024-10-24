// storage-adapter-import-placeholder
import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Estates } from './collections/Estates'
import { Residents } from './collections/Residents'
import { Group } from 'lucide-react'
import { GroupInvites } from './collections/GroupInvites'
import { IndividualOneTimeInvites } from './collections/IndividualOneTimeInvites'
import { IndividualRecurringInvites } from './collections/IndividualRecurringInvites'
import { ActiveDevices } from './collections/ActiveDevices'
import { Notifications } from './collections/Notifications'
import { Security } from './collections/Security'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Estates, Residents, GroupInvites, IndividualOneTimeInvites, IndividualRecurringInvites,ActiveDevices, Notifications, Security],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || '',
    },
  }),
  sharp,
  plugins: [
    // storage-adapter-placeholder
  ],
})
