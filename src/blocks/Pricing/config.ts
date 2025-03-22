import type { Block } from 'payload'

export const Pricing: Block = {
  slug: 'pricing',
  interfaceName: 'PricingBlock',
  fields: [
    {
      name: 'primary',
      type: 'relationship',
      relationTo: 'offerings',
      required: true,
    },
    {
      name: 'secondary',
      type: 'relationship',
      relationTo: 'offerings',
      hasMany: true,
      minRows: 2,
      maxRows: 2,
      required: true,
    },
  ],
}
