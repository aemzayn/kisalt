import Image from 'next/image'
import Link from 'next/link'
import { NextSeo } from 'next-seo'
import { HomeIcon } from '@heroicons/react/outline'

import Container from 'components/Container/Container'
import { home } from 'constants/paths'

export type Error500Props = {}

export default function Error500({}: Error500Props) {
  return (
    <div className="bg-gradient-to-l from-violet-400 to-violet-200">
      <div className="flex min-h-screen w-full justify-center bg-confused bg-cover bg-[center_top_25vh] bg-no-repeat lg:items-center lg:bg-contain lg:bg-right">
        <NextSeo noindex nofollow />
        <Container>
          <div className="grid grid-cols-2">
            <div className="col-span-2 flex flex-col items-center pt-10 lg:col-span-1 lg:pt-0">
              <div className="space-y-4 text-left">
                <h1 className="text-7xl font-bold ">500.</h1>
                <h2>Something went wrong</h2>
              </div>
              <Link href={home}>
                <a className="mt-4 inline-flex items-center rounded-full bg-violet-800 px-5 py-2 text-violet-50 duration-75 hover:bg-opacity-90">
                  Back to home <HomeIcon className="ml-2 h-5 w-5" />
                </a>
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </div>
  )
}
