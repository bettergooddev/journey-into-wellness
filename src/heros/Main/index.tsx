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
    <section className="relative  flex text-center items-center justify-center [&_*]:text-secondary-light overflow-hidden">
      <div className="flex flex-col -mt-6">
        {heading && <RichText className="[&_*]:!m-0 -mb-5" data={heading} enableGutter={false} />}
        {subheading && (
          <RichText className="[&_*]:!m-0 mt-8" data={subheading} enableGutter={false} />
        )}

        {Array.isArray(links) && links.length > 0 && (
          <ul className="flex md:justify-center gap-4 mt-12">
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

      <div className="min-h-[85vh] select-none">
        {media && typeof media === 'object' && (
          <>
            <Media
              fill
              imgClassName="-z-10 object-cover blur-sm scale-110"
              priority
              resource={media}
            />
            <div className="absolute inset-0 -z-10 bg-primary-dark/20 bg-blend-multiply" />
          </>
        )}
      </div>
    </section>
  )
}
