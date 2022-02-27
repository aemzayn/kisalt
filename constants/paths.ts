import { HeaderLink } from "interfaces/Link";

export const HOME = process.env.NEXT_PUBLIC_HOME || "";

export const dashboard: string = "/dashboard";
export const login: string = "/login";
export const signup: string = "/signup";
export const about: string = "/about";
export const resetPassword: string = "/reset-password";

export const checkAuth: string = "/api/auth/check-auth";
export const loginApi: string = "/api/auth/login";
export const registerApi: string = "/api/auth/register";
export const logOutApi: string = "/api/auth/logout";
export const setSessionApi: string = "/api/auth/set-session";
export const resetPasswordApi: string = "/api/auth/reset-password";

export const FALLBACK: string = `${HOME}callback`;

export const createNewUrlApi = (userId: string) => `/api/urls/new/${userId}`;
export const getUrls = (id: string) => `/api/urls/get/${id}`;
export const getClicks = (urlId: string) => `/api/clicks/get/${urlId}`;
export const getMyDashboardApi = (userId: string) => `/api/me/${userId}`;

export const headerLinks: HeaderLink[] = [
  { route: "/about", label: "About", type: "link" },
  { route: "/how-it-works", label: "How it works", type: "link" },
  { route: "/register", label: "Sign up", type: "link" },
  { route: "/login", label: "Login", type: "button" },
];
