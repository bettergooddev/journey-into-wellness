import type { Block, Field } from 'payload'

import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

import { link } from '@/fields/link'

const Pitch: Field[] = [
  {
    name: 'offering',
    type: 'relationship',
    relationTo: 'offerings',
    required: true,
  },

  {
    name: 'customTitle',
    type: 'text',
    label: 'Custom Title (optional)',
  },
  {
    name: 'customDescription',
    type: 'textarea',
    label: 'Custom Description (optional)',
  },
]

export const OfferingsList: Block = {
  slug: 'offeringsList',
  interfaceName: 'OfferingsListBlock',
  fields: [
    {
      name: 'heading',
      type: 'text',
      label: 'Heading',
    },
    {
      name: 'pitches',
      type: 'array',
      label: 'Pitch',
      admin: {
        initCollapsed: true,
        components: {
          RowLabel: '@/blocks/OfferingsList/RowLabel#RowLabel',
        },
      },
      fields: Pitch,
    },
  ],
}
