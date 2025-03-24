import tailwindcssAnimate from 'tailwindcss-animate'
import typography from '@tailwindcss/typography'
import fluid from 'fluid-tailwind'
import containersPlugin from './src/lib/tailwind/containers/containers-plugin'
import bootGap from './src/lib/tailwind/boot-gap'

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    './src/**/**/*.{ts,tsx}',
    './src/collections/**/*.{ts,tsx}',
  ],
  darkMode: ['selector', '[data-theme="dark"]'],
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
      spacing: {
        section: '12rem',
        heading: '4rem',
        container: '1.175rem',
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
          foreground: 'hsl(var(--primary-foreground))',
          50: 'hsl(var(--primary-50))',
          100: 'hsl(var(--primary-100))',
          200: 'hsl(var(--primary-200))',
          light: 'hsl(var(--primary-200))',
          300: 'hsl(var(--primary-300))',
          400: 'hsl(var(--primary-400))',
          500: 'hsl(var(--primary-500))',
          600: 'hsl(var(--primary-600))',
          700: 'hsl(var(--primary-700))',
          800: 'hsl(var(--primary-800))',
          900: 'hsl(var(--primary-900))',
          DEFAULT: 'hsl(var(--primary-900))',
          950: 'hsl(var(--primary-950))',
          dark: 'hsl(var(--primary-950))',
        },
        ring: 'hsl(var(--ring))',
        secondary: {
          foreground: 'hsl(var(--secondary-foreground))',
          50: 'hsl(var(--secondary-50))',
          light: 'hsl(var(--secondary-50))',
          100: 'hsl(var(--secondary-100))',
          200: 'hsl(var(--secondary-200))',
          300: 'hsl(var(--secondary-300))',
          400: 'hsl(var(--secondary-400))',
          500: 'hsl(var(--secondary-500))',
          600: 'hsl(var(--secondary-600))',
          700: 'hsl(var(--secondary-700))',
          800: 'hsl(var(--secondary-800))',
          900: 'hsl(var(--secondary-900))',
          DEFAULT: 'hsl(var(--secondary-900))',
          950: 'hsl(var(--secondary-950))',
          dark: 'hsl(var(--secondary-950))',
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
            },
          ],
        },
        base: {
          css: [{}],
        },
        md: {
          css: [{}],
        },
      }),
    },
  },
  plugins: [
    tailwindcssAnimate,
    typography,
    fluid,
    containersPlugin,
    bootGap,
    function ({ addUtilities }) {
      const newUtilities = {
        '.clip-brain': {
          clipPath: "url('#brainClip')",
          aspectRatio: '643 / 677',
          width: '100%!important',
          height: 'auto!important',
        },
        '.clip-bubbles': {
          clipPath: "url('#bubblesClip')",
          aspectRatio: '577 / 555',
          width: '100%!important',
          height: 'auto!important',
        },
        '.clip-corner': {
          clipPath: "url('#cornerClip')",
          aspectRatio: '577 / 564',
          width: '100%!important',
          height: 'auto!important',
        },
        '.clip-face': {
          clipPath: "url('#faceClip')",
          aspectRatio: '557 / 793',
          width: '100%!important',
          height: 'auto!important',
        },
      }
      addUtilities(newUtilities)
    },
  ],
}

export default config
