'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import React, { useEffect, useState } from 'react'

import type { Page } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'
import { motion } from 'motion/react'
import { float, fade, staggerContainer } from '@/utilities/animations'

const animations = {
  parent: staggerContainer,
  child: {
    float,
    fade,
  },
}
animations.child.float.show.transition.duration = 1.25
animations.child.fade.show.transition.delay = 0.9

export const MainHero: React.FC<Page['hero']> = ({ links, media, poster, heading, subheading }) => {
  const { setHeaderTheme } = useHeaderTheme()
  const [mediaLoaded, setMediaLoaded] = useState(false)

  useEffect(() => {
    setHeaderTheme('dark')
  })

  return (
    <section className="relative flex items-center justify-center overflow-hidden text-center">
      <motion.div
        className="container-large -mt-6 flex flex-col"
        viewport={{ once: true }}
        initial="hidden"
        whileInView="show"
        variants={animations.parent}
      >
        {heading && (
          <motion.div variants={animations.child.float}>
            <RichText
              className="-mb-5 text-secondary-light [&_*]:!m-0 [&_*]:text-center [&_*]:text-secondary-light"
              data={heading}
              enableGutter={false}
            />
          </motion.div>
        )}
        {subheading && (
          <motion.div variants={animations.child.float}>
            <RichText
              className="[&_*]:text-se mt-8 text-secondary-light [&_*]:!m-0"
              data={subheading}
              enableGutter={false}
            />
          </motion.div>
        )}

        {Array.isArray(links) && links.length > 0 && (
          <motion.ul className="mt-12 flex justify-center gap-4" variants={animations.child.fade}>
            {links.map(({ link }, i) => {
              return (
                <li key={i}>
                  <CMSLink {...link} />
                </li>
              )
            })}
          </motion.ul>
        )}
      </motion.div>

      <div className="min-h-[90vh] select-none">
        {media && typeof media === 'object' && (
          <>
            {poster && (
              <Media
                fill
                imgClassName={`${mediaLoaded ? 'opacity-0' : 'opacity-100'} -z-10 object-cover scale-110 transition-opacity duration-500`}
                videoClassName={`${mediaLoaded ? 'opacity-0' : 'opacity-100'} -z-10 object-cover scale-110 transition-opacity duration-500`}
                priority
                resource={poster}
              />
            )}
            <Media
              fill
              imgClassName="-z-[11] object-cover scale-110"
              videoClassName="-z-[11] object-cover scale-110"
              priority
              resource={media}
              onLoad={() => setMediaLoaded(true)}
            />
            <div className="absolute inset-0 -z-10 bg-primary-dark/40 bg-blend-multiply" />
          </>
        )}
      </div>
    </section>
  )
}
