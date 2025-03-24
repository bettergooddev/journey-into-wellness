'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

import type { Header } from '@/payload-types'

import { Logo } from '@/components/Logo/Logo'
import { HeaderNav } from './Nav'

interface HeaderClientProps {
  data: Header
}

export const HeaderClient: React.FC<HeaderClientProps> = ({ data }) => {
  return (
    // <header className="container relative z-20   " {...(theme ? { 'data-theme': theme } : {})}>
    //   <div className="py-8 flex justify-between">
    //     <Link href="/">
    //       <Logo loading="eager" priority="high" className="invert dark:invert-0" />
    //     </Link>
    <HeaderNav data={data} />
    //   </div>
    // </header>
  )
}
