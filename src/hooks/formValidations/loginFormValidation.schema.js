import { useFormik } from "formik";
import * as Yup from "yup";

export const useLoginFormValidation = (onSubmitHandler) => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("This field is empty!"),
      password: Yup.string()
        .required("This field is empty!")
        .min(8, "Password is too short - should contain min. 8 characters")
        .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
    }),
    onSubmit: onSubmitHandler,
  });

  return formik;
};
