'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import React, { useEffect } from 'react'

import type { Page } from '@/payload-types'

import { Media } from '@/components/Media'
import RichText from '@/components/RichText'

export const SubtleHero: React.FC<Page['hero']> = ({ media, heading, description }) => {
  const { setHeaderTheme } = useHeaderTheme()

  useEffect(() => {
    setHeaderTheme('dark')
  })

  return (
    <section className="relative flex items-center justify-start overflow-hidden text-left text-secondary-light">
      <div className="container-large flex flex-col">
        {heading && (
          <RichText className="!m-0 !mb-6 [&_*]:!m-0 [&_h4]:!mb-3.5 [&_h4]:opacity-75" data={heading} enableGutter={false} />
        )}
        {description && <p className="!m-0 mt-12 max-w-[68ch]">{description}</p>}
      </div>

      <div className="min-h-[64vh] select-none">
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
