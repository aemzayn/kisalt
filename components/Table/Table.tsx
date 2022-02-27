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

ChartJS.register(LineElement, PointElement, LinearScale, Title, CategoryScale);

export type TableData = Array<{
  date: string;
  clicks: number;
}>;

export type TableProps = {
  data: TableData;
};

export const TABLE_STYLES = {
  borderColor: "#e9d5ff",
  lineColor: "#6d28d9",
};

export default function Table({ data }: TableProps) {
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
    <div className="min-h-56 col-span-12 flex items-center justify-center rounded-md border border-gray-200 bg-white p-4 lg:col-span-8">
      {data && <Line data={tableData} options={options} />}
    </div>
  );
}
