import type { Block, Field } from 'payload'

const featureItemFields: Field[] = [
  {
    name: 'image',
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
    name: 'subheading',
    type: 'text',
  },
]

export const Features: Block = {
  slug: 'features',
  interfaceName: 'FeaturesBlock',
  fields: [
    {
      name: 'heading',
      type: 'text',
      required: true,
    },
    {
      name: 'featureItems',
      type: 'array',
      minRows: 3,
      maxRows: 3,
      admin: {
        initCollapsed: true,
      },
      fields: featureItemFields,
    },
  ],
}
