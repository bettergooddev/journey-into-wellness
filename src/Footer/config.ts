import type { GlobalConfig } from 'payload'

import { link } from '@/fields/link'
import { revalidateFooter } from './hooks/revalidateFooter'

export const Footer: GlobalConfig = {
  slug: 'footer',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'body',
      type: 'group',
      label: 'Body',
      fields: [
        {
          name: 'heading',
          type: 'text',
          required: true,
          label: 'Heading',
        },
        {
          name: 'actions',
          type: 'array',
          label: 'Actions',
          fields: [
            link({
              appearances: false,
            }),
          ],
          admin: {
            initCollapsed: true,
          },
        },
      ],
    },
    {
      name: 'sections',
      type: 'array',
      label: 'Sitemap',
      minRows: 4,
      maxRows: 4,
      fields: [
        {
          name: 'identifier',
          type: 'select',
          required: true,
          label: 'Identifier',
          options: ['contact', 'socials', 'sitemap', 'network'],
          admin: {
            hidden: true,
          },
        },
        {
          name: 'heading',
          type: 'text',
          required: true,
          label: 'Section Heading',
        },
        {
          name: 'links',
          type: 'array',
          label: 'Section Links',
          fields: [
            link({
              appearances: false,
            }),
          ],
          admin: {
            initCollapsed: true,
          },
        },
      ],
      admin: {
        initCollapsed: true,
        components: {
          RowLabel: '@/Footer/SectionRowLabel#SectionRowLabel',
        },
      },
    },
  ],
  hooks: {
    afterChange: [revalidateFooter],
  },
}
