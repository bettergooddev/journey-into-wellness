import { cn } from '@/utilities/ui'
import React from 'react'
import RichText from '@/components/RichText'
import * as motion from 'motion/react-client'
import type { SplitBlock as SplitBlockProps } from '@/payload-types'
import { fadeUp, reverseStaggerContainer } from '@/utilities/animations'

import { CMSLink } from '../../components/Link'
import { Media } from '@/components/Media'
import { tv } from 'tailwind-variants'
import { classes as clipClasses } from '@/components/clips/classes'

const animations = {
  parent: reverseStaggerContainer,
  child: fadeUp,
}

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
    <motion.div
      className="container-large grid grid-cols-1 items-center gap-x-20 gap-y-12 md:grid-flow-dense md:grid-cols-2"
      initial="hidden"
      whileInView="show"
      viewport={{
        margin: '20% 0px -20%',
        once: true,
      }}
      variants={animations.parent}
    >
      <motion.div
        className={cn('order-2 flex flex-col justify-center', classes.body({ reverse }))}
        variants={animations.child}
      >
        {eyebrow && <span className="type-caption opacity-65">{eyebrow}</span>}
        {heading && <h2 className="mt-[0.45rem]">{heading}</h2>}
        {subheading && <h4 className="mt-[0.25rem]">{subheading}</h4>}
        {body && (
          <RichText
            data={body}
            className="[&_*]:type-body !mx-0 mt-7 text-balance !px-0 text-secondary [&_*]:max-w-[52ch]"
          />
        )}
      </motion.div>

      <motion.div
        className={cn(
          'relative order-1 flex size-full flex-col justify-center overflow-hidden',
          classes.graphic({ reverse }),
          classes.clip({ clip }),
        )}
        variants={animations.child}
      >
        {graphic && <Media className="w-full" imgClassName="size-full object-cover" fill priority resource={graphic} />}
      </motion.div>
    </motion.div>
  )
}
