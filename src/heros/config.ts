import type { Field } from 'payload'

import { HeadingFeature, lexicalEditor } from '@payloadcms/richtext-lexical'

import { linkGroup } from '@/fields/linkGroup'

export const hero: Field = {
  name: 'hero',
  type: 'group',
  fields: [
    {
      name: 'type',
      type: 'select',
      defaultValue: 'main',
      label: 'Type',
      options: [
        {
          label: 'None',
          value: 'none',
        },
        {
          label: 'Main',
          value: 'main',
        },
        {
          label: 'Subtle',
          value: 'subtle',
        },
      ],
      required: true,
    },
    {
      name: 'heading',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ rootFeatures }) => [...rootFeatures, HeadingFeature({ enabledHeadingSizes: ['h1', 'h4'] })],
      }),
      label: 'Heading',
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Description',
      admin: {
        condition: (_, { type } = {}) => ['subtle', 'none'].includes(type),
      },
    },
    {
      name: 'subheading',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ rootFeatures }) => [...rootFeatures, HeadingFeature({ enabledHeadingSizes: ['h2', 'h3', 'h4'] })],
      }),
      label: 'Subheading',
      admin: {
        condition: (_, { type } = {}) => ['main', 'none'].includes(type),
      },
    },
    linkGroup({
      overrides: {
        maxRows: 2,
        admin: {
          condition: (_, { type } = {}) => ['main', 'none'].includes(type),
        },
      },
    }),
    {
      name: 'media',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'poster',
      type: 'upload',
      relationTo: 'media',
    },
  ],
  label: false,
}
