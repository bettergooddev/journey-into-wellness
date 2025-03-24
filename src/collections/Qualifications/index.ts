import type { CollectionConfig } from 'payload'

import { anyone } from '../../access/anyone'
import { authenticated } from '../../access/authenticated'
import { syncQualificationsWithPage } from './hooks/syncQualificationsWithPage'

export const Qualifications: CollectionConfig = {
  slug: 'qualifications',
  access: {
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'issuer', 'year', 'updatedAt'],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'issuer',
      type: 'text',
      required: false,
    },
    {
      name: 'description',
      type: 'textarea',
      required: false,
    },
    {
      name: 'year',
      type: 'number',
      required: true,
    },
  ],
  hooks: {
    afterChange: [syncQualificationsWithPage],
  },
}
