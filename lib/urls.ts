import { Url } from 'interfaces/Url'

export function sortUrls(urls: Url[]) {
  return urls.sort((a, b) => b.clicks - a.clicks)
}
