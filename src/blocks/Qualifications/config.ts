import type { Block } from 'payload'

export const Qualifications: Block = {
  slug: 'qualifications',
  interfaceName: 'QualificationsBlock',
  fields: [
    {
      name: 'qualifications',
      type: 'relationship',
      relationTo: 'qualifications',
      hasMany: true,
      admin: {
        description: 'This field automatically includes all qualifications',
        hidden: true,
      },
    },
  ],
}
