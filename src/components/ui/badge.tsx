import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/utilities/ui'

const badgeVariants = cva(
  'inline-flex items-center rounded-full border px-[0.715rem] pt-[0.035rem] pb-[0.235rem] type-caption transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 whitespace-nowrap',
  {
    variants: {
      variant: {
        default: 'border-transparent bg-secondary-200/35 text-secondary',
        primary: 'border-transparent bg-primary-light text-primary',
        secondary: 'border-transparent bg-secondary-200/35 text-secondary',
        destructive: 'border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80',
        outline: 'text-foreground',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />
}

export { Badge, badgeVariants }
