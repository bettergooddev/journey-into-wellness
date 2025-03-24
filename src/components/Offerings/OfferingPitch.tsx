import React from 'react'
import type { OfferingsListBlock as OfferingsListBlockProps } from '@/payload-types'
import { appendKeys } from '@/utilities/appendKeys'
import { Media } from '@/components/Media'
import { tv } from 'tailwind-variants'
import { classes } from '../clips/classes'
import { cn } from '@/utilities/ui'

export function OfferingPitch({
  pitch: pitchProp,
  index,
}: {
  pitch: OfferingsListBlockProps['pitches'][number]
  index: number
}) {
  const pitch = appendKeys(pitchProp)
  const information = pitch.information!

  const clip = pitch.clip ?? 'face'

  return (
    <>
      <div className={cn(classes.clip({ clip }), 'relative hidden size-full self-center overflow-hidden lg:flex')}>
        <Media className="size-full" imgClassName={`size-full object-cover `} fill priority resource={pitch.image} />
      </div>

      <br className="hidden lg:block" />

      <div className="mb-0 mt-20 space-y-[4rem] lg:mb-64 lg:mt-32 lg:space-y-32">
        {information.map(({ icon, heading, description, key }) => (
          <div className="flex" key={key}>
            <div className="grid grid-cols-[1.55rem,auto] gap-x-5 gap-y-3">
              <div className="relative">
                <Media className="size-full" imgClassName="size-full" fill priority resource={icon} />
              </div>
              <h3 className="">{heading}</h3>
              <br className="!block" />
              <p className="opacity-65">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
