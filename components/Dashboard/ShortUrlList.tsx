import { Url } from 'interfaces/Url'
import LinkItem from './LinkItem'

export type LinkListProps = {
  urls: Url[]
}

export default function ShortUrlList({ urls }: LinkListProps) {
  return (
    <section className="py-6" id="my-links-section">
      <h1 className="text-4xl font-bold">My Links</h1>
      <div className="mt-6 grid grid-cols-3 gap-6">
        {urls &&
          urls.map(({ id, slug, real_url, clicks }) => (
            <LinkItem
              key={id}
              clicks={clicks}
              longUrl={real_url}
              shortUrl={slug}
            />
          ))}
      </div>
    </section>
  )
}
