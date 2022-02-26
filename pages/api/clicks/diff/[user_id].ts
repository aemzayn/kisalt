import { supabase } from "lib/supabaseClient";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { user_id } = req.query;
    const { data, error } = await supabase
      .from("day_diff")
      .select(
        `
        id,
        user_id,
        day_diff,
        click_day,
        click_month,
        urls (
          id,
          slug,
          real_url
        )
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
    const urls = [];

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

    res.json({
      data:
        {
          last7DaysData,
          allClicks: returnData,
          todayClicks,
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
