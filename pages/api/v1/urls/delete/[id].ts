import { supabase } from 'lib/supabaseClient'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { id } = req.query
    const { user } = await supabase.auth.api.getUserByCookie(req)
    const { data: userData } = await supabase
      .from('urls')
      .select('user_id')
      .eq('id', id)
      .single()

    if (userData && userData.user_id) {
      if (userData.user_id === user.id) {
        const { data, error } = await supabase
          .from('urls')
          .delete()
          .match({ id: id })

        if (error) {
          res.statusCode = 400
        } else {
          res.statusCode = 200
        }

        res.json({
          success: error,
          data,
          error,
        })
      } else {
        res.statusCode = 401
        res.json({
          success: false,
          error: 'Unauthorized action, cannot access the data.',
        })
        return false
      }
    } else {
      res.statusCode = 401
      res.json({
        success: false,
        error: 'Unauthenticated, you have to logged in first.',
      })
    }
  } catch (error) {
    res.statusCode = 500
    res.json({
      error: error,
      success: false,
    })
  }
}
