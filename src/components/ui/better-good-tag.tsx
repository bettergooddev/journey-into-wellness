'use client'

import Link from 'next/link'
import { Button } from '../ui/button'
import { useState } from 'react'

function BetterGoodTag({}) {
  const [year, setYear] = useState(new Date().getFullYear())

  return (
    <>
      <div className="type-caption [&_*]:type-caption bg-primary-200/75 !font-light text-primary [&_*]:!font-light [&_*]:text-primary">
        <div className="items-left container-large flex flex-wrap justify-between gap-2 !py-4 sm:flex-row sm:items-center sm:gap-8">
          <p className="">
            <span className="text-primary-lightest">Website By: </span>
            <Button variant={'link'} asChild>
              <Link
                href={'https://bettergood.agency/'}
                className="text-primary-lightest after:bg-primary-lightest h-min !p-0 after:top-full"
                target="_blank"
              >
                Better Good
              </Link>
            </Button>
          </p>
          <span className="text-primary-lightest">{`© ${year} ${process.env.NEXT_PUBLIC_COMPANY_NAME}`}</span>
        </div>
      </div>
    </>
  )
}

export default BetterGoodTag
