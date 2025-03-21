'use client'

import { usePayloadAPI, useRowLabel } from '@payloadcms/ui'
import { OfferingsListBlock } from '@/payload-types'
import { Offering } from '@/payload-types'

export const OfferingRowLabel = () => {
  const { data, rowNumber: rowNumberFromPayload } =
    useRowLabel<NonNullable<OfferingsListBlock['pitches']>[number]>()

  const offeringId = data?.offering || ''

  const [{ data: offeringData, isError, isLoading }, { setParams }] = usePayloadAPI(
    `/api/offerings`,
    {
      initialParams: {
        depth: 0,
        select: { name: true, id: true },
      },
    },
  )

  const offering = offeringData?.docs?.find((doc: Offering) => doc.id === offeringId) || null

  const rowNumber = rowNumberFromPayload || 0

  const name = offering?.name || `Pitch ${String(rowNumber + 1).padStart(2, '0')}`

  return <>{name}</>
}
