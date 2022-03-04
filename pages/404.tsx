import Container from 'components/Container/Container'
import Layout from 'components/Layout/Layout'
import { NextSeo } from 'next-seo'
import Link from 'next/link'
import { HomeIcon } from '@heroicons/react/outline'

export type NotFoundProps = {}

export default function NotFound({}: NotFoundProps) {
  return (
    <Layout>
      <NextSeo noindex nofollow />
      <div className="h-hero flex w-full items-center justify-center bg-violet-200 text-center">
        <Container>
          <h1 className="text-4xl">En route is not found</h1>
          <Link href={'/'}>
            <a className="mt-4 inline-flex items-center rounded-full bg-violet-800 px-5 py-2 text-violet-50 duration-75 hover:bg-opacity-90">
              Back to home <HomeIcon className="ml-2 h-5 w-5" />
            </a>
          </Link>
        </Container>
      </div>
    </Layout>
  )
}
