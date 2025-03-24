import { CollectionAfterChangeHook } from 'payload'

export const syncQualificationsWithPage: CollectionAfterChangeHook = async ({ doc, operation, req }) => {
  // After any qualification is created or updated, we need to update all qualification blocks
  const payload = req.payload

  // Find all pages that have qualification blocks either directly in layout or nested inside an about block
  const pages = await payload.find({
    collection: 'pages',
    depth: 1,
    where: {
      or: [
        {
          'layout.blockType': {
            equals: 'qualifications',
          },
        },
        {
          'layout.blockType': {
            equals: 'about',
          },
        },
      ],
    },
  })

  // Get all qualifications once to reuse
  const allQualifications = await payload.find({
    collection: 'qualifications',
    depth: 0,
  })

  // For each page, update the qualifications fields
  for (const page of pages.docs) {
    if (!page.layout) continue

    let needsUpdate = false
    const updatedLayout = page.layout.map((block) => {
      // Direct qualifications block
      if (block.blockType === 'qualifications') {
        needsUpdate = true
        return {
          ...block,
          qualifications: allQualifications.docs.map((q) => q.id),
        }
      }

      // About block with nested qualifications blocks
      if (block.blockType === 'about' && block.layout) {
        const updatedAboutLayout = block.layout.map((nestedBlock) => {
          if (nestedBlock.blockType === 'qualifications') {
            needsUpdate = true
            return {
              ...nestedBlock,
              qualifications: allQualifications.docs.map((q) => q.id),
            }
          }
          return nestedBlock
        })

        return {
          ...block,
          layout: updatedAboutLayout,
        }
      }

      return block
    })

    // Only update the page if changes were made
    if (needsUpdate) {
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
