import type { Block } from 'payload'
import { Split } from '../Split/config'
import { Qualifications } from '../Qualifications/config'

export const About: Block = {
  slug: 'about',
  interfaceName: 'AboutBlock',
  fields: [
    {
      name: 'heading',
      type: 'text',
      required: true,
    },
    {
      name: 'layout',
      type: 'blocks',
      blocks: [Split, Qualifications],
      required: true,
      admin: {
        initCollapsed: true,
      },
    },
  ],
}
