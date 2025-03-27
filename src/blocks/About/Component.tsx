import { cn } from '@/utilities/ui'
import React from 'react'
import RichText from '@/components/RichText'

import type { AboutBlock as AboutBlockProps } from '@/payload-types'
import { RenderBlocks } from '../RenderBlocks'

export const AboutBlock: React.FC<AboutBlockProps> = (props) => {
  const { layout, heading } = props
  return (
    <>
      <div className="bg-primary py-heading text-center">
        <h2 className="container-small pb-[4rem] text-primary-50 lg:pb-[8rem]">{heading}</h2>
      </div>

      <div className="relative -mt-[4rem] mb-section rounded-t-[4rem] bg-gradient-to-b from-primary-100 to-secondary-light pt-[1.35rem] lg:-mt-[8rem] lg:rounded-t-[8rem] [&>:first-child]:mt-[0rem] lg:[&>:first-child]:mt-[6rem]">
        <RenderBlocks blocks={layout} />
      </div>
    </>
  )
}
