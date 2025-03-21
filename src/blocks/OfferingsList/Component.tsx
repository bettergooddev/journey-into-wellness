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
  const { heading, pitches } = props

  const pitch = pitches[0]!

  return (
    <>
      <div className="bg-primary py-heading text-center">
        <h2 className="container-small text-primary-50 pb-[8rem]">{heading}</h2>
      </div>

      <div className=" rounded-t-[8rem] -mt-[8rem] relative bg-gradient-to-b from-primary-100 to-secondary-light pt-[8rem] pb-[8rem]">
        <div className="container-large">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
            <CollapsibleCard pitch={pitch} />
            <InformationList pitch={pitch} />
          </div>
        </div>
      </div>
    </>
  )
}
