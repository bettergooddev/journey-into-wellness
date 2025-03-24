import { Testimonial } from '@/payload-types'
import { Carousel, CarouselContent, CarouselNext, CarouselPrevious } from '../ui/carousel'
import { TestimonialsCard } from './TestimonialsCard'
import { appendKeys } from '@/utilities/appendKeys'
import type { TestimonialsBlock as TestimonialsBlockProps } from '@/payload-types'

export function TestimonialsCarousel({
  testimonials: testimonialsProp,
}: {
  testimonials: TestimonialsBlockProps['testimonials']
}) {
  if (!testimonialsProp) return null
  const testimonials = appendKeys(testimonialsProp, { shallow: true })

  return (
    <Carousel
      opts={{
        align: 'center',
        loop: true,
      }}
      className="w-full"
    >
      <CarouselContent className="">
        {testimonials.map((testimonial) => {
          if (typeof testimonial === 'string') return null
          const { key, ...testimonialProps } = testimonial
          return (
            <TestimonialsCard
              key={key}
              testimonial={testimonialProps}
              className="basis-[calc(100%-1.175*2rem)] pl-4 md:basis-[45%] md:pl-8 lg:basis-[29%]"
            />
          )
        })}
      </CarouselContent>

      <div className="mt-8 flex justify-center gap-2">
        <CarouselPrevious className="static mr-2 translate-y-0 transform-none border-primary p-0 [&_*]:stroke-primary" />
        <CarouselNext className="static translate-y-0 transform-none border-primary p-0 [&_*]:stroke-primary" />
      </div>
    </Carousel>
  )
}
