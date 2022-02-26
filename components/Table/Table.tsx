import { fetcherWithAuth } from "lib/fetcher";
import useSWR from "swr";

export type TableProps = {
  userId: string;
};

export default function Table({ userId }: TableProps) {
  const getTableData = (id: string) => `/api/clicks/diff/${id}`;
  const { data, error } = useSWR(getTableData(userId), fetcherWithAuth);

  if (error) {
    console.error(error);
  }

  console.log(data);

  return (
    <div className="col-span-8 h-96 rounded-md border border-gray-200 bg-white"></div>
  );
}
