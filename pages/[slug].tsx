import { GetServerSidePropsContext } from 'next'
import Error from 'next/error'

import { Url } from 'interfaces/Url'
import { supabase } from 'lib/supabaseClient'

export interface IGetServerSideProps {
  query: Url
}

export async function getServerSideProps({
  params,
}: GetServerSidePropsContext) {
  const slug = params.slug
  const { data } = await supabase
    .from('urls')
    .select('slug, real_url, id')
    .eq('slug', slug)
    .single()

  if (data && data.slug) {
    await supabase.from('clicks').insert([
      {
        url_id: data.id,
      },
    ])

    return {
      redirect: {
        destination: data.real_url,
        permanent: false,
      },
    }
  }

  return {
    props: {},
    notFound: true,
  }
}

export type SlugPageProps = {}

export default function SlugPage({}: SlugPageProps) {
  return <Error statusCode={404} />
}
