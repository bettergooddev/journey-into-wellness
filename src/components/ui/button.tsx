import { cn } from '@/utilities/ui'
import { Slot } from '@radix-ui/react-slot'
import { type VariantProps, cva } from 'class-variance-authority'
import * as React from 'react'

const buttonVariants = cva(
  // 'inline-flex items-center justify-center whitespace-nowrap rounded text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  'inline-flex items-center justify-center whitespace-nowrap rounded type-caption ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    defaultVariants: {
      size: 'default',
      variant: 'default',
    },
    variants: {
      size: {
        clear: '',
        default: 'h-10 px-4 py-2',
        icon: 'h-10 w-10',
        lg: 'h-11 rounded px-8',
        sm: 'h-9 rounded px-3',
      },
      variant: {
        default: 'bg-secondary-light type-body hover:brightness-90 rounded-full !text-secondary font-light pb-2.5 px-6',
        primary: 'bg-primary type-body hover:brightness-90 rounded-full !text-secondary-light font-light pb-2.5 px-6',
        outline:
          '!bg-transparent border border-secondary/50 type-body hover:brightness-90 rounded-full text-secondary font-light pb-2.5 px-6 ',
        destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        // ghost: 'hover:bg-card hover:text-accent-foreground',
        ghost: '',
        link: ' items-start justify-start underline-offset-4 hover:underline -mt-1',
        secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
      },
    },
  },
)

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean
  ref?: React.Ref<HTMLButtonElement>
}

const Button: React.FC<ButtonProps> = ({ asChild = false, className, size, variant, ref, ...props }) => {
  const Comp = asChild ? Slot : 'button'
  return <Comp className={cn(buttonVariants({ className, size, variant }))} ref={ref} {...props} />
}

export { Button, buttonVariants }
