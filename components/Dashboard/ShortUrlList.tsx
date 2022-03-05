import { Url } from 'interfaces/Url'
import { User } from 'interfaces/User'
import LinkItem from './LinkItem'

export type LinkListProps = {
  urls: Url[]
  user: User
}

export default function ShortUrlList({ urls, user }: LinkListProps) {
  return (
    <section className="py-6" id="my-links-section">
      <h1 className="text-4xl font-bold">My Links</h1>
      <div className="mt-6 grid grid-cols-6 gap-6">
        {urls &&
          urls.map((url) => <LinkItem user={user} key={url.id} url={url} />)}
      </div>
    </section>
  )
}
