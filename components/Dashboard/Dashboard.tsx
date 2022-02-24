import { LinkIcon, TrendingUpIcon, CalendarIcon } from "@heroicons/react/solid";

import InfoItem from "./InfoItem";
import LinkItem, { LinkItemProps } from "./LinkItem";
import { InfoItemProps } from "./InfoItem";
import PageContainer from "components/Container/PageContainer";

export type DashboardProps = {};

export default function Dashboard({}: DashboardProps) {
  const infos: InfoItemProps[] = [
    {
      count: 1,
      text: "ALL URLS",
      Icon: LinkIcon,
    },
    {
      count: 120,
      text: "TOTAL CLICKS",
      Icon: TrendingUpIcon,
    },
    {
      count: 10,
      text: "TODAY CLICKS",
      Icon: CalendarIcon,
    },
  ];

  const links: LinkItemProps[] = [
    {
      shortUrl: "veri-yapilari",
      longUrl:
        "https://www.notion.so/Veri-Yap-lar-Ders-Konular-6c650f38fb1a42f988d1c2687aa15fda",
      clicks: 152,
    },
    {
      shortUrl: "nguiz",
      longUrl: "https://quiz-app-aemzayn.vercel.app/",
      clicks: 152,
    },
    {
      shortUrl: "portfolio",
      longUrl: "https://ahmadmuslih.space",
      clicks: 74,
    },
  ];

  return (
    <PageContainer>
      <div className="h-full w-full py-6">
        <div className="grid grid-cols-12 gap-6">
          {infos.map(({ text, count, Icon }) => (
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

        <section className="py-6" id="my-links-section">
          <h1 className="text-4xl font-bold">My Links</h1>
          <div className="mt-6 grid grid-cols-3 gap-6">
            {links.map(({ clicks, longUrl, shortUrl }) => (
              <LinkItem
                key={shortUrl}
                clicks={clicks}
                longUrl={longUrl}
                shortUrl={shortUrl}
              />
            ))}
          </div>
        </section>
      </div>
    </PageContainer>
  );
}
