import { Url } from "interfaces/Url";
import { isValidDate } from "lib/date";
import { supabase } from "lib/supabaseClient";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { user_id } = req.query;
    const { data, error } = await supabase
      .from("dashboard")
      .select(
        `
        id,
        user_id,
        day_diff,
        click_day,
        click_month,
        url_id,
        slug,
        real_url
      `
      )
      .eq("user_id", user_id);

    if (error) {
      res.statusCode = 400;
    } else {
      res.statusCode = 200;
    }

    let todayClicks = 0;
    const returnData = data && data.filter((click) => click.day_diff < 7);
    const last7DaysData = {};
    const urls =
      data &&
      data?.reduce((acc: Array<any>, curr) => {
        const slug = curr.slug;
        if (!acc.hasOwnProperty(slug)) {
          acc[slug] = {
            id: curr.url_id,
            slug: curr.slug,
            real_url: curr.real_url,
            clicks: 1,
          };
        } else {
          acc[slug].clicks += 1;
        }

        return acc;
      }, {});

    returnData?.forEach((click) => {
      const dateMonth = `${click.click_month}/${click.click_day}`;

      if (click.day_diff === 0) {
        todayClicks = todayClicks + 1;
      }
      if (last7DaysData[dateMonth]) {
        last7DaysData[dateMonth] += 1;
      } else {
        last7DaysData[dateMonth] = 1;
      }
    });

    // from today (i = 0) to past 7 days
    let thisWeekClicks = [];
    let i = 0;
    const DAYS_IN_WEEK = 7;
    while (thisWeekClicks.length < DAYS_IN_WEEK) {
      let d = new Date(2022, 3, 2);
      let pastDate = new Date(d.setDate(d.getDate() - i));
      const date = pastDate.getDate();
      const month = pastDate.getMonth();
      const dateMonth = `${month}/${date}`;
      if (!isValidDate(date, month)) {
        i += 1;
        continue;
      }
      thisWeekClicks.push({
        date: dateMonth,
        clicks: last7DaysData[dateMonth] || 0,
      });
      i += 1;
    }

    const sortedUrls = Object.values(urls).sort(
      (a: Url, b: Url) => b?.clicks - a?.clicks
    );

    res.json({
      data:
        {
          last7DaysData,
          allClicks: returnData,
          todayClicks,
          urls: sortedUrls || [],
          thisWeekClicks: thisWeekClicks.reverse() || [],
        } || {},
      success: !!data,
      error,
    });
  } catch (error) {
    res.statusCode = 500;
    res.json({
      error,
      success: false,
    });
  }
}
