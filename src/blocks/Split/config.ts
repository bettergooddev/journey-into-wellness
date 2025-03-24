import type { Block } from 'payload'
import { FixedToolbarFeature, HeadingFeature, InlineToolbarFeature, lexicalEditor } from '@payloadcms/richtext-lexical'

export const Split: Block = {
  slug: 'split',
  interfaceName: 'SplitBlock',
  fields: [
    {
      name: 'eyebrow',
      type: 'text',
      required: false,
    },
    {
      name: 'heading',
      type: 'text',
      required: false,
    },
    {
      name: 'subheading',
      type: 'text',
      required: false,
    },
    {
      name: 'body',
      type: 'richText',
      required: false,
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [...rootFeatures, FixedToolbarFeature(), InlineToolbarFeature()]
        },
      }),
    },
    {
      name: 'graphic',
      type: 'upload',
      relationTo: 'media',
      required: false,
    },
    {
      name: 'clip',
      type: 'select',
      required: false,
      options: [
        {
          label: 'Face',
          value: 'face',
        },
        {
          label: 'Brain',
          value: 'brain',
        },
        {
          label: 'Corner',
          value: 'corner',
        },
        {
          label: 'Bubbles',
          value: 'bubbles',
        },
      ],
    },
    {
      name: 'reverse',
      type: 'checkbox',
      required: false,
    },
  ],
}
