import { object, string } from "yup";

export const emailValidation = string()
  .email("Invalid email")
  .required("Email is required");

export const authValidationScheme = object().shape({
  email: emailValidation,
  password: string()
    .min(6, "Must be at least 6 characters")
    .required("Password cannot be empty."),
});

export const resetPasswordValidationScheme = object().shape({
  email: emailValidation,
});

export const newUrlValidationScheme = object().shape({
  slug: string()
    .min(2, "Must be longer than 2 characters.")
    .matches(
      /^[a-z0-9]+(?:-[a-z0-9]+)*$/gim,
      "Slug cannot have spaces and only separated by dash (-)"
    )
    .required("Required"),
  realUrl: string().url("Must be a valid url.").required("Required"),
});
