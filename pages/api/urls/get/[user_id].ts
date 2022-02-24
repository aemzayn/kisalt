import { supabase } from "lib/supabaseClient";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { user_id } = req.query;

    const { error, data } = await supabase
      .from("urls")
      .select("id,user_id,real_url,slug,updated_at")
      .eq("user_id", user_id)
      .order("id", { ascending: false });

    if (error) {
      res.statusCode = 400;
    } else {
      res.statusCode = 200;
    }

    res.json({
      success: !error,
      data,
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
