import { supabase } from "lib/supabaseClient";
import { urlValidation } from "lib/validations";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { realUrl } = req.body;
    const isValidUrl = urlValidation.validate(realUrl);

    if (!realUrl) {
      res.statusCode = 400;
      res.json({
        error: "Real url is empty.",
        success: false,
        data: null,
      });
      return;
    }

    if (!isValidUrl) {
      res.statusCode = 400;
      res.json({
        error: "Invalid url.",
        success: false,
        data: null,
      });
      return;
    }

    const {} = await supabase.from("urls").select("");
  } catch (error) {
    res.statusCode = 500;
    res.json({
      error,
      success: false,
    });
  }
}
