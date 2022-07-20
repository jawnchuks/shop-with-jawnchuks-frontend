import { useFormik } from "formik";
import * as Yup from "yup";

export const useUserSignupFormValidation = (onSubmitHandler) => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      // phone: "",
      password: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        // .min(5, "Must be 5 characters or more")
        .required("This field is empty!"),
      lastName: Yup.string()
        // .min(5, "Must be 5 characters or more")
        .required("This field is empty!"),
      email: Yup.string()
        .email("Invalid email address")
        .required("This field is empty!"),
      // phone: Yup.string()
      //   .required("This field is empty!")
      //   .min(11, "to short")
      //   .max(11, "to long")
      //   .matches(
      //     /((^090)([23589]))|((^070)([1-9]))|((^080)([2-9]))|((^081)([0-9]))(\d{7})/,
      //     "Phone number is not valid"
      //   ),
      password: Yup.string()
        .required("This field is empty!")
        .min(8, "Password is too short - should contain min. 8 characters")
        .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
    }),
    onSubmit: onSubmitHandler,
  });

  return formik;
};
