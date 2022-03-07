import { blacklistSlugs } from 'constants/paths'
import { object, string } from 'yup'

export const emailValidation = string()
  .email('Invalid email')
  .required('Email is required')

export const urlValidation = string()
  .url('Must be a valid url.')
  .required('Required')

export const slugValidation = string()
  .min(2, 'Must be longer than 2 characters.')
  .matches(
    /^[a-z0-9]+(?:-[a-z0-9]+)*$/gim,
    'Slug cannot have spaces and only separated by dash (-)'
  )
  .notOneOf(blacklistSlugs, 'Cannot use this slug')
  .required('Required')

export const passwordValidation = string()
  .min(6, 'Must be at least 6 characters')
  .required('Password cannot be empty.')

export const authValidationScheme = object().shape({
  email: emailValidation,
  password: passwordValidation,
})

export const resetPasswordValidationScheme = object().shape({
  email: emailValidation,
})

export const setNewPasswordValidationScheme = object().shape({
  email: emailValidation,
  password: passwordValidation,
})

export const newUrlValidationScheme = object().shape({
  slug: slugValidation,
  realUrl: urlValidation,
})

export const heroInputValidationScheme = object().shape({
  realUrl: urlValidation,
})

export const changeSlugValidationScheme = object().shape({
  slug: slugValidation,
})
