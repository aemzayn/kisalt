import { LinkIcon, TrendingUpIcon, CalendarIcon } from "@heroicons/react/solid";

import InfoItem from "./InfoItem";
import LinkItem from "./LinkItem";
import { InfoItemProps } from "./InfoItem";
import PageContainer from "components/Container/PageContainer";
import useUrls from "hooks/useUrls";
import { useAuthContext } from "context/AuthContext";
import useDashboard from "hooks/useDashboard";
import ShortUrlList from "./ShortUrlList";

export type DashboardProps = {};

export default function Dashboard({}: DashboardProps) {
  const { user } = useAuthContext();
  const { data, isLoading } = useDashboard(user?.id);

  const infos: InfoItemProps[] = [
    {
      count: data?.data.totalClicks || 0,
      text: "ALL URLS",
      Icon: LinkIcon,
    },
    {
      count: 1,
      text: "TOTAL CLICKS",
      Icon: TrendingUpIcon,
    },
    {
      count: 10,
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

          <div className="col-span-8 h-96 rounded-md border border-gray-200 bg-white"></div>
          <div className="col-span-4 h-96 rounded-md border border-gray-200 bg-white"></div>

          <div className="col-span-9 flex h-16 items-center justify-center rounded-md border border-gray-200 bg-white p-2">
            <input
              type="url"
              placeholder="Create new short link"
              className="flex-1 border-0 ring-0"
            />
          </div>
          <button className="col-span-3 h-16 rounded-md bg-violet-700 text-white duration-100 hover:bg-opacity-90">
            Shorten
          </button>
        </div>

        <ShortUrlList urls={data?.data?.urls} />
      </div>
    </PageContainer>
  );
}
