import React from 'react'

import type { Page } from '@/payload-types'

import { MainHero } from '@/heros/Main'

const heroes = {
  main: MainHero,
}

export const RenderHero: React.FC<Page['hero']> = (props) => {
  const { type } = props || {}

  if (!type || type === 'none') return null

  const HeroToRender = heroes[type]

  if (!HeroToRender) return null

  return <HeroToRender {...props} />
}
