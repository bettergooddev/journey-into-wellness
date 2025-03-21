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
export function CollapsibleCard({
  pitch: pitchProp,
}: {
  pitch: NonNullable<OfferingsListBlockProps['pitches']>[number]
}) {
  const pitch = appendKeys(pitchProp)
  const { offering } = pitch

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
      className="lg:sticky lg:top-28 h-full relative"
      layout="position"
      transition={{
        layout: { duration: 0.4, ease: 'easeOut' },
      }}
    >
      <div className="lg:absolute lg:top-1/2 lg:left-0 w-full lg:-translate-y-1/2 lg:transform shadow-lg bg-secondary-light lg:rounded-[2.5rem] rounded-[3.15rem] mt-5 lg:mt-0  p-10 relative">
        <AnimatePresence mode="sync">
          {isStuck && (
            <motion.div
              className="absolute top-6 right-4 "
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Button variant="ghost" asChild>
                <div onClick={onInfoClick}>
                  <Info className="size-6 [&_circle]:stroke-none !stroke-secondary fill-secondary/15 cursor-pointer !p-0 opacity-75 hover:opacity-100 transition-opacity" />
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
              <div className="h-4 block" />
            </motion.div>
          )}
        </AnimatePresence>

        <h2>{offering.name}</h2>

        <motion.p
          className="mt-1"
          animate={{ opacity: isStuck ? 0.5 : 1 }}
          transition={{ duration: 0.3 }}
        >
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
                <div className="h-9 block" />
                <RichText
                  className="prose [&_*]:type-body [&_*::marker]:text-primary/45"
                  data={offering.highlights}
                />

                <div className="h-12 block" />
                <p className="opacity-60">{offering.description}</p>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {Array.isArray(offering.links) && offering.links.length > 0 && (
          <ul className="flex gap-4 mt-8 flex-wrap">
            {offering.links.map(({ key, link }) => {
              const { key: _, ...linkProps } = link
              return (
                <li key={key} className="lg:w-min w-full">
                  <CMSLink {...linkProps} className=" w-full" />
                </li>
              )
            })}
          </ul>
        )}
      </div>
    </motion.div>
  )
}
