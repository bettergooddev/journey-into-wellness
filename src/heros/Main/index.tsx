'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import React, { useEffect } from 'react'

import type { Page } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'

export const MainHero: React.FC<Page['hero']> = ({ links, media, heading, subheading }) => {
  const { setHeaderTheme } = useHeaderTheme()

  useEffect(() => {
    setHeaderTheme('dark')
  })

  return (
    <section className="relative flex items-center justify-center overflow-hidden text-center [&_*]:text-secondary-light">
      <div className="-mt-6 flex flex-col">
        {heading && <RichText className="-mb-5 [&_*]:!m-0" data={heading} enableGutter={false} />}
        {subheading && <RichText className="mt-8 [&_*]:!m-0" data={subheading} enableGutter={false} />}

        {Array.isArray(links) && links.length > 0 && (
          <ul className="mt-12 flex gap-4 md:justify-center">
            {links.map(({ link }, i) => {
              return (
                <li key={i}>
                  <CMSLink {...link} />
                </li>
              )
            })}
          </ul>
        )}
      </div>

      <div className="min-h-[90vh] select-none">
        {media && typeof media === 'object' && (
          <>
            <Media fill imgClassName="-z-10 object-cover scale-110" priority resource={media} />
            <div className="absolute inset-0 -z-10 bg-primary-dark/40 bg-blend-multiply" />
          </>
        )}
      </div>
    </section>
  )
}
