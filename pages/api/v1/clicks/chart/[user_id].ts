import { isValidDate } from 'lib/date'
import { supabase } from 'lib/supabaseClient'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { user_id } = req.query
    const { data, error } = await supabase
      .from('chart_data')
      .select(
        `
        user_id,
        click_day,
        click_month,
        total_clicks
      `
      )
      .eq('user_id', user_id)

    if (error) {
      res.statusCode = 400
    } else {
      res.statusCode = 200
    }

    const thisWeekClicks = []
    let dayIterator = 0
    const DAYS_IN_WEEK = 7

    while (thisWeekClicks.length < DAYS_IN_WEEK) {
      let d = new Date()
      let date = new Date(d.setDate(d.getDate() - dayIterator))
      const clickDate = date.getDate()
      const clickMonth = date.getMonth() + 1
      const clickDateMonth = `${clickMonth}/${clickDate}`
      if (!isValidDate(clickDate, clickMonth)) {
        dayIterator += 1
        continue
      }
      thisWeekClicks.push({
        date: clickDateMonth,
        clicks:
          data.find(
            (click) =>
              click.click_month === clickMonth && click.click_day === clickDate
          )?.total_clicks || 0,
      })
      dayIterator += 1
    }

    return res.json({
      data: thisWeekClicks.reverse(),
      error,
      success: !!data,
    })
  } catch (error) {
    res.statusCode = 500
    return res.json({
      error,
      success: false,
    })
  }
}
