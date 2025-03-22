import React from 'react'
import type { OfferingsListBlock as OfferingsListBlockProps } from '@/payload-types'
import { appendKeys } from '@/utilities/appendKeys'
import { Media } from '@/components/Media'

export function InformationList({
  pitch: pitchProp,
  index,
}: {
  pitch: OfferingsListBlockProps['pitches'][number]
  index: number
}) {
  const pitch = appendKeys(pitchProp)
  const information = pitch.information!

  const mask = index === 0 ? 'clip-brain' : 'clip-face max-w-[24rem] ml-[7%]'

  return (
    <>
      <div className={`relative hidden size-full self-center overflow-hidden lg:flex ${mask}`}>
        <Media className="size-full" imgClassName={`size-full object-cover `} fill priority resource={pitch.image} />
      </div>

      <br className="hidden lg:block" />

      <div className="mb-0 mt-20 space-y-[4rem] lg:mb-64 lg:mt-32 lg:space-y-32">
        {information.map(({ icon, heading, description, key }) => (
          <div className="flex" key={key}>
            <div className="grid grid-cols-[1.35rem,auto] gap-x-5 gap-y-3">
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
