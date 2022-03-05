import { sanitizeSlug } from 'lib/helpers'
import { supabase } from 'lib/supabaseClient'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { id } = req.query
    const { slug } = req.body
    const { user } = await supabase.auth.api.getUserByCookie(req)

    const { data: userData } = await supabase
      .from('urls')
      .select('user_id')
      .eq('id', id)
      .single()

    if (userData && userData.user_id) {
      if (userData.user_id === user.id) {
        const { error: errorRealSlug } = await supabase
          .from('urls')
          .select('slug')
          .eq('slug', sanitizeSlug(slug))
          .single()

        if (errorRealSlug) {
          const { data, error } = await supabase
            .from('urls')
            .update({ slug: sanitizeSlug(slug) })
            .match({ id: id })

          if (error) {
            res.statusCode = 400
          } else {
            res.statusCode = 200
          }
          res.json({
            success: !error,
            data,
            error,
          })
          return
        } else {
          res.statusCode = 400
          res.json({
            error: 'Slug is already being used, try another slug.',
            success: false,
          })
          return false
        }
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
      error,
      success: false,
    })
  }
}
