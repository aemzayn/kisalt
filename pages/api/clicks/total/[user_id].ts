import { getDayDifference } from "lib/date";
import { supabase } from "lib/supabaseClient";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { user_id } = req.query;
    let { data, error } = await supabase
      .from("daily_clicks")
      .select()
      .eq("user_id", user_id);

    // filter data based on user id
    data = data && data.filter((click) => click.user_id === user_id);

    if (error) {
      console.error(error);
      res.statusCode = 400;
    } else {
      res.statusCode = 200;
    }

    const isLast7Days = (date: Date) => {
      const today = new Date();
      return getDayDifference(date, today);
    };

    const totalClicks = data
      ? data.reduce((acc, curr) => acc + curr.total_clicks, 0)
      : 0;
    // console.log(totalClicks);

    // data &&
    //   data.forEach((click) => {
    //     const date = new Date(
    //       click.click_year,
    //       click.click_month,
    //       click.click_day
    //     );
    //     console.log(isLast7Days(date));
    //   });

    res.json({
      success: !!error,
      error,
      data,
    });
  } catch (error) {
    res.statusCode = 500;
    res.json({
      error,
      success: false,
    });
  }
}
