import { object, string } from "yup";

export const authValidationScheme = object().shape({
  email: string().email("Invalid email").required("Email is required"),
  password: string()
    .min(6, "Must be at least 6 characters")
    .required("Password cannot be empty."),
});
