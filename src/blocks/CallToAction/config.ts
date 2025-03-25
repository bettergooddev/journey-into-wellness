import type { Block } from 'payload'

import { HeadingFeature, lexicalEditor } from '@payloadcms/richtext-lexical'

import { linkGroup } from '../../fields/linkGroup'

export const CallToAction: Block = {
  slug: 'cta',
  interfaceName: 'CallToActionBlock',
  fields: [
    {
      name: 'heading',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ rootFeatures }) => [...rootFeatures, HeadingFeature({ enabledHeadingSizes: ['h1'] })],
      }),
      label: 'Heading',
    },
    // {
    //   name: 'subheading',
    //   type: 'text',
    //   label: 'Subheading',
    //   required: false,
    // },
    linkGroup({
      appearances: ['default', 'primary', 'outline'],
      overrides: {
        maxRows: 2,
      },
    }),
  ],
  labels: {
    plural: 'Calls to Action',
    singular: 'Call to Action',
  },
}
