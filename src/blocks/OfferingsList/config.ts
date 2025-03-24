import type { Block, Field } from 'payload'

import { FixedToolbarFeature, HeadingFeature, InlineToolbarFeature, lexicalEditor } from '@payloadcms/richtext-lexical'

import { link } from '@/fields/link'

const Information: Field[] = [
  {
    name: 'icon',
    type: 'upload',
    relationTo: 'media',
    required: true,
  },
  {
    name: 'heading',
    type: 'text',
    required: true,
  },
  {
    name: 'description',
    type: 'textarea',
    required: true,
  },
]

const Pitch: Field[] = [
  {
    name: 'offering',
    type: 'relationship',
    relationTo: 'offerings',
    required: true,
  },
  {
    name: 'information',
    type: 'array',
    minRows: 3,
    maxRows: 3,
    fields: Information,
    admin: {
      components: {
        RowLabel: '@/blocks/OfferingsList/InformationRowLabel#InformationRowLabel',
      },
    },
  },
  {
    name: 'image',
    type: 'upload',
    relationTo: 'media',
    required: true,
  },
  {
    name: 'clip',
    type: 'select',
    options: ['face', 'brain', 'corner', 'bubbles'],
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
      required: true,
      admin: {
        initCollapsed: true,
        components: {
          RowLabel: '@/blocks/OfferingsList/OfferingRowLabel#OfferingRowLabel',
        },
      },
      fields: Pitch,
    },
  ],
}
