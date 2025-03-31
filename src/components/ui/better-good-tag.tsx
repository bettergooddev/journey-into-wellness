'use client'

import Link from 'next/link'
import { Button } from '../ui/button'
import { useState } from 'react'

function BetterGoodTag({}) {
  const [year, setYear] = useState(new Date().getFullYear())

  return (
    <>
      <div className="items-left flex flex-wrap justify-between gap-2 !py-4 sm:flex-row sm:items-center sm:gap-8">
        <p className="type-caption sm:type-body font-normal">
          <span className="text-primary-lightest">Website By: </span>
          <Button variant={'link'} asChild>
            <Link
              href={'https://bettergoodagency.com/'}
              className="type-caption text-primary-lightest sm:type-body after:bg-primary-lightest h-min !p-0 font-normal after:top-full"
              target="_blank"
            >
              Better Good
            </Link>
          </Button>
        </p>
        <span className="type-caption text-primary-lightest sm:type-body font-normal">{`© ${year} ${process.env.NEXT_PUBLIC_COMPANY_NAME}`}</span>
      </div>
    </>
  )
}

export default BetterGoodTag
