import { CollectionAfterChangeHook } from 'payload'

export const syncTestimonialsWithPage: CollectionAfterChangeHook = async ({ doc, operation, req }) => {
  // After any testimonial is created or updated, we need to update all testimonial blocks
  const payload = req.payload

  // Find all pages that have testimonial blocks
  const pages = await payload.find({
    collection: 'pages',
    depth: 0,
    where: {
      'layout.blockType': {
        equals: 'testimonials',
      },
    },
  })

  // For each page, get all testimonials and update the testimonials field
  for (const page of pages.docs) {
    const allTestimonials = await payload.find({
      collection: 'testimonials',
      depth: 0,
    })

    // Find testimonial blocks and update their testimonials field
    if (page.layout) {
      const updatedLayout = page.layout.map((block) => {
        if (block.blockType === 'testimonials') {
          return {
            ...block,
            testimonials: allTestimonials.docs.map((t) => t.id),
          }
        }
        return block
      })

      // Update the page
      await payload.update({
        collection: 'pages',
        id: page.id,
        data: {
          layout: updatedLayout,
        },
      })
    }
  }
}
