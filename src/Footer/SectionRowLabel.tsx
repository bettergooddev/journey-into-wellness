'use client'
import { Footer } from '@/payload-types'
import { RowLabelProps, useRowLabel } from '@payloadcms/ui'

export const SectionRowLabel: React.FC<RowLabelProps> = () => {
  const data = useRowLabel<NonNullable<Footer['sections']>[number]>()

  const label = data?.data?.identifier || `Section ${data.rowNumber !== undefined ? data.rowNumber + 1 : ''}`

  return (
    <div
      style={{
        textTransform: 'capitalize',
      }}
    >
      {label}
    </div>
  )
}
