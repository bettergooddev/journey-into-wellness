import { CMSLink } from '@/components/Link'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import type { OfferingsListBlock as OfferingsListBlockProps } from '@/payload-types'
import { appendKeys } from '@/utilities/appendKeys'
import { RichText } from '@payloadcms/richtext-lexical/react'

export function CollapsibleCard({
  pitch: pitchProp,
}: {
  pitch: NonNullable<OfferingsListBlockProps['pitches']>[number]
}) {
  const pitch = appendKeys(pitchProp)
  const { offering } = pitch
  if (typeof offering === 'string') return

  return (
    <div className="md:sticky md:top-8 self-start bg-secondary-light rounded-[2.5rem] p-10">
      <Badge>Live Session</Badge>
      <h2 className="mt-4">{offering.name}</h2>

      <p className="mt-1">{offering.tagline}</p>

      <RichText
        className="prose mt-9 [&_*]:type-body [&_*::marker]:text-primary/45"
        data={offering.highlights}
      />

      <p className="opacity-60 mt-12">{offering.description}</p>

      {Array.isArray(offering.links) && offering.links.length > 0 && (
        <ul className="flex gap-4 mt-8">
          {offering.links.map(({ link }, i) => {
            return (
              <li key={i}>
                <CMSLink {...link} />
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}
