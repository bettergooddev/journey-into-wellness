import React from 'react'
import type { OfferingsListBlock as OfferingsListBlockProps } from '@/payload-types'
import { appendKeys } from '@/utilities/appendKeys'
import { Media } from '@/components/Media'

export function InformationList({
  pitch: pitchProp,
}: {
  pitch: OfferingsListBlockProps['pitches'][number]
}) {
  const pitch = appendKeys(pitchProp)
  const information = pitch.information!

  return (
    <div className="">
      <div className="relative clip-brain mb-2 w-full">
        <Media
          className="size-full"
          imgClassName="size-full object-cover"
          fill
          priority
          resource={pitch.image}
        />
      </div>

      <div className="space-y-32 mt-32 mb-64">
        {information.map(({ icon, heading, description, key }) => (
          <div className="flex" key={key}>
            <div className="grid grid-cols-[1.35rem,auto] gap-y-3 gap-x-5">
              <div className="relative ">
                <Media
                  className="size-full"
                  imgClassName="size-full"
                  fill
                  priority
                  resource={icon}
                />
              </div>
              <h3 className="">{heading}</h3>
              <br />
              <p className="opacity-65">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
