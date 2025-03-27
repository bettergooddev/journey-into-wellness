import { cn } from '@/utilities/ui'
import React from 'react'
import RichText from '@/components/RichText'

import type { PricingBlock as PricingBlockProps } from '@/payload-types'
import { Button } from '@/components/ui/button'
import { Info } from 'lucide-react'
import { OfferingCard } from '../../components/Offerings/OfferingCard'
import { appendKeys } from '@/utilities/appendKeys'

export const PricingBlock: React.FC<PricingBlockProps> = (props) => {
  const { primary, secondary: secondaryProp } = props

  const secondary = appendKeys(secondaryProp, { shallow: true })

  return (
    <div className="container-large mx-auto grid gap-6 pb-14 lg:grid-cols-2">
      <OfferingCard offering={primary} variant="price" theme="primary" collapsible={false} collapsed={false} />

      <div className="grid grid-rows-2 gap-6">
        {secondary.map((offering) => {
          if (typeof offering === 'string') return null
          return (
            <OfferingCard
              offering={offering}
              key={offering.key}
              variant="price"
              theme="secondary-light"
              collapsible={false}
              collapsed={true}
            />
          )
        })}
      </div>
    </div>
  )
}
