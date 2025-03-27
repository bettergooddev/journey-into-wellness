'use client'

import * as React from 'react'
import { useFormContext } from 'react-hook-form'

export const Error = ({ name }: { name: string }) => {
  const {
    formState: { errors },
  } = useFormContext()
  return (
    <div className="type-caption mt-2 !font-normal text-red-600">
      {(errors[name]?.message as string) || 'This field is required'}
    </div>
  )
}
