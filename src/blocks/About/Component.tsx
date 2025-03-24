import { cn } from '@/utilities/ui'
import React from 'react'
import RichText from '@/components/RichText'

import type { AboutBlock as AboutBlockProps } from '@/payload-types'
import { RenderBlocks } from '../RenderBlocks'

export const AboutBlock: React.FC<AboutBlockProps> = (props) => {
  const { layout } = props
  return <RenderBlocks blocks={layout} />
}
