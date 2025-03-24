import { cn } from '@/utilities/ui'
import React from 'react'
import RichText from '@/components/RichText'

import type { SplitBlock as SplitBlockProps } from '@/payload-types'

import { CMSLink } from '../../components/Link'
import { Media } from '@/components/Media'
import { tv } from 'tailwind-variants'
import { classes as clipClasses } from '@/components/clips/classes'

const classes = {
  body: tv({
    variants: {
      reverse: {
        true: 'md:order-2',
        false: 'md:order-1',
      },
    },
  }),
  graphic: tv({
    variants: {
      reverse: {
        true: 'md:order-1',
        false: 'md:order-2',
      },
    },
  }),
  ...clipClasses,
}

export const SplitBlock: React.FC<SplitBlockProps> = (props) => {
  const { eyebrow, heading, subheading, body, graphic, reverse: reverseProp } = props
  const reverse = reverseProp ?? false

  const clip = props.clip ?? 'face'

  return (
    <div className="container-large py-16">
      <div className="grid grid-cols-1 gap-x-20 gap-y-12 md:grid-flow-dense md:grid-cols-2">
        <div className={cn('order-2 flex flex-col justify-center', classes.body({ reverse }))}>
          {eyebrow && <span className="type-caption opacity-65">{eyebrow}</span>}
          {heading && <h2 className="mt-[0.45rem]">{heading}</h2>}
          {subheading && <h4 className="mt-[0.5rem]">{subheading}</h4>}
          {body && (
            <RichText
              data={body}
              className="[&_*]:type-body !mx-0 mt-7 text-balance !px-0 text-secondary [&_*]:max-w-[52ch]"
            />
          )}
        </div>

        <div className={cn('order-1 flex flex-col justify-center', classes.graphic({ reverse }))}>
          <div className={cn('relative size-full overflow-hidden', classes.clip({ clip }))}>
            {graphic && <Media className="w-full" imgClassName="size-full object-cover" fill priority resource={graphic} />}
          </div>
        </div>
      </div>
    </div>
  )
}
