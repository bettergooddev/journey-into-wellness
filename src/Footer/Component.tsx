import { getCachedGlobal } from '@/utilities/getGlobals'
import React from 'react'
import Link from 'next/link'

import type { Footer as FooterType } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import { cn } from '@/utilities/ui'
import { appendKeys } from '@/utilities/appendKeys'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube, FaGithub } from 'react-icons/fa'

// Map social media platform names to their corresponding icons
const socialIconMap = {
  facebook: FaFacebook,
  instagram: FaInstagram,
  linkedin: FaLinkedin,
  twitter: FaTwitter,
  youtube: FaYoutube,
  github: FaGithub,
} as const

type SocialPlatform = keyof typeof socialIconMap

export async function Footer() {
  const footerData = (await getCachedGlobal('footer', 1)()) as FooterType

  const { body, sections: sectionsProp } = footerData
  const { heading, actions: actionsProp } = body
  const actions = appendKeys(actionsProp)

  // Separate socials section from other sections
  const socialsSection = sectionsProp?.find((section) => section.identifier === 'socials')
  const sections = appendKeys(sectionsProp?.filter((section) => section.identifier !== 'socials'))

  if (!sections) return null

  return (
    <>
      <footer className="bg-primary-50 py-16 text-left text-primary">
        <div className="container-large grid grid-cols-1 gap-8 md:gap-16 lg:grid-cols-2 lg:gap-8">
          <div>
            <h3 className="mx-0 max-w-[22ch] text-left md:mx-auto md:text-center lg:mx-0 lg:text-left">{heading}</h3>
            {Array.isArray(actions) && actions.length > 0 && (
              <ul
                className={cn(
                  'mt-8 flex flex-row flex-wrap justify-start gap-4 md:mt-4 md:justify-center lg:mt-8 lg:justify-start',
                )}
              >
                {actions.map(({ key, link }, i) => {
                  const { key: _, ...linkProps } = link
                  const appearance = i === 0 ? 'primary' : 'outline-primary'
                  return (
                    <li key={key} className="w-full md:w-min">
                      <CMSLink {...linkProps} className={cn('w-full')} appearance={appearance} />
                    </li>
                  )
                })}
              </ul>
            )}
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {sections.map(({ key, ...section }) => (
              <FooterSection key={key} section={section} socialsSection={socialsSection} />
            ))}
          </div>
        </div>
      </footer>
    </>
  )
}

function FooterSection({
  section,
  socialsSection,
}: {
  section: Omit<NonNullable<FooterType['sections']>[number], 'key'>
  socialsSection?: NonNullable<FooterType['sections']>[number]
}) {
  const links = Array.isArray(section.links) ? appendKeys(section.links) : []

  return (
    <div className="flex flex-col gap-2">
      <h4 className="">{section.heading}</h4>
      {links.length > 0 && (
        <ul className="flex flex-col gap-0.5">
          {links.map(({ key, link }) => {
            const { key: _, ...linkProps } = link
            return (
              <li key={key}>
                <CMSLink
                  {...linkProps}
                  appearance="link"
                  className="type-caption font-light opacity-70 hover:underline hover:opacity-100"
                />
              </li>
            )
          })}
        </ul>
      )}
      {section.identifier === 'contact' && socialsSection && <Socials socialsSection={socialsSection} className="mt-0.5" />}
    </div>
  )
}

function Socials({
  socialsSection,
  className,
}: {
  socialsSection: NonNullable<FooterType['sections']>[number]
  className?: string
}) {
  if (!socialsSection) return null
  const socials = appendKeys(socialsSection)
  const links = socials?.links || []

  return (
    <ul className={cn('flex flex-row flex-wrap gap-3', className)}>
      {links.map(({ key, ...link }) => (
        <Icon key={key} link={link} />
      ))}
    </ul>
  )
}

function Icon({ link }: { link: NonNullable<NonNullable<FooterType['sections']>[number]['links']>[number] }) {
  const label = link.link.label.toLowerCase() as SocialPlatform
  const Icon = socialIconMap[label] || FaFacebook
  const href = link.link.url || '#'

  return (
    <li key={link.id}>
      <Link
        href={href}
        target={'_blank'}
        rel={'noopener noreferrer'}
        className="inline-flex w-min items-center justify-center text-primary-700 transition-colors duration-0 hover:text-primary-900"
        aria-label={link.link.label}
      >
        <Icon size={17} />
      </Link>
    </li>
  )
}
