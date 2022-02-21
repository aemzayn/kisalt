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
    <div className="col-span-4 flex h-32 items-center justify-between rounded-md bg-violet-200 px-6 shadow-sm">
      <div className="flex flex-col gap-2">
        <p className="text-4xl font-bold">{count}</p>
        <p className="uppercase">{text}</p>
      </div>
      <div className="rounded-full bg-white p-3">
        <Icon className="h-5 w-5" />
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
    <div className="flex min-h-[14rem] flex-col gap-2 rounded-md border border-gray-200 bg-white p-5 text-gray-400">
      <p className="text-lg font-medium text-violet-800">/{shortUrl}</p>
      <p className="">{longUrl}</p>
      <p>
        <span className="mr-1 text-violet-800">{clicks}</span>
        clicks
      </p>
      <div className="mt-auto flex gap-6">
        <button
          onClick={handleCopy}
          className="rounded-full p-1 duration-150 hover:bg-gray-200 "
        >
          <ClipboardCopyIcon className="h-4 w-4 text-violet-800" />
        </button>
        <button className="rounded-full p-1 duration-150 hover:bg-gray-200 ">
          <ShareIcon className="h-4 w-4 text-violet-800" />
        </button>
        <button className="rounded-full p-1 duration-150 hover:bg-gray-200 ">
          <PencilIcon className="h-4 w-4 text-violet-800" />
        </button>
        <button className="ml-auto rounded-full p-1 duration-150 hover:bg-gray-200">
          <TrashIcon className="h-4 w-4 text-violet-800" />
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
      <div className="lg:min-h-hero bg-violet-100">
        <Container>
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
        </Container>
      </div>
    </Layout>
  );
};

export default Dashboard;
