'use client'

import { FAQBlock } from '@/payload-types'
import { useRowLabel } from '@payloadcms/ui'

export const QARowLabel = () => {
  const { data, rowNumber } = useRowLabel<NonNullable<FAQBlock['faqs']>[number]>()

  const customLabel = data.question || `Question ${String((rowNumber || 0) + 1).padStart(2, '0')}`

  return <div>{customLabel}</div>
}
