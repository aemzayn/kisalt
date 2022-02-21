import Head from "next/head";
import {
  CalendarIcon,
  LinkIcon,
  TrendingUpIcon,
} from "@heroicons/react/outline";
import {
  ClipboardCopyIcon,
  ShareIcon,
  PencilIcon,
  TrashIcon,
} from "@heroicons/react/solid";

import Layout from "components/Layout";
import Container from "components/Container";
import { LINK } from "constants/links";

type InfoItemProps = {
  count: number;
  text: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

const InfoItem = ({ count, text, Icon }: InfoItemProps) => {
  return (
    <div className="px-6 col-span-4 h-32 bg-violet-200 rounded-md flex items-center justify-between shadow-sm">
      <div className="flex flex-col gap-2">
        <p className="text-4xl font-bold">{count}</p>
        <p className="uppercase">{text}</p>
      </div>
      <div className="p-3 bg-white rounded-full">
        <Icon className="w-5 h-5" />
      </div>
    </div>
  );
};

type LinkItemProps = {
  shortUrl: string;
  longUrl: string;
  clicks: number;
};

const LinkItem = ({ shortUrl, longUrl, clicks }: LinkItemProps) => {
  const handleCopy = () => {
    const fullLink = `${LINK}/${shortUrl}`;
    import("copy-to-clipboard").then((copy) => {
      copy.default(fullLink);
    });
  };

  return (
    <div className="min-h-[14rem] flex flex-col gap-2 bg-white border border-gray-200 text-gray-400 rounded-md p-5">
      <p className="font-medium text-lg text-violet-800">/{shortUrl}</p>
      <p className="">{longUrl}</p>
      <p>
        <span className="text-violet-800 mr-1">{clicks}</span>
        clicks
      </p>
      <div className="flex gap-6 mt-auto">
        <button
          onClick={handleCopy}
          className="p-1 rounded-full duration-150 hover:bg-gray-200 "
        >
          <ClipboardCopyIcon className="w-4 h-4 text-violet-800" />
        </button>
        <button className="p-1 rounded-full duration-150 hover:bg-gray-200 ">
          <ShareIcon className="w-4 h-4 text-violet-800" />
        </button>
        <button className="p-1 rounded-full duration-150 hover:bg-gray-200 ">
          <PencilIcon className="w-4 h-4 text-violet-800" />
        </button>
        <button className="p-1 rounded-full duration-150 hover:bg-gray-200 ml-auto">
          <TrashIcon className="w-4 h-4 text-violet-800" />
        </button>
      </div>
    </div>
  );
};

type Props = {};

export const Dashboard = ({}: Props) => {
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
    <Layout>
      <Head>
        <title>Dashboard</title>
      </Head>
      <div className="bg-violet-100 lg:min-h-hero">
        <Container>
          <div className="w-full h-full py-6">
            <div className="grid grid-cols-12 gap-6">
              {infos.map(({ text, count, Icon }) => (
                <InfoItem key={text} text={text} count={count} Icon={Icon} />
              ))}

              <div className="col-span-8 h-96 bg-white border border-gray-200 rounded-md"></div>
              <div className="col-span-4 h-96 bg-white border border-gray-200 rounded-md"></div>

              <div className="flex items-center justify-center col-span-9 h-16 bg-white border border-gray-200 rounded-md p-2">
                <input
                  type="url"
                  placeholder="Create new short link"
                  className="flex-1 border-0 ring-0"
                />
              </div>
              <button className="col-span-3 h-16 bg-violet-700 text-white rounded-md hover:bg-opacity-90 duration-100">
                Shorten
              </button>
            </div>

            <section className="py-6" id="my-links-section">
              <h1 className="text-4xl font-bold">My Links</h1>
              <div className="grid grid-cols-3 gap-6 mt-6">
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
        </Container>
      </div>
    </Layout>
  );
};

export default Dashboard;
