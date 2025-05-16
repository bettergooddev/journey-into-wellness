import type { Block } from 'payload'

export const Testimonials: Block = {
  slug: 'testimonials',
  interfaceName: 'TestimonialsBlock',
  fields: [
    {
      name: 'sectionId',
      type: 'text',
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
      name: 'testimonials',
      type: 'relationship',
      relationTo: 'testimonials',
      hasMany: true,
      admin: {
        // disabled: true,
        description: 'This field automatically includes all testimonials',
        hidden: true,
      },
    },
  ],
}
