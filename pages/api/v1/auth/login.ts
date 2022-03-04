import { supabase } from 'lib/supabaseClient'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { email, password } = req.body
    const { session, user, error } = await supabase.auth.signIn({
      email,
      password,
    })

    if (error) {
      res.statusCode = 400
    } else {
      res.statusCode = 200
    }

    res.json({
      success: true,
      session,
      user,
      error,
    })
  } catch (error) {
    res.statusCode = 500
    res.json({
      success: false,
      error,
    })
  }
}
