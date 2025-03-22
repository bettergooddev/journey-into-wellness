import React from 'react'

import type { OfferingsListBlock as OfferingsListBlockProps } from '@/payload-types'

import { appendKeys } from '@/utilities/appendKeys'
import { OfferingCard } from './OfferingCard'
import { InformationList } from './InformationList'

export const OfferingsListBlock: React.FC<OfferingsListBlockProps> = (props) => {
  const { heading, pitches: pitchesProp } = props

  const pitches = appendKeys(pitchesProp)

  return (
    <>
      <div className="bg-primary py-heading text-center">
        <h2 className="container-small pb-[4rem] text-primary-50 lg:pb-[8rem]">{heading}</h2>
      </div>

      {pitches.map(({ key, ...pitch }, index) => (
        <div
          className="relative -mt-[4rem] rounded-t-[4rem] bg-gradient-to-b from-primary-100 to-secondary-light pb-[4rem] pt-[1.35rem] lg:-mt-[8rem] lg:rounded-t-[8rem] lg:pb-[8rem] lg:pt-[8rem] [&:last-child]:pb-0"
          key={key}
        >
          <div className="container-large">
            <div className="grid items-center gap-x-24 lg:grid-cols-2 lg:grid-rows-[auto,auto]">
              <OfferingCard offering={pitch.offering} />
              <InformationList pitch={pitch} index={index} />
            </div>
          </div>
        </div>
      ))}
    </>
  )
}
