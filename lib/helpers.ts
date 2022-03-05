import {
  RECOVERY_CB,
  LS_FP_TOKEN,
  SIGNUP_CB,
  EVENT_SIGN_IN,
} from 'constants/common'
import { dashboard, login, setNewPassword } from 'constants/paths'
import { customAlphabet } from 'nanoid'
import { setSession } from './supabaseClient'

export const callbackHandler = async () => {
  if (!typeof window !== undefined) {
    const hash = window.location.hash

    if (hash) {
      const urlObj = new URL(`https://example.com?${hash.slice(1)}`)
      const type = urlObj.searchParams.get('type') || ''
      const accessToken = urlObj.searchParams.get('access_token') || ''

      if (type === RECOVERY_CB) {
        window.localStorage.setItem(LS_FP_TOKEN, accessToken)
        window.location.assign(setNewPassword)
      } else if (type === SIGNUP_CB) {
        window.location.assign(login)
      } else if (accessToken) {
        await setSession(EVENT_SIGN_IN, {
          access_token: accessToken,
          token_type: '',
          user: null,
        })
        setTimeout(() => {
          window.location.assign(dashboard)
        }, 500)
      }
    } else {
      setTimeout(() => {
        window.location.assign('/404')
      }, 500)
    }
  }
}

export const sanitizeSlug = (slug: string) => {
  return slug.replace(/[^0-9a-zA-Z.-]/g, '')
}

const nanoid = customAlphabet(
  '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
  7
)

export const generateRandomSlug = () => {
  return nanoid()
}
