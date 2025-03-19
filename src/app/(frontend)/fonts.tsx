import localFont from 'next/font/local'

export const acuminPro = localFont({
  src: [
    {
      path: '../../../public/fonts/acumin-pro/acumin-pro-normal-100.woff2',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/acumin-pro/acumin-pro-italic-100.woff2',
      weight: '100',
      style: 'italic',
    },
    {
      path: '../../../public/fonts/acumin-pro/acumin-pro-normal-200.woff2',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/acumin-pro/acumin-pro-italic-200.woff2',
      weight: '200',
      style: 'italic',
    },
    {
      path: '../../../public/fonts/acumin-pro/acumin-pro-normal-300.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/acumin-pro/acumin-pro-italic-300.woff2',
      weight: '300',
      style: 'italic',
    },
    {
      path: '../../../public/fonts/acumin-pro/acumin-pro-normal-400.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/acumin-pro/acumin-pro-italic-400.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../../../public/fonts/acumin-pro/acumin-pro-normal-500.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/acumin-pro/acumin-pro-italic-500.woff2',
      weight: '500',
      style: 'italic',
    },
    {
      path: '../../../public/fonts/acumin-pro/acumin-pro-normal-600.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/acumin-pro/acumin-pro-italic-600.woff2',
      weight: '600',
      style: 'italic',
    },
    {
      path: '../../../public/fonts/acumin-pro/acumin-pro-normal-700.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/acumin-pro/acumin-pro-italic-700.woff2',
      weight: '700',
      style: 'italic',
    },
    {
      path: '../../../public/fonts/acumin-pro/acumin-pro-normal-800.woff2',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/acumin-pro/acumin-pro-italic-800.woff2',
      weight: '800',
      style: 'italic',
    },
    {
      path: '../../../public/fonts/acumin-pro/acumin-pro-normal-900.woff2',
      weight: '900',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/acumin-pro/acumin-pro-italic-900.woff2',
      weight: '900',
      style: 'italic',
    },
  ],
  variable: '--font-acumin-pro',
  display: 'swap',
  fallback: ['sans-serif'],
})

export const macgen = localFont({
  src: '../../../public/fonts/macgen/Macgen.ttf',
  variable: '--font-macgen',
  display: 'swap',
  fallback: ['serif'],
})
