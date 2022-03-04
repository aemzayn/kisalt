import { supabase } from 'lib/supabaseClient'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { user, error } = await supabase.auth.api.getUserByCookie(req, res)

    if (!error && user && user.id) {
      res.statusCode = 200
      res.json({
        success: true,
        isLogin: Boolean(user),
        id: user.id,
        email: user.email,
        created_at: user.created_at,
      })
    } else {
      res.statusCode = 401
      res.json({
        success: true,
        isLogin: Boolean(user),
        error: error ?? {
          message: 'You have to log in.',
        },
      })
    }
  } catch (error) {
    res.statusCode = 500
    res.json({
      error,
      success: false,
      isLogin: false,
    })
  }
}
