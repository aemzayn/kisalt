import { LinkIcon, TrendingUpIcon, CalendarIcon } from "@heroicons/react/solid";

import InfoItem from "./InfoItem";
import { InfoItemProps } from "./InfoItem";
import PageContainer from "components/Container/PageContainer";
import { useAuthContext } from "context/AuthContext";
import useDashboard from "hooks/useDashboard";
import ShortUrlList from "./ShortUrlList";
import NewUrlForm from "./NewUrlForm";
import Table from "components/Table/Table";

export type DashboardProps = {};

export default function Dashboard({}: DashboardProps) {
  const { user } = useAuthContext();
  const { data, isLoading } = useDashboard(user?.id);
  console.log(data);

  // const infos: InfoItemProps[] = [
  //   {
  //     count: data?.data.totalClicks || 0,
  //     text: "ALL URLS",
  //     Icon: LinkIcon,
  //   },
  //   {
  //     count: 1,
  //     text: "TOTAL CLICKS",
  //     Icon: TrendingUpIcon,
  //   },
  //   {
  //     count: 10,
  //     text: "TODAY CLICKS",
  //     Icon: CalendarIcon,
  //   },
  // ];

  return (
    <PageContainer>
      <div className="h-full w-full py-6">
        <div className="grid grid-cols-12 gap-6">
          {/* {!isLoading &&
            infos.map(({ text, count, Icon }) => (
              <InfoItem key={text} text={text} count={count} Icon={Icon} />
            ))
          } */}

          <Table userId={user?.id} />
          <div className="col-span-4 h-96 rounded-md border border-gray-200 bg-white"></div>

          <NewUrlForm />
        </div>

        {/* <ShortUrlList urls={data?.data?.urls} /> */}
      </div>
    </PageContainer>
  );
}
