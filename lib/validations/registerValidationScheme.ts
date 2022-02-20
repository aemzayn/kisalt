import { object, string } from "yup";

const registerValidationScheme = object().shape({
  email: string().email("Invalid email").required("Email is required"),
  fullName: string()
    .min(4, "Must be at least 4 characters")
    .required("Name is required"),
  password: string()
    .min(6, "Must be at least 6 characters")
    .required("Password cannot be empty."),
});

export default registerValidationScheme;
