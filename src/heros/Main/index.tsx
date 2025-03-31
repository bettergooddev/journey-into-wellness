'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import React, { useEffect } from 'react'

import type { Page } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'
import { motion } from 'motion/react'

export const MainHero: React.FC<Page['hero']> = ({ links, media, heading, subheading }) => {
  const { setHeaderTheme } = useHeaderTheme()

  useEffect(() => {
    setHeaderTheme('dark')
  })

  return (
    <section className="relative flex items-center justify-center overflow-hidden text-center">
      <div className="container-large -mt-6 flex flex-col">
        {heading && (
          <motion.div
            initial={{ opacity: 0, scaleX: 1.05 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 2, type: 'spring', bounce: 0 }}
            viewport={{ once: true }}
          >
            <RichText
              className="-mb-5 text-secondary-light [&_*]:!m-0 [&_*]:text-center [&_*]:text-secondary-light"
              data={heading}
              enableGutter={false}
            />
          </motion.div>
        )}
        {subheading && (
          <RichText className="[&_*]:text-se mt-8 text-secondary-light [&_*]:!m-0" data={subheading} enableGutter={false} />
        )}

        {Array.isArray(links) && links.length > 0 && (
          <ul className="mt-12 flex justify-center gap-4">
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
