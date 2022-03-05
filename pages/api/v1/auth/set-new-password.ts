import { supabase } from 'lib/supabaseClient'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { password, accessToken } = req.body

    const { data, error } = await supabase.auth.api.updateUser(accessToken, {
      password,
    })

    if (error) {
      res.statusCode = 400
    } else {
      res.statusCode = 200
    }

    res.json({
      success: !!error,
      error,
      data,
    })
  } catch (error) {
    res.statusCode = 500
    res.json({
      error,
      success: false,
    })
  }
}
