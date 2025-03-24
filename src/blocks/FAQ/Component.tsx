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
          <AccordionItem
            key={key}
            value={`item-${i}`}
            className="peer relative rounded-xl border-0 px-6 transition-colors after:absolute after:bottom-0 after:left-1/2 after:h-[1px] after:w-[calc(100%-1.5rem)] after:-translate-x-1/2 after:bg-secondary-dark/10 after:transition-colors hover:bg-secondary-100/50 data-[state=open]:bg-secondary-100/50"
          >
            <AccordionTrigger className="py-4 hover:no-underline">
              <h3 className="type-body font-medium">{faq.question}</h3>
            </AccordionTrigger>
            <AccordionContent>
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="type-body pb-4 pt-2 !opacity-65"
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
