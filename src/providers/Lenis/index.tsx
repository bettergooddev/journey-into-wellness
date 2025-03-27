'use client'
import { default as InvokeLenis } from 'lenis'
import React, { useEffect } from 'react'

export function Lenis() {
  useEffect(() => {
    const lenis = new InvokeLenis({
      lerp: 0.08,
      autoRaf: true,
      anchors: true,
      smoothWheel: false,
    })

    return () => {
      lenis.destroy()
    }
  }, [])

  return <></>
}
