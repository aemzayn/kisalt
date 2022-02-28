import { Suspense } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
  ChartOptions,
} from "chart.js";
import clsx from "clsx";
import useSWR from "swr";

import { getChartDataApi } from "constants/paths";
import { fetcherWithAuth } from "lib/fetcher";
import { ChartData } from "interfaces/Dashboard";

ChartJS.register(LineElement, PointElement, LinearScale, Title, CategoryScale);

export type TableData = Array<{
  date: string;
  clicks: number;
}>;

export type TableProps = {
  userId: string;
};

export const TABLE_STYLES = {
  borderColor: "#e9d5ff",
  lineColor: "#6d28d9",
};

export default function Chart({ userId }: TableProps) {
  const { data: chartData, error } = useSWR(
    getChartDataApi(userId),
    fetcherWithAuth
  );
  const isLoading = !chartData && !error;

  if (isLoading) {
    return (
      <div className="col-span-12 flex h-56 items-center justify-center rounded-md border border-gray-200 bg-white p-4 lg:col-span-8" />
    );
  }

  if (error) {
    return (
      <div className="col-span-12 flex h-56 items-center justify-center rounded-md border border-gray-200 bg-white p-4 lg:col-span-8">
        Error
      </div>
    );
  }
  const data: ChartData[] = chartData && chartData.data;

  const labels = data?.map((d) => d.date) || [];
  const datasets = [
    {
      label: "Date",
      data: data?.map((d) => d.clicks),
      tension: 0.3,
      fill: true,
      backgroundColor: TABLE_STYLES.lineColor,
      borderColor: TABLE_STYLES.borderColor,
    },
  ];
  const tableData = { labels, datasets };

  const options: ChartOptions<"line"> = {
    responsive: true,
    plugins: {
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      y: {
        ticks: {
          stepSize: 1,
        },
        title: {
          text: "Total Clicks",
          display: true,
        },
        grid: {
          borderColor: TABLE_STYLES.borderColor,
          borderWidth: 1,
        },
      },
      x: {
        title: {
          display: true,
          text: "Date",
        },
      },
    },
  };

  return (
    <div
      className={clsx(
        "min-h-56 col-span-12 flex items-center justify-center rounded-md border border-gray-200 bg-white p-4 lg:col-span-8",
        data ? "min-h-56" : "min-h-72"
      )}
    >
      {data && (
        <Suspense
          fallback={
            <div className="flex w-full items-center justify-center">
              Loading...
            </div>
          }
        >
          <Line data={tableData} options={options} />
        </Suspense>
      )}
    </div>
  );
}
