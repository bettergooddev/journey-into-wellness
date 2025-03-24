'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { motion } from 'motion/react'
import { ChevronDown } from 'lucide-react'
import type { FAQBlock as FAQBlockProps } from '@/payload-types'
import { appendKeys } from '@/utilities/appendKeys'

const faqData = [
  {
    question: 'What is your return policy?',
    answer: 'We offer a 30-day money-back guarantee on all products. No questions asked.',
  },
  {
    question: 'How long does shipping take?',
    answer: 'Standard shipping takes 3-5 business days. Express options available at checkout.',
  },
  {
    question: 'Do you offer technical support?',
    answer: 'Yes, our 24/7 technical support team is available via email and live chat.',
  },
]

export const FAQBlock: React.FC<FAQBlockProps> = (props) => {
  const { heading, faqs: faqsProps } = props

  const faqs = appendKeys(faqsProps)

  return (
    <div className="container-small mx-auto">
      <h2 className="-mt-6 mb-heading text-center">{heading}</h2>

      <Accordion type="single" collapsible className="w-full">
        {faqs?.map(({ key, ...faq }, i) => (
          <motion.div
            key={key}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="relative after:absolute after:bottom-0 after:left-1/2 after:h-[1px] after:w-[calc(100%-1.5rem)] after:-translate-x-1/2 after:bg-secondary-dark/10"
          >
            <AccordionItem
              value={`item-${i}`}
              className="rounded-xl border-0 px-6 transition-colors hover:bg-secondary-100/50 data-[state=open]:bg-secondary-100/50"
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
          </motion.div>
        ))}
      </Accordion>
    </div>
  )
}
