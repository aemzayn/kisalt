import { supabase } from 'lib/supabaseClient'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const r = await supabase.auth.signOut()
    res.statusCode = 200
    res.json({
      success: true,
      ...r,
    })
  } catch (error) {
    res.statusCode = 500
    res.json({
      success: false,
      error,
    })
  }
}
