import type { Block, Field } from 'payload'

const QA: Field[] = [
  {
    name: 'question',
    type: 'text',
    required: true,
  },
  {
    name: 'answer',
    type: 'textarea',
    required: true,
  },
]

export const FAQ: Block = {
  slug: 'faq',
  interfaceName: 'FAQBlock',
  fields: [
    {
      name: 'heading',
      type: 'text',
      required: true,
    },
    {
      name: 'faqs',
      type: 'array',
      minRows: 3,
      fields: QA,
      admin: {
        components: {
          RowLabel: '@/blocks/FAQ/QARowLabel#QARowLabel',
        },
      },
    },
  ],
}
