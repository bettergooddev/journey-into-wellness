import React, { Fragment } from 'react'

import type { Page } from '@/payload-types'

import { ArchiveBlock } from '@/blocks/ArchiveBlock/Component'
import { CallToActionBlock } from '@/blocks/CallToAction/Component'
import { ContentBlock } from '@/blocks/Content/Component'
import { FormBlock } from '@/blocks/Form/Component'
import { MediaBlock } from '@/blocks/MediaBlock/Component'
import { FeaturesBlock } from '@/blocks/Features/Component'
import { OfferingsListBlock } from '@/blocks/OfferingsList/Component'
import { PricingBlock } from '@/blocks/Pricing/Component'
import { TestimonialsBlock } from '@/blocks/Testimonials/Component'
import { SplitBlock } from './Split/Component'
import { FAQBlock } from './FAQ/Component'
import { AboutBlock } from './About/Component'
import { QualificationsBlock } from './Qualifications/Component'

const blockComponents = {
  archive: ArchiveBlock,
  content: ContentBlock,
  cta: CallToActionBlock,
  formBlock: FormBlock,
  mediaBlock: MediaBlock,
  features: FeaturesBlock,
  offeringsList: OfferingsListBlock,
  pricing: PricingBlock,
  testimonials: TestimonialsBlock,
  split: SplitBlock,
  faq: FAQBlock,
  about: AboutBlock,
  qualifications: QualificationsBlock,
}

export const RenderBlocks: React.FC<{
  blocks: Page['layout'][0][]
}> = (props) => {
  const { blocks } = props

  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0

  if (hasBlocks) {
    return (
      <Fragment>
        {blocks.map((block, index) => {
          const { blockType } = block

          if (blockType && blockType in blockComponents) {
            const Block = blockComponents[blockType]

            if (Block) {
              const { sectionId = null } = block as { sectionId: string | null }
              return (
                <section className="my-section" key={index} {...(sectionId ? { id: sectionId } : {})}>
                  {/* @ts-expect-error there may be some mismatch between the expected types here */}
                  <Block {...block} disableInnerContainer />
                </section>
              )
            }
          }
          return null
        })}
      </Fragment>
    )
  }

  return null
}
