import { ApiError, createClient, Session, User } from "@supabase/supabase-js";
import { HOME } from "constants/paths";
import { defaultFetchOption } from "./fetcher";

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export type Provider = "google" | "github";

export type LoginArg = {
  email: string;
  password: string;
};

export type AuthResponse = {
  session?: Session;
  user?: User;
  error?: ApiError;
};

export async function login({
  email,
  password,
}: LoginArg): Promise<AuthResponse> {
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

export async function register({
  email,
  password,
}: RegisterArg): Promise<AuthResponse> {
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
  const { user, session, error } = await supabase.auth.signIn(
    {
      provider: "google",
    },
    { redirectTo: HOME }
  );
  return { user, session, error };
}

export const setSession = async (event: string, session: Session | null) => {
  const res = await fetch("/api/auth/set-session", {
    ...defaultFetchOption,
    method: "POST",
    credentials: "same-origin",
    body: JSON.stringify({ event, session }),
  });
  return await res.json();
};
