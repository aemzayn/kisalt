import { ApiError, createClient, Session, User } from '@supabase/supabase-js'
import { EVENT_SIGN_OUT, LS_AUTH_TOKEN } from 'constants/common'
import {
  createNewUrlApi,
  HOME,
  loginApi,
  logOutApi,
  registerApi,
  resetPasswordApi,
  setSessionApi,
} from 'constants/paths'
import { defaultFetchOption } from './fetcher'

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

export type Provider = 'google' | 'github'

export type LoginArg = {
  email: string
  password: string
}

export type AuthResponse = {
  session?: Session
  user?: User
  error?: ApiError
}

export async function login({
  email,
  password,
}: LoginArg): Promise<AuthResponse> {
  const res = await fetch(loginApi, {
    ...defaultFetchOption,
    method: 'POST',
    credentials: 'same-origin',
    body: JSON.stringify({ email, password }),
  })

  const data = await res.json()
  return data
}

export type RegisterArg = {
  email: string
  password: string
}

export async function register({
  email,
  password,
}: RegisterArg): Promise<AuthResponse> {
  const res = await fetch(registerApi, {
    ...defaultFetchOption,
    method: 'POST',
    credentials: 'same-origin',
    body: JSON.stringify({ email, password }),
  })

  const data = res.json()
  return data
}

export async function loginWithGoogle() {
  const { user, session, error } = await supabase.auth.signIn(
    {
      provider: 'google',
    },
    { redirectTo: HOME }
  )
  return { user, session, error }
}

export const logOut = async () => {
  const session = supabase.auth.session()

  fetch(logOutApi, {
    ...defaultFetchOption,
  }).then((res) => res.json())
  await setSession(EVENT_SIGN_OUT, session)

  setTimeout(() => {
    window.localStorage.removeItem(LS_AUTH_TOKEN)
    window.location.assign('/')
  }, 500)
}

export const setSession = async (event: string, session: Session | null) => {
  const res = await fetch(setSessionApi, {
    ...defaultFetchOption,
    method: 'POST',
    credentials: 'same-origin',
    body: JSON.stringify({ event, session }),
  })
  return await res.json()
}

export const sendResetEmail = async (email: string) => {
  const res = await fetch(resetPasswordApi, {
    ...defaultFetchOption,
    method: 'POST',
    credentials: 'same-origin',
    body: JSON.stringify({ email }),
  })
  return await res.json()
}

export type NewUrl = {
  slug: string
  realUrl: string
}

export type Response = {
  error?: string | null
  success?: boolean
  data?: any
}

export const createNewUrl = async (
  newUrl: NewUrl,
  userId: string
): Promise<Response> => {
  const res = await fetch(createNewUrlApi(userId), {
    ...defaultFetchOption,
    method: 'POST',
    credentials: 'same-origin',
    body: JSON.stringify(newUrl),
  })
  return await res.json()
}
