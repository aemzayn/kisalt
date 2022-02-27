import { LinkIcon, TrendingUpIcon, CalendarIcon } from "@heroicons/react/solid";

import InfoItem from "./InfoItem";
import { InfoItemProps } from "./InfoItem";
import PageContainer from "components/Container/PageContainer";
import { useAuthContext } from "context/AuthContext";
import useDashboard from "hooks/useDashboard";
import ShortUrlList from "./ShortUrlList";
import NewUrlForm from "./NewUrlForm";
import Table from "components/Table/Table";
import TopLinksList from "./TopLinksList";

export type DashboardProps = {};

export default function Dashboard({}: DashboardProps) {
  const { user } = useAuthContext();
  // TODO: 0 clicks url not showing up
  const { data, isLoading } = useDashboard(user?.id);

  if (isLoading) {
    return <></>;
  }

  const { todayClicks, thisWeekClicks, urls, allClicks } = data?.data;

  const infos: InfoItemProps[] = data && [
    {
      count: urls ? urls.length : 0,
      text: "ALL URLS",
      Icon: LinkIcon,
    },
    {
      count: allClicks ? allClicks.length : 0,
      text: "TOTAL CLICKS",
      Icon: TrendingUpIcon,
    },
    {
      count: todayClicks ? todayClicks : 0,
      text: "TODAY CLICKS",
      Icon: CalendarIcon,
    },
  ];

  return (
    <PageContainer>
      <div className="h-full w-full py-6">
        <div className="grid grid-cols-12 gap-6">
          {!isLoading &&
            infos.map(({ text, count, Icon }) => (
              <InfoItem key={text} text={text} count={count} Icon={Icon} />
            ))}

          <Table data={thisWeekClicks} />
          <TopLinksList data={urls} />

          <NewUrlForm userId={user?.id} />
        </div>

        {data && urls && <ShortUrlList urls={urls} />}
      </div>
    </PageContainer>
  );
}
