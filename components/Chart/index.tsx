import { Suspense } from 'react'
import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
  ChartOptions,
} from 'chart.js'
import clsx from 'clsx'
import useSWR from 'swr'

import { getChartDataApi } from 'constants/paths'
import { fetcherWithAuth } from 'lib/fetcher'
import { ChartData } from 'interfaces/Dashboard'
import { TableStyles } from 'interfaces/Table'
import { shortMonthsMap } from 'lib/date'

ChartJS.register(LineElement, PointElement, LinearScale, Title, CategoryScale)

export const TABLE_STYLES: TableStyles = {
  borderColor: '#e9d5ff',
  lineColor: '#6d28d9',
}

export type TableProps = {
  userId: string
}

export default function Chart({ userId }: TableProps) {
  const { data: chartData, error } = useSWR(
    getChartDataApi(userId),
    fetcherWithAuth
  )
  const isLoading = !chartData && !error

  if (isLoading) {
    return (
      <div className="col-span-12 flex h-56 items-center justify-center rounded-md border border-gray-200 bg-white p-4 lg:col-span-8" />
    )
  }

  if (error) {
    return (
      <div className="col-span-12 flex h-56 items-center justify-center rounded-md border border-gray-200 bg-white p-4 lg:col-span-8">
        Error
      </div>
    )
  }
  const data: ChartData[] = chartData && chartData.data
  const labels: string[] = data?.map(formatLabel) || []

  function formatLabel(data: ChartData) {
    const date = data.date
    const [month, day] = date.split('/')
    const shortMonth = shortMonthsMap[month]
    const label = `${day} ${shortMonth}`
    return label
  }

  const datasets = [
    {
      label: 'Date',
      data: data?.map((d) => d.clicks),
      tension: 0.3,
      fill: true,
      backgroundColor: TABLE_STYLES.lineColor,
      borderColor: TABLE_STYLES.borderColor,
    },
  ]
  const tableData = { labels, datasets }

  const options: ChartOptions<'line'> = {
    responsive: true,
    plugins: {
      tooltip: {},
      legend: { display: false },
      title: {
        display: true,
        text: 'Total clicks in last 7 days',
        position: 'top',
        padding: {
          bottom: 15,
        },
      },
    },
    scales: {
      y: {
        ticks: {
          stepSize: 1,
        },
        title: {
          text: 'Total Clicks',
          display: true,
        },
        grid: {
          borderColor: TABLE_STYLES.borderColor,
          borderWidth: 1,
        },
        min: 0,
      },
      x: {
        title: {
          display: true,
          text: 'Date',
        },
      },
    },
  }

  return (
    <div
      className={clsx(
        'min-h-56 col-span-12 flex items-center justify-center rounded-md border border-gray-200 bg-white p-4 lg:col-span-8',
        data ? 'min-h-56' : 'min-h-72'
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
  )
}
