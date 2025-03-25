import React from 'react'

import type { CallToActionBlock as CTABlockProps } from '@/payload-types'

import RichText from '@/components/RichText'
import { CMSLink } from '@/components/Link'
import { cn } from '@/utilities/ui'
import { appendKeys } from '@/utilities/appendKeys'

export const CallToActionBlock: React.FC<CTABlockProps> = (props) => {
  const {
    heading,
    // subheading,
    links: linksProp,
    id,
  } = props
  const links = appendKeys(linksProp, { shallow: true })

  const style = {
    '--ring-size': '80vw',
    '--ring-delta': '8vw',
  } as React.CSSProperties

  return (
    <>
      <div className="relative -mb-section overflow-hidden" style={style}>
        <div className="pointer-events-none absolute inset-0 left-1/2 z-0 aspect-square w-[var(--ring-size)] -translate-x-1/2 rounded-full border-2 border-dashed border-primary/50" />

        <div className="pointer-events-none absolute inset-0 left-1/2 top-[calc(var(--ring-delta)/2)] z-0 aspect-square w-[calc(var(--ring-size)_-_var(--ring-delta))] -translate-x-1/2 rounded-full border-2 border-dashed border-primary/50" />
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent to-secondary-light" />

        <div className="container-small relative z-10 pb-[7rem] pt-[12rem] text-center">
          {heading && (
            <RichText
              className="!type-h1 [&_*]:!type-h1 !-mb-4 [&_*]:!m-0 [&_*]:!text-secondary"
              data={heading}
              enableGutter={false}
            />
          )}
          {/* {subheading && <p className="mt-8 text-secondary">{subheading}</p>} */}

          {Array.isArray(links) && links.length > 0 && (
            <ul className={cn('mt-14 flex flex-row flex-wrap justify-center gap-4')}>
              {links.map(({ key, link }) => {
                const { key: _, ...linkProps } = link
                const appearance = linkProps.appearance == 'primary' ? 'secondary' : 'outline'
                return (
                  <li key={key} className="w-full lg:w-min">
                    <CMSLink {...linkProps} className={cn('w-full')} appearance={appearance} />
                  </li>
                )
              })}
            </ul>
          )}
        </div>
      </div>
    </>
  )
}
