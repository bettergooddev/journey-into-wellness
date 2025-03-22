import { cn } from '@/utilities/ui'
import React from 'react'
import RichText from '@/components/RichText'

import type { OfferingsListBlock as OfferingsListBlockProps } from '@/payload-types'

import { CMSLink } from '../../components/Link'
import { BookOpen, Heart, Shield } from 'lucide-react'
import Image from 'next/image'
import { appendKeys } from '@/utilities/appendKeys'
import { CollapsibleCard } from './CollapsibleCard'
import { Media } from '@/components/Media'
import { InformationList } from './InformationList'

export const OfferingsListBlock: React.FC<OfferingsListBlockProps> = (props) => {
  const { heading, pitches: pitchesProp } = props

  const pitches = appendKeys(pitchesProp)

  return (
    <>
      <div className="bg-primary py-heading text-center">
        <h2 className="container-small text-primary-50 pb-[4rem] lg:pb-[8rem]">{heading}</h2>
      </div>

      {pitches.map(({ key, ...pitch }, index) => (
        <div
          className="rounded-t-[4rem] lg:rounded-t-[8rem] -mt-[4rem] lg:-mt-[8rem] relative bg-gradient-to-b from-primary-100 to-secondary-light pt-[1.35rem] lg:pt-[8rem] pb-[4rem] lg:pb-[8rem]"
          key={key}
        >
          <div className="container-large">
            <div className="grid lg:grid-cols-2 lg:grid-rows-[auto,auto] gap-x-24 items-center">
              <CollapsibleCard pitch={pitch} />
              <InformationList pitch={pitch} index={index} />
            </div>
          </div>
        </div>
      ))}
    </>
  )
}
