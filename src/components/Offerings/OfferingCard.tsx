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
import { tv } from 'tailwind-variants'
import { cn } from '@/utilities/ui'
import { getOfferingType } from '@/collections/Offerings/hooks/getOfferingType'

const classes = {
  wrapper: tv({
    variants: {
      variant: {
        pitch: 'lg:sticky lg:top-28',
        price: '',
      },
    },
  }),
  inner: tv({
    variants: {
      variant: {
        pitch: 'shadow-lg lg:absolute lg:left-0 lg:top-1/2 lg:mt-0 lg:-translate-y-1/2 lg:transform',
        price: 'flex h-full flex-col shadow-lg',
      },
      theme: {
        default: [
          'bg-secondary-light',
          '[--text-base:theme(colors.secondary.DEFAULT)] [--text-marker:theme(colors.secondary.DEFAULT/0.45)] [--text-muted:theme(colors.secondary.DEFAULT/0.65)]',
        ],
        primary: [
          'bg-primary-100',
          '[--text-base:theme(colors.primary.DEFAULT)] [--text-marker:theme(colors.primary.DEFAULT/0.45)] [--text-muted:theme(colors.primary.DEFAULT/0.65)]',
        ],
        'secondary-light': [
          'bg-secondary-100/30',
          '[--text-base:theme(colors.secondary.DEFAULT)] [--text-marker:theme(colors.secondary.DEFAULT/0.45)] [--text-muted:theme(colors.secondary.DEFAULT/0.65)]',
        ],
      },
    },
  }),
  buttons: tv({
    variants: {
      variant: {
        pitch: 'mt-8',
        price: 'mt-2',
      },
      theme: {
        default: 'border-secondary bg-secondary text-[var(--text-base)]',
        primary: 'border-primary bg-primary text-[var(--text-base)]',
        'secondary-light': 'border-secondary bg-secondary text-[var(--text-base)]',
      },
    },
  }),
}

export function OfferingCard({
  offering: offeringProp,
  variant = 'pitch',
  theme = 'default',
  collapsible = true,
  collapsed = true,
}: {
  offering: NonNullable<OfferingsListBlockProps['pitches']>[number]['offering']
  variant?: keyof typeof classes.wrapper.variants.variant
  theme?: keyof typeof classes.inner.variants.theme
  collapsible?: boolean
  collapsed?: boolean
}) {
  const offering = appendKeys(offeringProp)

  const cardRef = useRef<HTMLDivElement>(null)
  const [isCollapsed, setIsCollapsed] = useState(collapsed)

  const onScroll = () => {
    if (!collapsible) return
    if (!cardRef.current || !cardRef.current?.parentElement) return
    const container = cardRef.current.parentElement

    const cardRect = cardRef.current.getBoundingClientRect()
    const containerRect = container.getBoundingClientRect()
    const distance = cardRect.top - containerRect.top

    setIsCollapsed(distance > 200)
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

  const offeringType = getOfferingType(offering)

  return (
    <motion.div
      ref={cardRef}
      className={cn(classes.wrapper({ variant }), 'relative h-full')}
      layout="position"
      transition={{
        layout: { duration: 0.4, ease: 'easeOut' },
      }}
    >
      <div
        className={cn(
          classes.inner({ variant, theme }),
          'relative w-full rounded-[3.15rem] p-10 text-[var(--text-base)] lg:rounded-[2.5rem]',
        )}
      >
        <AnimatePresence mode="sync">
          {isCollapsed && (
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
          {!isCollapsed && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Badge variant={theme.includes('primary') ? 'primary' : 'secondary'}>{offeringType}</Badge>
              <div className="block h-4" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* {collapsible || !collapsed ? <h2>{offering.name}</h2> : <h3>{offering.name}</h3>} */}
        {!collapsed ? <h2>{offering.name}</h2> : <h3>{offering.name}</h3>}

        <motion.p className="mt-1 max-w-[48ch]" animate={{ opacity: isCollapsed ? 0.5 : 1 }} transition={{ duration: 0.3 }}>
          {offering.tagline}
        </motion.p>

        <AnimatePresence mode="sync">
          {!isCollapsed && (
            <>
              <motion.div
                className="overflow-hidden"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="block h-9" />
                <RichText
                  className="[&_*]:type-body type-body prose max-w-[48ch] [&_*::marker]:text-[var(--text-marker)] [&_*]:text-[var(--text-base)] [&_li:has(strong)]:my-4 [&_li:has(strong)]:text-[var(--text-muted)] [&_li:has(strong)_strong]:text-[var(--text-base)] [&_strong+*]:text-[var(--text-muted)] [&_strong]:mb-0.5 [&_strong]:inline-block [&_strong]:font-semibold"
                  data={offering.highlights}
                />
                {offering.description && (
                  <>
                    <div className="block h-12" />
                    <p className="max-w-[48ch] opacity-60">{offering.description}</p>
                  </>
                )}
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {variant === 'price' && (
          <>
            {offering.enableDiscount ? (
              <div className="mb-2 mt-auto flex flex-row items-baseline gap-2 pt-2">
                <h3 className="">{`$${offering.discountedPrice}`}</h3>
                <span className="!type-caption opacity-65">
                  <span className="line-through">{`$${offering.price}`}</span>
                  <span className="">{` (${offering.discountType === 'percentage' ? `${offering.discountAmount}% off` : `$${offering.discountAmount} off)`}`}</span>
                </span>
              </div>
            ) : (
              <div className="mb-2 mt-auto pt-2">
                <h3 className="">{`$${offering.price}`}</h3>
              </div>
            )}
          </>
        )}

        {Array.isArray(offering.links) && offering.links.length > 0 && (
          <ul className={cn(classes.buttons({ variant }), 'flex flex-wrap gap-4')}>
            {offering.links.map(({ key, link }) => {
              const { key: _, ...linkProps } = link
              return (
                <li key={key} className="w-full lg:w-min">
                  <CMSLink {...linkProps} className={cn(classes.buttons({ theme }), 'w-full')} />
                </li>
              )
            })}
          </ul>
        )}
      </div>
    </motion.div>
  )
}
