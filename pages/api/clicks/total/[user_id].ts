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
      res.statusCode = 400;
    } else {
      res.statusCode = 200;
    }

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
