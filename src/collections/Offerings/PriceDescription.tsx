'use client'

import React from 'react'
import type { TextFieldDescriptionClientComponent } from 'payload'
import { useAllFormFields } from '@payloadcms/ui'

export function PriceDescription(props: TextFieldDescriptionClientComponent) {
  const [formData] = useAllFormFields()

  const originalPrice = Number(formData.price?.value || 0)
  const enableDiscount = formData.enableDiscount?.value || false
  const discountType = formData.discountType?.value || null
  const discountAmount = Number(formData.discountAmount?.value || 0)

  const showDiscount = !!(originalPrice > 0 && enableDiscount && discountType && discountAmount)

  if (!showDiscount) return <></>

  let finalPrice = originalPrice

  if (discountType === 'percentage') {
    finalPrice = originalPrice - originalPrice * (discountAmount / 100)
  }

  if (discountType === 'fixed') {
    finalPrice = originalPrice - discountAmount
  }

  return (
    <>
      {showDiscount && (
        <span
          style={{
            fontSize: '12px',
            fontWeight: '400',
            fontStyle: 'italic',
            opacity: '0.75',
            marginTop: '0.25rem',
            display: 'block',
          }}
        >{`($${finalPrice} after discount)`}</span>
      )}
    </>
  )
}
