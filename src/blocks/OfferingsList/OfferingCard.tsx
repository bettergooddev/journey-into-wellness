'use client'

import { CMSLink } from '@/components/Link'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import type { OfferingsListBlock as OfferingsListBlockProps } from '@/payload-types'
import { appendKeys } from '@/utilities/appendKeys'
import { RichText } from '@payloadcms/richtext-lexical/react'
import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { useEventListener } from 'usehooks-ts'
import { Info } from 'lucide-react'
import Lenis from 'lenis'

export function OfferingCard({
  offering: offeringProp,
}: {
  offering: NonNullable<OfferingsListBlockProps['pitches']>[number]['offering']
}) {
  const offering = appendKeys(offeringProp)

  const cardRef = useRef<HTMLDivElement>(null)
  const [isStuck, setIsStuck] = useState(false)

  const onScroll = () => {
    if (!cardRef.current || !cardRef.current?.parentElement) return
    const container = cardRef.current.parentElement

    const cardRect = cardRef.current.getBoundingClientRect()
    const containerRect = container.getBoundingClientRect()
    const distance = cardRect.top - containerRect.top

    setIsStuck(distance > 200)
  }

  function onInfoClick() {
    if (!cardRef.current?.parentElement) return
    const parent = cardRef.current.parentElement

    const lenis = new Lenis()
    lenis.scrollTo(parent, {
      offset: -150,
      duration: 1,
    })

    let animationFrameId: any

    function raf(time: number) {
      lenis.raf(time)

      animationFrameId = requestAnimationFrame(raf)
      setTimeout(() => {
        cancelAnimationFrame(animationFrameId)
        lenis.destroy()
      }, 1000)
    }

    animationFrameId = requestAnimationFrame(raf)
  }

  useEventListener('scroll', onScroll)

  if (typeof offering === 'string') return

  return (
    <motion.div
      ref={cardRef}
      className="relative h-full lg:sticky lg:top-28"
      layout="position"
      transition={{
        layout: { duration: 0.4, ease: 'easeOut' },
      }}
    >
      <div className="relative mt-5 w-full rounded-[3.15rem] bg-secondary-light p-10 shadow-lg lg:absolute lg:left-0 lg:top-1/2 lg:mt-0 lg:-translate-y-1/2 lg:transform lg:rounded-[2.5rem]">
        <AnimatePresence mode="sync">
          {isStuck && (
            <motion.div
              className="absolute right-4 top-6"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Button variant="ghost" asChild>
                <div onClick={onInfoClick}>
                  <Info className="size-6 cursor-pointer fill-secondary/15 !stroke-secondary !p-0 opacity-75 transition-opacity hover:opacity-100 [&_circle]:stroke-none" />
                </div>
              </Button>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence mode="sync">
          {!isStuck && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Badge>Live Session</Badge>
              <div className="block h-4" />
            </motion.div>
          )}
        </AnimatePresence>

        <h2>{offering.name}</h2>

        <motion.p className="mt-1" animate={{ opacity: isStuck ? 0.5 : 1 }} transition={{ duration: 0.3 }}>
          {offering.tagline}
        </motion.p>

        <AnimatePresence mode="sync">
          {!isStuck && (
            <>
              <motion.div
                className="overflow-hidden"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="block h-9" />
                <RichText className="[&_*]:type-body prose [&_*::marker]:text-primary/45" data={offering.highlights} />

                <div className="block h-12" />
                {offering.description && <p className="opacity-60">{offering.description}</p>}
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {Array.isArray(offering.links) && offering.links.length > 0 && (
          <ul className="mt-8 flex flex-wrap gap-4">
            {offering.links.map(({ key, link }) => {
              const { key: _, ...linkProps } = link
              return (
                <li key={key} className="w-full lg:w-min">
                  <CMSLink {...linkProps} className="w-full" />
                </li>
              )
            })}
          </ul>
        )}
      </div>
    </motion.div>
  )
}
