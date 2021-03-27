import * as Yup from "yup";

export const validationSchema = Yup.object({
  email: Yup.string().email("Please enter a valid email").required("Required"),
  password: Yup.string().required("Required"),
});
