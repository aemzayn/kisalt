export type InfoItemProps = {
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

export default InfoItem;