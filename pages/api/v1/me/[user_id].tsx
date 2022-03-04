import { supabase } from 'lib/supabaseClient'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { user_id } = req.query
    const { data, error } = await supabase
      .from('urls_data')
      .select(
        `
        url_id,
        user_id,
        click_id,
        slug,
        real_url,
        click_year,
        click_month,
        click_day,
        day_diff
      `
      )
      .eq('user_id', user_id)

    if (error) {
      res.statusCode = 400
    } else {
      res.statusCode = 200
    }

    let todayClicks: number = 0
    let urls: any = {}
    let totalClicks: number = 0

    if (data) {
      data.forEach((url) => {
        if (url?.click_id) {
          totalClicks++

          // day_diff is day difference
          // relative to today
          if (url?.day_diff === 0) {
            todayClicks++
          }
        }

        if (!urls.hasOwnProperty(url.slug)) {
          urls[url.slug] = {
            id: url.url_id,
            slug: url.slug,
            real_url: url.real_url,
            clicks: url.click_id ? 1 : 0,
          }
        } else {
          urls[url.slug].clicks += 1
        }
      })
    }

    res.json({
      error,
      data: {
        todayClicks,
        urls: Object.values(urls).sort((a: any, b: any) => a?.id - b?.id) || [],
        totalClicks,
      },
      success: !!error,
    })
  } catch (error) {
    res.statusCode = 500
    res.json({
      error,
      success: false,
      data: null,
    })
  }
}
