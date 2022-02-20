import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export type Provider = "google" | "github";

export type DefaultFetchOption = {
  headers: HeadersInit;
  credentials: RequestCredentials;
};

export const defaultFetchOption: DefaultFetchOption = {
  headers: new Headers({ "Content-Type": "application/json" }),
  credentials: "same-origin",
};

export type LoginArg = {
  email: string;
  password: string;
};

export async function login({ email, password }: LoginArg) {
  const res = await fetch("/api/auth/login", {
    ...defaultFetchOption,
    method: "POST",
    credentials: "same-origin",
    body: JSON.stringify({ email, password }),
  });

  const data = await res.json();
  return data;
}

export type RegisterArg = {
  email: string;
  password: string;
};

export async function register({ email, password }: RegisterArg) {
  const res = await fetch("/api/auth/register", {
    ...defaultFetchOption,
    method: "POST",
    credentials: "same-origin",
    body: JSON.stringify({ email, password }),
  });

  const data = res.json();
  return data;
}

export async function loginWithGoogle() {
  const { user, session, error } = await supabase.auth.signIn({
    provider: "google",
  });
  return { user, session, error };
}
