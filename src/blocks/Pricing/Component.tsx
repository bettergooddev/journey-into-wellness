import { cn } from '@/utilities/ui'
import React from 'react'
import RichText from '@/components/RichText'

import type { PricingBlock as PricingBlockProps } from '@/payload-types'
import { Button } from '@/components/ui/button'
import { Info } from 'lucide-react'

export const PricingBlock: React.FC<PricingBlockProps> = (props) => {
  const { primary, secondary } = props

  return (
    <div className="container-large mx-auto grid gap-6 md:grid-cols-2">
      <div className="rounded-lg bg-[#e3e5dc] p-8">
        <div className="mb-4 inline-block rounded-full bg-[#8a8f82] px-3 py-1 text-sm text-white">Bundle</div>

        <h2 className="mb-6 font-serif text-3xl">Live Session + Course</h2>

        <p className="mb-8 text-[#333]">
          Combine the immediate impact of the Trauma Release Session with the transformative insights of the Mindset Shift
          Course. The course prepares your mind for deeper healing, enhancing the session&apos;s effectiveness.
        </p>

        <div className="mb-8">
          <h3 className="mb-1 font-medium">Mindset Shift Course</h3>
          <p className="text-sm text-[#333]">
            Five transformative modules to help you remove limiting beliefs and foster resilience.
          </p>
        </div>

        <div className="mb-8">
          <h3 className="mb-1 font-medium">Trauma Release Session</h3>
          <p className="text-sm text-[#333]">One-on-one session to release emotional burdens.</p>
        </div>

        <div className="mb-4">
          <p className="text-sm">Bundle Discount</p>
          <div className="flex items-baseline gap-2">
            <span className="font-serif text-4xl">$297</span>
            <span className="text-sm text-[#666] line-through">$397 ($100 off)</span>
          </div>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <Button className="rounded-full bg-[#2d3328] text-white hover:bg-[#1a1f14]">Book Now</Button>
          <Button variant="outline" className="rounded-full border-[#2d3328] text-[#2d3328]">
            See Testimonials
          </Button>
        </div>
      </div>

      {/* Right Column */}
      <div className="flex flex-col gap-6">
        {/* Trauma Release Session Card */}
        <div className="relative rounded-lg bg-[#e3e5dc] p-8">
          <div className="mb-4 inline-block rounded-full bg-[#8a8f82] px-3 py-1 text-sm text-white">Live Session</div>

          <div className="absolute right-8 top-8">
            <Info className="h-5 w-5 text-[#8a8f82]" />
          </div>

          <h2 className="mb-2 font-serif text-3xl">Trauma Release Session</h2>
          <p className="mb-8 text-[#333]">Reclaim your peace of mind with a single session.</p>

          <div className="mb-6">
            <span className="font-serif text-4xl">$397</span>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button className="rounded-full bg-[#2d3328] text-white hover:bg-[#1a1f14]">Book Now</Button>
            <Button variant="outline" className="rounded-full border-[#2d3328] text-[#2d3328]">
              See Testimonials
            </Button>
          </div>
        </div>

        {/* Mindset Shift Course Card */}
        <div className="relative rounded-lg bg-[#e3e5dc] p-8">
          <div className="mb-4 inline-block rounded-full bg-[#8a8f82] px-3 py-1 text-sm text-white">Course</div>

          <div className="absolute right-8 top-8">
            <Info className="h-5 w-5 text-[#8a8f82]" />
          </div>

          <h2 className="mb-2 font-serif text-3xl">Mindset Shift Course</h2>
          <p className="mb-8 text-[#333]">Discover a brand new mentality and lifelong tools.</p>

          <div className="mb-6">
            <span className="font-serif text-4xl">$29</span>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button className="rounded-full bg-[#2d3328] text-white hover:bg-[#1a1f14]">Enroll Now</Button>
            <Button variant="outline" className="rounded-full border-[#2d3328] text-[#2d3328]">
              See Testimonials
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
