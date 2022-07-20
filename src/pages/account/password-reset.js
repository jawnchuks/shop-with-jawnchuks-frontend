import React, { useState } from "react";
import Link from "next/link";

import { useLogin } from "@hooks/useLogin.hook";
import { useLoginFormValidation } from "@hooks/formValidations/loginFormValidation.schema";

import Input from "@components/Input/Input";
import Button from "@components/Button/Button";
import Layout from "@components/Layout/Layout";

export default function PasswordReset() {
  const { mutate, isLoading } = useLogin();
  const onSubmitHandler = (values) => {
    mutate(values);
  };

  const formik = useLoginFormValidation(onSubmitHandler);

  const [showPasword, setShowPassword] = useState(false);

  function handleShowPassword() {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  }

  return (
    <div className="w-full bg-transparent overflow-hidden select-none  z-2">
      <Layout
        pageMeta={{
          title: "Login to Jawnchuks shop - find cool gadgets for sale",
          description: "give any description here",
        }}
      >
        <section className="max-w-screen max-h-screen">
          <form
            action=""
            onSubmit={formik.handleSubmit}
            className="w-full my-16 lg:w-2/5 flex flex-col justify-center mx-auto px-4"
          >
            <h2 className="text-4xl font-bold my-8">Password Reset.</h2>
            <p className="mb-8 text-lg lg:text-xl text-light-black font-medium">
              Please enter the e-mail address associated with your account. We
              will send you a link to this e-mail address to reset your
              password.
            </p>
            <label htmlFor="email" className="text-lg lg:text-xl mb-1">
              Email
            </label>
            <Input
              placeholder="Janedoe@gmail.com"
              id="email"
              name="email"
              type="email"
              className={
                formik.touched.email && formik.errors.email
                  ? "p-4 bg-white outline-none   border border-danger leading-tight focus:outline-none focus:border-danger text-lg lg:text-xl animateWiggle"
                  : "p-4 bg-white outline-none border border-secondary text-lg lg:text-xl"
              }
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {/* email error div */}
            {formik.touched.email && formik.errors.email ? (
              <div className="flex flex-row items-center text-danger text-sm font-semibold">
                {" "}
                {formik.errors.email}
              </div>
            ) : null}

            <Button
              animation="animate-bottom-top"
              onClick={formik.handleSubmit}
              className="mt-8 bg-black text-lg lg:text-xl font-semibold hover tracking-wider  text-white py-4 px-4"
              type="submit"
            >
              {isLoading ? "Loading..." : "Send me link"}
            </Button>
            <p className="mt-4 text-center  text-lg lg:text-xl text-light-black font-medium ">
              Go back to &nbsp;
              <Link href="login">
                <a className="text-black hover-underline-animation">Login</a>
              </Link>{" "}
            </p>
          </form>
        </section>
      </Layout>
    </div>
  );
}
