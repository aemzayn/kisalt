import { MonthIndex, ShortMonth } from 'interfaces/Date'

export const _MS_PER_DAY: number = 1000 * 60 * 60 * 24

export const getDayDifference = (date1: Date, date2: Date) => {
  const utc1 = getUTC(date1)
  const utc2 = getUTC(date2)
  return Math.floor((utc2 - utc1) / _MS_PER_DAY)
}

export const getUTC = (date: Date) => {
  return Date.UTC(date.getFullYear(), date.getMonth(), date.getDate())
}

export const isValidDate = (date: number, month: number) => {
  if (date > 0 && date <= daysInMonth[month]) {
    return true
  }
  return false
}

export let isLeapYear: boolean | undefined = undefined

const checkLeapYear = () => {
  if (isLeapYear !== undefined) {
    return isLeapYear
  }
  const year = new Date().getFullYear()
  isLeapYear = (year % 4 == 0 && year % 100 != 0) || year % 400 == 0
  return isLeapYear
}

export const daysInMonth: Record<number, number> = {
  1: 31,
  2: checkLeapYear() ? 29 : 28,
  3: 31,
  4: 30,
  5: 31,
  6: 30,
  7: 31,
  8: 31,
  9: 30,
  10: 31,
  11: 30,
  12: 31,
}

export const shortMonthsMap: Record<MonthIndex, ShortMonth> = {
  1: 'Jan',
  2: 'Feb',
  3: 'Mar',
  4: 'Apr',
  5: 'May',
  6: 'Jun',
  7: 'Jul',
  8: 'Aug',
  9: 'Sep',
  10: 'Oct',
  11: 'Nov',
  12: 'Dec',
}
