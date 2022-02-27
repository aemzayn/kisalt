import { Url } from "interfaces/Url";

export type TopLinksListProps = {
  data: Url[];
};

export default function TopLinksList({ data }: TopLinksListProps) {
  return (
    <section className="min-h-56 col-span-12 flex items-center justify-center rounded-md border border-gray-200 bg-white p-4 lg:col-span-4">
      <div className="flex h-full w-full flex-col gap-2">
        <h1 className="">Top URL by clicks</h1>
        <hr />
        <ol>
          {data &&
            data.slice(0, 5).map((url, index) => (
              <li key={url.id} className="flex items-start justify-between">
                <div className="text-gray-400">{index + 1}.</div>
                <div className="flex flex-1 flex-col gap-1 pl-2">
                  <p>/{url.slug}</p>
                  <p className="text-sm text-gray-400">{url.real_url}</p>
                </div>
                <div>{url.clicks}</div>
              </li>
            ))}
        </ol>
      </div>
    </section>
  );
}