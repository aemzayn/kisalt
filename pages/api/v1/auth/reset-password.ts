import { NextApiRequest, NextApiResponse } from 'next'
import { emailValidation } from 'lib/validations'
import { supabase } from 'lib/supabaseClient'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { email } = req.body
    const isValidEmail = emailValidation.isValid(email)

    if (!isValidEmail) {
      res.statusCode = 400
      res.json({
        error: {
          message: 'Invalid email.',
        },
        success: true,
      })
    }

    const { data, error } = await supabase.auth.api.resetPasswordForEmail(email)

    if (!error && data) {
      res.statusCode = 200
      res.json({
        success: true,
        ...data,
      })
    } else {
      res.statusCode = 400
      res.json({
        error: error || null,
        success: true,
      })
    }
  } catch (error) {
    res.statusCode = 500
    res.json({
      success: false,
      error,
    })
  }
}
