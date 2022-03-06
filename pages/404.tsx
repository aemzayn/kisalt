import Image from 'next/image'
import Link from 'next/link'
import { NextSeo } from 'next-seo'
import { HomeIcon } from '@heroicons/react/outline'

import Container from 'components/Container/Container'
import { home } from 'constants/paths'

export type NotFoundProps = {}

export default function NotFound({}: NotFoundProps) {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-gradient-to-br from-violet-400 via-blue-200 to-violet-200">
      <NextSeo noindex nofollow />
      <Container>
        <div className="flex h-full flex-1 flex-col-reverse items-center justify-evenly gap-y-5 lg:flex-row">
          <Image
            src="/images/screen/404.png"
            width={400}
            height={400}
            alt="Page not found"
            className="shadow-lg"
          />
          <div>
            <div className="space-y-4 text-left">
              <h1 className="text-7xl font-bold ">404.</h1>
              <h2>Oopps... this page is not available</h2>
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
  )
}
