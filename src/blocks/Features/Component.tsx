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
      <h2 className="text-center -mb-6 -mt-6">{heading}</h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-14 mx-auto mt-heading">
        {processedFeatures?.map((feature) => (
          <div className="flex flex-col items-center text-center" key={feature.key}>
            <div className="relative size-[9rem] mb-2">
              <Media fill priority resource={feature.image} />
            </div>
            <h3 className="mb-3">{feature.heading}</h3>
            <p className="opacity-65 max-w-[38ch]">{feature.subheading}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
