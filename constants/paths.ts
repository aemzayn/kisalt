import { HeaderLink } from 'interfaces/Link'

export const HOME = process.env.NEXT_PUBLIC_HOME || ''
export const META_IMAGE: string = 'images/meta/meta.jpg'
export const META_ICON: string = `${HOME}images/favicon/android-icon-48x48.png`

export const dashboard: string = '/dashboard'
export const login: string = '/login'
export const signup: string = '/signup'
export const register: string = '/register'
export const about: string = '/about'
export const resetPassword: string = '/reset-password'
export const setNewPassword: string = '/set-new-password'

export const checkAuth: string = '/api/v1/auth/check-auth'
export const loginApi: string = '/api/v1/auth/login'
export const registerApi: string = '/api/v1/auth/register'
export const logOutApi: string = '/api/v1/auth/logout'
export const setSessionApi: string = '/api/v1/auth/set-session'
export const resetPasswordApi: string = '/api/v1/auth/reset-password'
export const setNewPasswordApi: string = '/api/v1/auth/set-new-password'

export const FALLBACK: string = `${HOME}callback`

export const createNewUrlApi = (userId: string) => `/api/v1/urls/new/${userId}`
export const getUrls = (id: string) => `/api/v1/urls/get/${id}`
export const getClicks = (urlId: string) => `/api/v1/clicks/get/${urlId}`
export const getMyDashboardApi = (userId: string) => `/api/v1/me/${userId}`
export const getChartDataApi = (userId: string) =>
  `/api/v1/clicks/chart/${userId}`
export const patchSlugApi = (urlId: string) => `/api/v1/urls/patch/${urlId}`

export const headerLinks: HeaderLink[] = [
  { route: '/about', label: 'About', type: 'link' },
  { route: '/how-it-works', label: 'How it works', type: 'link' },
  { route: '/register', label: 'Sign up', type: 'link' },
  { route: '/login', label: 'Login', type: 'button' },
]

export const blacklistSlugs: string[] = [
  'about',
  'dashboard',
  'how-it-works',
  'login',
  'register',
  'reset-password',
  'set-new-password',
  'privacy-policy',
  'terms-of-service',
]
