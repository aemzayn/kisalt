import { HeaderLink } from "interfaces/Link";

export const HOME = process.env.NEXT_PUBLIC_HOME || "";

export const dashboard: string = "/dashboard";
export const login: string = "/login";
export const signup: string = "/signup";
export const about: string = "/about";

export const checkAuth: string = "/api/auth/check-auth";
export const loginApi: string = "/api/auth/login";
export const registerApi: string = "/api/auth/register";
export const logOutApi: string = "/api/auth/logout";
export const setSessionApi: string = "/api/auth/set-session";

export const FALLBACK: string = `${HOME}callback`;

export const headerLinks: HeaderLink[] = [
  { route: "/about", label: "About", type: "link" },
  { route: "/how-it-works", label: "How it works", type: "link" },
  { route: "/register", label: "Sign up", type: "link" },
  { route: "/login", label: "Login", type: "button" },
];
