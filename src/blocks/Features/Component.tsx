import { cn } from '@/utilities/ui'
import React from 'react'
import RichText from '@/components/RichText'

import type { FeaturesBlock as FeaturesBlockProps } from '@/payload-types'

import { CMSLink } from '../../components/Link'
import { Media } from '@/components/Media'
import { appendKeys } from '@/utilities/appendKeys'

export const FeaturesBlock: React.FC<FeaturesBlockProps> = (props) => {
  const { heading, featureItems } = props

  const processedFeatures = appendKeys(featureItems)

  return (
    <div className="container-small mx-auto px-4 lg:px-6">
      <h2 className="-mb-6 -mt-6 text-center">{heading}</h2>

      <div className="mx-auto mt-heading grid grid-cols-1 gap-14 lg:grid-cols-3">
        {processedFeatures?.map((feature) => (
          <div className="flex flex-col items-center text-center" key={feature.key}>
            <div className="relative mb-2 size-[9rem]">
              <Media fill priority resource={feature.image} />
            </div>
            <h3 className="mb-3">{feature.heading}</h3>
            <p className="max-w-[38ch] opacity-65">{feature.subheading}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
