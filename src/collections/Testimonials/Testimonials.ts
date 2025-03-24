import type { CollectionConfig } from 'payload'

import { anyone } from '../../access/anyone'
import { authenticated } from '../../access/authenticated'
import { syncTestimonialsWithPage } from './hooks/syncTestimonialsWithPage'

export const Testimonials: CollectionConfig = {
  slug: 'testimonials',
  access: {
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  admin: {
    useAsTitle: 'standout',
    defaultColumns: ['standout', 'offering', 'updatedAt'],
  },
  fields: [
    {
      name: 'standout',
      type: 'text',
      required: true,
    },
    {
      name: 'body',
      type: 'textarea',
      required: true,
    },
    {
      name: 'offering',
      type: 'relationship',
      relationTo: 'offerings',
      hasMany: false,
      required: false,
    },
    {
      name: 'author',
      type: 'group',
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
        },
        {
          name: 'role',
          type: 'text',
          required: true,
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
    },
  ],
  hooks: {
    afterChange: [syncTestimonialsWithPage],
  },
}
