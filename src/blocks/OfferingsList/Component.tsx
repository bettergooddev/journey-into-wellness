import { cn } from '@/utilities/ui'
import React from 'react'
import RichText from '@/components/RichText'

import type { OfferingsListBlock as OfferingsListBlockProps } from '@/payload-types'

import { CMSLink } from '../../components/Link'
import { BookOpen, Heart, Shield } from 'lucide-react'
import Image from 'next/image'
import { appendKeys } from '@/utilities/appendKeys'
import { CollapsibleCard } from './CollapsibleCard'

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

export function InformationList({ pitch }: { pitch: OfferingsListBlockProps['pitches'][number] }) {
  return (
    <div className="space-y-12">
      {/* Scalloped image */}
      <div className="flex justify-center">
        <div className="relative w-full max-w-md aspect-square">
          <div className="absolute inset-0 rounded-[40%] overflow-hidden">
            <Image
              src="/placeholder.svg?height=600&width=600"
              alt="Person walking in forest path"
              width={600}
              height={600}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Bullet point sections */}
      <div className="space-y-12 mt-8">
        {/* Bullet point 1 */}
        <div className="flex gap-6">
          <div className="flex-shrink-0 w-12 h-12 bg-[#2d3c2d] rounded-md flex items-center justify-center">
            <BookOpen className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-serif text-[#2d3c2d] mb-2">
              Break free from traditional counseling
            </h3>
            <p className="text-[#4a5a4a]">
              Unlike traditional therapy that centers on cognitive behavioral therapy, this approach
              works directly with your body's energy field. By harnessing the natural rhythm of your
              heart, it releases trauma at its core—creating deep, lasting shifts without the need
              for prolonged analysis.
            </p>
          </div>
        </div>

        {/* Bullet point 2 */}
        <div className="flex gap-6">
          <div className="flex-shrink-0 w-12 h-12 bg-[#2d3c2d] rounded-md flex items-center justify-center">
            <Shield className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-serif text-[#2d3c2d] mb-2">
              Treatment doesn't mean re-living the pain
            </h3>
            <p className="text-[#4a5a4a]">
              Healing doesn't have to be re-traumatizing. Our method helps you process and release
              the emotional weight tied to past events— without getting stuck in the overwhelming
              emotions or having to re-live the pain.
            </p>
          </div>
        </div>

        {/* Bullet point 3 */}
        <div className="flex gap-6">
          <div className="flex-shrink-0 w-12 h-12 bg-[#2d3c2d] rounded-md flex items-center justify-center">
            <Heart className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-serif text-[#2d3c2d] mb-2">Move forward with confidence</h3>
            <p className="text-[#4a5a4a]">
              While traditional therapy can take months or even years, this session empowers you to
              connect with your inner resilience. It helps you reclaim your sense of control,
              fostering self-trust and lasting emotional freedom.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
