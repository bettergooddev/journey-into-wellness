'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { motion } from 'motion/react'
import type { FAQBlock as FAQBlockProps } from '@/payload-types'
import { appendKeys } from '@/utilities/appendKeys'
import { fadeUp, float, staggerContainer } from '@/utilities/animations'

const animations = {
  parent: staggerContainer,
  child: {
    float,
    fadeUp,
  },
}

export const FAQBlock: React.FC<FAQBlockProps> = (props) => {
  const { heading, faqs: faqsProps } = props

  const faqs = appendKeys(faqsProps)

  return (
    <motion.div
      className="container-small mx-auto"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '20% 0px -20%' }}
      variants={animations.parent}
    >
      <motion.h2 className="-mt-6 mb-heading text-center" variants={animations.child.float}>
        {heading}
      </motion.h2>

      <Accordion type="single" collapsible className="w-full">
        {faqs?.map(({ key, ...faq }, i) => (
          <motion.div key={key} variants={animations.child.fadeUp}>
            <AccordionItem
              value={`item-${i}`}
              className="peer relative rounded-xl border-0 px-6 transition-colors after:absolute after:bottom-0 after:left-1/2 after:h-[1px] after:w-[calc(100%-1.5rem)] after:-translate-x-1/2 after:bg-secondary-dark/10 after:transition-colors hover:bg-secondary-100/50 data-[state=open]:bg-secondary-100/50"
            >
              <AccordionTrigger className="py-4 hover:no-underline [&_svg]:stroke-secondary-dark">
                <h4 className="type-body font-medium">{faq.question}</h4>
              </AccordionTrigger>
              <AccordionContent>
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="type-body max-w-[52ch] pb-4 pt-2 !opacity-65"
                >
                  {faq.answer}
                </motion.p>
              </AccordionContent>
            </AccordionItem>
          </motion.div>
        ))}
      </Accordion>
    </motion.div>
  )
}
