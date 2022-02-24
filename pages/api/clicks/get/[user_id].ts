import { supabase } from "lib/supabaseClient";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { user_id } = req.query;
    const { data, error } = await supabase
      .from("clicks")
      .select(
        `
        id,
        created_at,
        urls (
          id,
          slug
        ),
        user_id (
          id,
        )
      `
      )
      .eq("user_id", user_id)
      .order("created_at", { ascending: false });

    if (error) {
      res.statusCode = 400;
    } else {
      res.statusCode = 200;
    }

    res.json({
      success: !!data,
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
