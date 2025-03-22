import type { CollectionConfig, Field } from 'payload'
import { slugField } from '@/fields/slug' // adjust import path as needed
import { authenticated } from '../../access/authenticated'
import { anyone } from '../../access/anyone'
import { linkGroup } from '@/fields/linkGroup'
import { BoldFeature, lexicalEditor, UnorderedListFeature } from '@payloadcms/richtext-lexical'

const Discount: Field[] = [
  {
    name: 'enableDiscount',
    type: 'checkbox',
    label: 'Apply Discount',
    required: false,
  },
  {
    name: 'discountType',
    type: 'select',
    label: 'Discount Type',
    options: [
      { label: 'Fixed', value: 'fixed' },
      { label: 'Percentage', value: 'percentage' },
    ],
    admin: {
      condition: (data) => Boolean(data?.enableDiscount),
    },
  },
  {
    name: 'discountAmount',
    type: 'number',
    label: 'Discount Amount',
    admin: {
      condition: (data) => Boolean(data?.enableDiscount),
    },
    required: false,
  },
]

const Price: Field[] = [
  {
    name: 'price',
    type: 'number',
    label: 'Price',
    required: true,
    admin: {
      components: {
        Description: '@/collections/Offerings/PriceDescription#PriceDescription',
      },
    },
  },
  ...Discount,
]

export const Offerings: CollectionConfig = {
  slug: 'offerings',
  labels: {
    singular: 'Offering',
    plural: 'Offerings',
  },
  access: {
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  admin: {
    defaultColumns: ['name', 'type', 'updatedAt'],
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'type',
      type: 'select',
      label: 'Type',
      required: true,
      options: [
        { label: 'Live Session', value: 'session' },
        { label: 'Course', value: 'course' },
        { label: 'Bundle', value: 'bundle' },
      ],
    },
    {
      name: 'name',
      type: 'text',
      label: 'Name',
      required: true,
    },
    ...Price,
    {
      name: 'tagline',
      type: 'text',
      label: 'Tagline',
      required: true,
    },
    {
      name: 'highlights',
      type: 'richText',
      label: 'Highlights',
      required: true,
      editor: lexicalEditor({
        features: () => [UnorderedListFeature(), BoldFeature()],
      }),
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Description',
    },
    linkGroup({
      appearances: ['default', 'primary', 'outline'],
      overrides: {
        maxRows: 2,
      },
    }),
  ],
}
