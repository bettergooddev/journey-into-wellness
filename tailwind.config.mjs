import tailwindcssAnimate from 'tailwindcss-animate'
import typography from '@tailwindcss/typography'
import fluid from 'fluid-tailwind'
import containersPlugin from './src/lib/tailwind/containers/containers-plugin'
import bootGap from './src/lib/tailwind/boot-gap'
import clipPath from 'tailwind-clip-path'

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  darkMode: ['selector', '[data-theme="dark"]'],
  plugins: [tailwindcssAnimate, typography, fluid, containersPlugin, bootGap, clipPath],
  prefix: '',
  safelist: [
    'lg:col-span-4',
    'lg:col-span-6',
    'lg:col-span-8',
    'lg:col-span-12',
    'border-border',
    'bg-card',
    'border-error',
    'bg-error/30',
    'border-success',
    'bg-success/30',
    'border-warning',
    'bg-warning/30',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        '2xl': '2rem',
        DEFAULT: '1rem',
        lg: '2rem',
        md: '2rem',
        sm: '1rem',
        xl: '2rem',
      },
      screens: {
        '2xl': '86rem',
        lg: '64rem',
        md: '48rem',
        sm: '40rem',
        xl: '80rem',
      },
    },
    extend: {
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        background: 'hsl(var(--background))',
        border: 'hsla(var(--border))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        foreground: 'hsl(var(--foreground))',
        input: 'hsl(var(--input))',
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        ring: 'hsl(var(--ring))',
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        success: 'hsl(var(--success))',
        error: 'hsl(var(--error))',
        warning: 'hsl(var(--warning))',
      },
      fontFamily: {
        primary: ['var(--font-macgen)'],
        secondary: ['var(--font-acumin-pro)'],
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      typography: () => ({
        DEFAULT: {
          css: [
            {
              '--tw-prose-body': 'var(--text)',
              '--tw-prose-headings': 'var(--text)',
              h1: {
                fontFamily: 'var(--font-macgen)',
                fontSize: '100px',
                fontWeight: '400',
                lineHeight: '110%',
                marginBottom: '0.25em',
              },
              h2: {
                fontFamily: 'var(--font-macgen)',
                fontSize: '48px',
                fontWeight: '400',
                lineHeight: '120%',
              },
              h3: {
                fontFamily: 'var(--font-macgen)',
                fontSize: '32px',
                fontWeight: 'normal',
                lineHeight: '100%',
              },
              'p, span, a, body': {
                fontFamily: 'var(--font-acumin-pro)',
                fontSize: '16px',
                lineHeight: '155%',
              },
              h5: {
                fontFamily: 'var(--font-acumin-pro)',
                fontSize: '14px',
                fontWeight: '500',
              },
            },
          ],
        },
        base: {
          css: [
            {
              // Remove conflicting styles or adjust as needed
            },
          ],
        },
        md: {
          css: [
            {
              // Remove conflicting styles or adjust as needed
            },
          ],
        },
      }),
    },
  },
}

export default config
