import { Session } from '@supabase/supabase-js'
import { supabase } from './supabaseClient'

export type DefaultFetchOption = {
  headers: HeadersInit
  credentials: RequestCredentials
}

export const defaultFetchOption: DefaultFetchOption = {
  headers: new Headers({ 'Content-Type': 'application/json' }),
  credentials: 'same-origin',
}

export const defaultFetchWithAuthOption = () => {
  const currentSession: Session | null = supabase.auth.session()

  let headers: Record<string, string> = {
    'Content-Type': 'application/json',
  }

  if (currentSession) {
    headers = {
      ...headers,
      Authorization: `Bearer ${currentSession?.access_token}`,
    }
  }

  return {
    headers: new Headers(headers),
    credentials: 'same-origin',
  }
}

export const defaultGetOption = {
  ...defaultFetchOption,
  method: 'GET',
}

export const fetcher = async (url: string, opts: any) => {
  const res = await fetch(url, {
    ...defaultGetOption,
    ...opts,
  })
  return await res.json()
}

export const fetcherWithAuth = async (url: string, opts?: any) => {
  const res = await fetch(url, {
    ...defaultFetchWithAuthOption(),
    ...opts,
  })
  return await res.json()
}
