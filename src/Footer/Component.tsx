import { getCachedGlobal } from '@/utilities/getGlobals'
import React from 'react'

import type { Footer as FooterType } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import { cn } from '@/utilities/ui'
import { appendKeys } from '@/utilities/appendKeys'
export async function Footer() {
  const footerData = (await getCachedGlobal('footer', 1)()) as FooterType

  const { body, sections } = footerData
  const { heading, actions: actionsProp } = body
  const actions = appendKeys(actionsProp)

  return (
    <>
      <footer className="bg-primary-50 py-16 text-left text-primary">
        <div className="container-large grid grid-cols-2">
          <div>
            <h3 className="max-w-[22ch]">{heading}</h3>
            {Array.isArray(actions) && actions.length > 0 && (
              <ul className={cn('mt-8 flex flex-row flex-wrap gap-4')}>
                {actions.map(({ key, link }, i) => {
                  const { key: _, ...linkProps } = link
                  const appearance = i === 0 ? 'primary' : 'outline'
                  return (
                    <li key={key} className="w-full lg:w-min">
                      <CMSLink {...linkProps} className={cn('w-full')} appearance={appearance} />
                    </li>
                  )
                })}
              </ul>
            )}
          </div>
        </div>
      </footer>
    </>
  )
}
