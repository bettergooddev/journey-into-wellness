'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { motion } from 'motion/react'
import type { FAQBlock as FAQBlockProps } from '@/payload-types'
import { appendKeys } from '@/utilities/appendKeys'

export const FAQBlock: React.FC<FAQBlockProps> = (props) => {
  const { heading, faqs: faqsProps } = props

  const faqs = appendKeys(faqsProps)

  return (
    <div className="container-small mx-auto">
      <h2 className="-mt-6 mb-heading text-center">{heading}</h2>

      <Accordion type="single" collapsible className="w-full">
        {faqs?.map(({ key, ...faq }, i) => (
          <AccordionItem key={key} value={`item-${i}`}>
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
        ))}
      </Accordion>
    </div>
  )
}
