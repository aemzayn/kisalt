import { LinkIcon, TrendingUpIcon, CalendarIcon } from '@heroicons/react/solid'

import InfoItem from './InfoItem'
import { InfoItemProps } from './InfoItem'
import PageContainer from 'components/Container/PageContainer'
import { useAuthContext } from 'context/AuthContext'
import useDashboard from 'hooks/useDashboard'
import ShortUrlList from './ShortUrlList'
import NewUrlForm from './NewUrlForm'
import Chart from 'components/Chart'
import TopLinksList from './TopLinksList'
import { sortUrls } from 'lib/urls'

export type DashboardProps = {}

export default function Dashboard({}: DashboardProps) {
  const { user } = useAuthContext()
  const { data, isLoading } = useDashboard(user?.id)

  if (isLoading) {
    return <></>
  }

  const { todayClicks, urls, totalClicks } = data?.data

  const infos: InfoItemProps[] = data && [
    {
      count: urls ? urls.length : 0,
      text: 'TOTAL URLS',
      Icon: LinkIcon,
    },
    {
      count: totalClicks,
      text: 'TOTAL CLICKS',
      Icon: TrendingUpIcon,
    },
    {
      count: todayClicks ? todayClicks : 0,
      text: 'TODAY CLICKS',
      Icon: CalendarIcon,
    },
  ]

  return (
    <PageContainer>
      <div className="h-full w-full py-6">
        <div className="grid grid-cols-12 gap-6">
          {!isLoading &&
            infos.map(({ text, count, Icon }) => (
              <InfoItem key={text} text={text} count={count} Icon={Icon} />
            ))}

          <Chart userId={user?.id} />
          <TopLinksList data={sortUrls(urls)} />

          <NewUrlForm userId={user?.id} />
        </div>

        {data && urls && <ShortUrlList urls={urls} user={user} />}
      </div>
    </PageContainer>
  )
}
