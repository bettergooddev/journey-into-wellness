import { cn } from '@/utilities/ui'
import React from 'react'
import RichText from '@/components/RichText'

import type { TestimonialsBlock as TestimonialsBlockProps } from '@/payload-types'
import { TestimonialsCarousel } from '@/components/Testimonials'

export const TestimonialsBlock: React.FC<TestimonialsBlockProps> = (props) => {
  const { heading, testimonials, sectionId } = props

  return (
    <>
      {testimonials && (
        <div {...(sectionId && { id: sectionId })} className="mx-auto">
          <h2 className="-mt-6 mb-heading text-center">{heading}</h2>
          <TestimonialsCarousel testimonials={testimonials} />
        </div>
      )}
    </>
  )
}
