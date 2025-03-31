import React from 'react'
import type { QualificationsBlock as QualificationsBlockProps, Qualification } from '@/payload-types'
import { cn } from '@/utilities/ui'
import { appendKeys } from '@/utilities/appendKeys'
import * as motion from 'motion/react-client'
import { fadeUp, staggerContainer } from '@/utilities/animations'

const animations = {
  parent: staggerContainer,
  child: fadeUp,
}

export const QualificationsBlock: React.FC<QualificationsBlockProps> = (props) => {
  const qualsProp = props?.qualifications ?? []
  const quals = appendKeys(qualsProp.map((qual) => qual as Qualification))

  const primaryQualifications = quals.filter((qual) => typeof qual?.description === 'string')
  const secondaryQualifications = quals.filter((qual) => !primaryQualifications.includes(qual))

  return (
    <motion.div
      className="container-small mx-auto text-primary"
      initial="hidden"
      whileInView="show"
      viewport={{ margin: '20% 0px -20%', once: true }}
      variants={animations.parent}
    >
      <div className="mb-6 grid grid-cols-1 gap-8 xl:grid-cols-3">
        {primaryQualifications.map(({ key, ...qualification }) => (
          <motion.div key={key} className="flex flex-col rounded-[2rem] bg-primary-light p-8" variants={animations.child}>
            <p className="type-caption !font-light opacity-65">{qualification.year}</p>
            <h3 className="mt-2">{qualification.title}</h3>
            {qualification.description && (
              <p className="type-caption mt-2 !font-light opacity-65">{qualification.description}</p>
            )}
            {qualification.issuer && <p className="type-caption mt-auto pt-6 opacity-65">{qualification.issuer}</p>}
          </motion.div>
        ))}
      </div>

      {secondaryQualifications.length > 0 && (
        <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
          {secondaryQualifications.map(({ key, ...qualification }) => (
            <motion.div
              key={key}
              className="flex flex-col rounded-[2rem] bg-primary-light/50 p-8 py-6"
              variants={animations.child}
            >
              <p className="type-caption !font-light opacity-65">{qualification.year}</p>
              <h4 className="mt-1">{qualification.title}</h4>
            </motion.div>
          ))}
        </div>
      )}
    </motion.div>
  )
}
