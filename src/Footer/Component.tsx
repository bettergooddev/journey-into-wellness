import { getCachedGlobal } from '@/utilities/getGlobals'
import React from 'react'

import type { Footer as FooterType } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import { cn } from '@/utilities/ui'
import { appendKeys } from '@/utilities/appendKeys'
export async function Footer() {
  const footerData = (await getCachedGlobal('footer', 1)()) as FooterType

  const { body, sections: sectionsProp } = footerData
  const { heading, actions: actionsProp } = body
  const actions = appendKeys(actionsProp)
  const sections = appendKeys(sectionsProp?.filter((section) => section.identifier !== 'socials'))

  if (!sections) return null

  return (
    <>
      <footer className="bg-primary-50 py-16 text-left text-primary">
        <div className="container-large grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <h3 className="max-w-[22ch]">{heading}</h3>
            {Array.isArray(actions) && actions.length > 0 && (
              <ul className={cn('mt-8 flex flex-row flex-wrap gap-4')}>
                {actions.map(({ key, link }, i) => {
                  const { key: _, ...linkProps } = link
                  const appearance = i === 0 ? 'primary' : 'outline-primary'
                  return (
                    <li key={key} className="w-full lg:w-min">
                      <CMSLink {...linkProps} className={cn('w-full')} appearance={appearance} />
                    </li>
                  )
                })}
              </ul>
            )}
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {sections.map(({ id, heading, links, identifier }) => (
              <div key={identifier} className="flex flex-col gap-2">
                <h4 className="">{heading}</h4>
                {Array.isArray(links) && links.length > 0 && (
                  <ul className="flex flex-col gap-0.5">
                    {links.map((linkItem) => (
                      <li key={linkItem.id}>
                        <CMSLink
                          {...linkItem.link}
                          appearance="link"
                          className="type-caption font-light opacity-70 hover:underline hover:opacity-100"
                        />
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </footer>
    </>
  )
}
