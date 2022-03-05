import { NextApiRequest, NextApiResponse } from 'next'
import { newUrlValidationScheme } from 'lib/validations'
import { supabase } from 'lib/supabaseClient'
import { sanitizeSlug } from 'lib/helpers'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { user_id } = req.query
    let { slug, realUrl } = req.body

    const isValidUrl = await newUrlValidationScheme.isValid({ slug, realUrl })
    if (!isValidUrl) {
      res.statusCode = 400
      res.json({
        success: false,
        error: 'Invalid url, url must contains https or http',
        data: null,
      })
      return
    }

    const { data: slugIsUsed } = await supabase
      .from('urls')
      .select('slug')
      .eq('slug', sanitizeSlug(slug))
      .single()

    if (slugIsUsed) {
      res.statusCode = 400
      res.json({
        success: false,
        data: null,
        error: 'Slug is not available.',
      })
      return
    }

    const { data, error } = await supabase.from('urls').insert([
      {
        user_id,
        slug: sanitizeSlug(slug),
        real_url: realUrl,
      },
    ])

    if (error) {
      res.statusCode = 400
    } else {
      res.statusCode = 200
    }

    res.json({
      data,
      success: !!error,
      error,
    })
  } catch (error) {
    res.statusCode = 500
    res.json({
      error,
      success: false,
    })
  }
}
