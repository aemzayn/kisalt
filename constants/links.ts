import { DEVELOPMENT } from './mode'

export const DEV_LINK: string = 'http://localhost:3000'
export const PROD_LINK: string =
  process.env.PROD_LINK || 'https://ahmadmuslih.space'

export const LINK: string = DEVELOPMENT ? DEV_LINK : PROD_LINK
