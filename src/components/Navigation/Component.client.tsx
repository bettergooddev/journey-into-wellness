'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { cn } from '@/utilities/ui'
import { Button } from '@/components/ui/button'
import { Header } from '@/payload-types'
import { useMobile } from '@/utilities/useMobile'
import { CMSLink } from '../Link'
import { appendKeys } from '@/utilities/appendKeys'

export function NavigationClient({ data }: { data: Header }) {
  const navItemsProp = data.navItems || []
  const navItems = appendKeys(navItemsProp)
  const [isOpen, setIsOpen] = useState(false)

  const isMobile = useMobile()

  useEffect(() => {
    if (!isMobile) {
      setIsOpen(false)
    }
  }, [isMobile])

  return (
    <motion.header
      className={cn('container-large fixed left-0 right-0 top-8 z-50 mx-auto transition-all duration-300')}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 300, damping: 50 }}
    >
      <div className="rounded-full bg-white/95 px-6 py-2 shadow-md backdrop-blur-sm">
        <div className="flex items-center justify-between">
          <Link href="/" className="">
            <h4>Journey Into Wellness</h4>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            <nav className="flex items-center gap-8">
              {navItems.map(({ key, ...link }, index) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                >
                  <CMSLink {...link} className="w-full" />
                </motion.div>
              ))}
            </nav>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.7 }}
            >
              <Button className="rounded-full bg-[#3a4d39] px-6 text-white hover:bg-[#4a5d49]">Book Session</Button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.div
            className="relative z-10 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-700"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </motion.div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                className="absolute inset-x-0 top-0 z-0 rounded-3xl bg-white pb-6 pt-20 shadow-lg md:hidden"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              >
                <nav className="flex flex-col items-center gap-4 px-4">
                  {navItems.map(({ key, ...link }, index) => (
                    <motion.div
                      key={key}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="w-full"
                    >
                      <Button variant="ghost" asChild onClick={() => setIsOpen(false)}>
                        <CMSLink {...link} className="w-full" />
                      </Button>
                    </motion.div>
                  ))}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                    className="mt-2 w-full"
                  >
                    <Button className="w-full rounded-full bg-[#3a4d39] py-6 text-white hover:bg-[#4a5d49]">
                      Book Session
                    </Button>
                  </motion.div>
                </nav>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.header>
  )
}
