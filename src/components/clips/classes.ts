import { tv } from 'tailwind-variants'

export const classes = {
  clip: tv({
    variants: {
      clip: {
        face: 'clip-face',
        brain: 'clip-brain',
        corner: 'clip-corner',
        bubbles: 'clip-bubbles',
      },
    },
  }),
}
