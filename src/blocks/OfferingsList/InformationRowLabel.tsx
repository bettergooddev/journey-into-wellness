'use client'

import { OfferingsListBlock } from '@/payload-types'
import { useRowLabel } from '@payloadcms/ui'

export const InformationRowLabel = () => {
  const { data, rowNumber } =
    useRowLabel<
      NonNullable<NonNullable<OfferingsListBlock['pitches']>[number]['information']>[number]
    >()

  const customLabel = data.heading || `Information ${String((rowNumber || 0) + 1).padStart(2, '0')}`

  return <div>{customLabel}</div>
}
