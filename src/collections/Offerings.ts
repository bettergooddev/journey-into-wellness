import type { CollectionConfig } from 'payload'
import { slugField } from '@/fields/slug' // adjust import path as needed
import { authenticated } from '../access/authenticated'
import { anyone } from '../access/anyone'
import { linkGroup } from '@/fields/linkGroup'
import { lexicalEditor, UnorderedListFeature } from '@payloadcms/richtext-lexical'

export const Offerings: CollectionConfig = {
  slug: 'offerings',
  labels: {
    singular: 'Offering',
    plural: 'Offerings',
  },
  access: {
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  admin: {
    defaultColumns: ['name', 'type', 'updatedAt'],
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'type',
      type: 'select',
      label: 'Type',
      required: true,
      options: [
        { label: 'Session', value: 'session' },
        { label: 'Course', value: 'course' },
      ],
    },
    {
      name: 'name',
      type: 'text',
      label: 'Name',
      required: true,
    },
    {
      name: 'tagline',
      type: 'text',
      label: 'Tagline',
      required: true,
    },
    {
      name: 'highlights',
      type: 'richText',
      label: 'Highlights',
      required: true,
      editor: lexicalEditor({
        features: () => [UnorderedListFeature()],
      }),
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Description',
      required: true,
    },
    linkGroup({
      appearances: ['default', 'outline'],
      overrides: {
        maxRows: 2,
      },
    }),
  ],
}
