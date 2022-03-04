import { Url } from './Url'
import { Click } from './Click'

export interface DashboardData {
  urls: Url[]
  clicks: Click[]
  totalClicks: number
}

export interface ChartData {
  date: string
  clicks: number
}
