import Link from "next/link";
import React, { useState } from "react";

import { useCreateUser } from "@hooks/useCreateUser.hook";
import { useUserSignupFormValidation } from "@hooks/formValidations/userSignupFormValidation.schema";

import Input from "@components/Input/Input";
import Button from "@components/Button/Button";
import Layout from "@components/Layout/Layout";

export default function Signup() {
  const { mutate, isLoading } = useCreateUser();
  const onSubmitHandler = (values) => {
    mutate(values);
  };

  const formik = useUserSignupFormValidation(onSubmitHandler);

  const [showPasword, setShowPassword] = useState(false);

  function handleShowPassword() {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  }

  return (
    <>
      <div className="w-full bg-transparent overflow-hidden select-none  z-2">
        <Layout
          pageMeta={{
            title: "Signup to Jawnchuks shop - find cool gadgets for sale",
            description: "give any description here",
          }}
        >
          <section className="max-w-screen max-h-screen">
            <form
              action=""
              onSubmit={formik.handleSubmit}
              className="w-full my-16 lg:w-2/5 flex flex-col justify-center mx-auto px-4"
            >
              <h2 className="text-4xl font-bold my-8">Create account.</h2>

              {/* name */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                <div className="flex flex-col">
                  <label
                    htmlFor="firstName"
                    className="text-lg lg:text-xl mb-1"
                  >
                    First name
                  </label>
                  <Input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="Jane"
                    className={
                      formik.touched.firstName && formik.errors.firstName
                        ? "p-2 bg-white outline-none   border border-danger leading-tight focus:outline-none focus:border-danger text-lg lg:text-xl animateWiggle"
                        : "p-2 bg-white outline-none border border-secondary text-lg lg:text-xl"
                    }
                    inputMode="FirstName"
                    required
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.firstName}
                  />
                  {/* firstname error div */}
                  {formik.touched.firstName && formik.errors.firstName ? (
                    <div className="flex flex-row items-center text-danger text-sm font-semibold">
                      {" "}
                      {formik.errors.firstName}
                    </div>
                  ) : null}
                </div>

                <div className="flex flex-col">
                  <label htmlFor="lastName" className="text-lg lg:text-xl mb-1">
                    Last name
                  </label>
                  <Input
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Doe"
                    className={
                      formik.touched.lastName && formik.errors.lastName
                        ? "p-2 bg-white outline-none   border border-danger leading-tight focus:outline-none focus:border-danger text-lg lg:text-xl animateWiggle"
                        : "p-2 bg-white outline-none border border-secondary text-lg lg:text-xl"
                    }
                    inputMode="lastName"
                    required
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.lastName}
                  />
                  {/* last name error div */}
                  {formik.touched.lastName && formik.errors.lastName ? (
                    <div className="flex flex-row items-center text-danger text-sm font-semibold">
                      {" "}
                      {formik.errors.lastName}
                    </div>
                  ) : null}
                </div>
              </div>

              <label htmlFor="email" className="mt-5 mb-1 text-lg lg:text-xl">
                Email
              </label>
              <Input
                placeholder="Janedoe@gmail.com"
                id="email"
                name="email"
                type="email"
                className={
                  formik.touched.email && formik.errors.email
                    ? "p-2 bg-white outline-none   border border-danger leading-tight focus:outline-none focus:border-danger text-lg lg:text-xl animateWiggle"
                    : "p-2 bg-white outline-none border border-secondary text-lg lg:text-xl"
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

              <label
                htmlFor="password"
                className="mt-5 mb-1 text-lg lg:text-xl"
              >
                Password
              </label>
              <div
                className={
                  formik.touched.password && formik.errors.password
                    ? " flex  border border-danger leading-tight focus:outline-none focus:border-danger text-lg lg:text-xl animateWiggle input-password relative"
                    : " flex border border-secondary text-lg lg:text-xl bg-white outline-none relative"
                }
              >
                <div className="absolute inset-y-0 right-0 flex items-center px-2">
                  <span
                    type="button"
                    className="flex items-center justify-center cursor-pointer px-2"
                    onClick={handleShowPassword}
                  >
                    {!showPasword ? (
                      <span>
                        <svg
                          width="25"
                          height="25"
                          viewBox="0 0 25 25"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M22.7156 12.7156C22.7156 12.7156 18.2384 19.7156 12.7156 19.7156C7.19273 19.7156 2.71558 12.7156 2.71558 12.7156C2.71558 12.7156 7.19273 5.71559 12.7156 5.71559C18.2384 5.71559 22.7156 12.7156 22.7156 12.7156Z"
                            stroke="black"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <circle
                            cx="12.7156"
                            cy="12.7156"
                            r="4"
                            stroke="black"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    ) : (
                      <span>
                        <svg
                          width="25"
                          height="25"
                          viewBox="0 0 25 25"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4.99591 4.93526C5.2888 4.64237 5.76367 4.64237 6.05657 4.93526L15.7957 14.6744L15.8363 14.7121C15.8584 14.7326 15.879 14.7543 15.8983 14.777L20.5523 19.431C20.8451 19.7238 20.8451 20.1987 20.5523 20.4916C20.2594 20.7845 19.7845 20.7845 19.4916 20.4916L17.5383 18.5383C16.07 19.4925 14.342 20.2156 12.4656 20.2156C9.40161 20.2156 6.71863 18.2894 4.87314 16.5047C3.93551 15.598 3.1792 14.6939 2.65749 14.0173C2.39616 13.6784 2.19248 13.395 2.05315 13.1948C1.98345 13.0946 1.92977 13.0152 1.89294 12.9599C1.87453 12.9322 1.86032 12.9106 1.85042 12.8954L1.83882 12.8776L1.83547 12.8724L1.8344 12.8707L1.83403 12.8701C1.83388 12.8699 1.83376 12.8697 2.46558 12.4656C1.83376 12.0615 1.83384 12.0614 1.83392 12.0612L1.83414 12.0609L1.83469 12.06L1.83635 12.0574L1.84178 12.049L1.86109 12.0195C1.87768 11.9942 1.90168 11.958 1.93285 11.9118C1.99519 11.8194 2.08628 11.6871 2.20422 11.5227C2.43993 11.194 2.78379 10.7359 3.22057 10.2115C3.96635 9.3162 4.99533 8.21289 6.23137 7.23138L4.99591 5.99592C4.70301 5.70303 4.70301 5.22815 4.99591 4.93526ZM7.23153 8.35287C6.0741 9.26121 5.09374 10.3064 4.37311 11.1716C3.96309 11.6638 3.64132 12.0927 3.4231 12.3969C3.40613 12.4206 3.38979 12.4435 3.37409 12.4656C3.49468 12.6354 3.65286 12.8517 3.84536 13.1014C4.33571 13.7373 5.04386 14.5832 5.91588 15.4265C7.68967 17.1418 10.0067 18.7156 12.4656 18.7156C13.8285 18.7156 15.1529 18.2326 16.3755 17.4968L15.2167 16.3381C14.4406 16.8902 13.4907 17.2155 12.4656 17.2155C9.84222 17.2155 7.71558 15.0889 7.71558 12.4655C7.71558 11.4407 8.04082 10.4906 8.59304 9.71438L7.23153 8.35287ZM9.58666 10.9557C9.34953 11.4067 9.21558 11.9201 9.21558 12.4655C9.21558 14.2605 10.6707 15.7155 12.4656 15.7155C13.0758 15.7155 13.6462 15.5478 14.134 15.2553L13.0554 14.1767L9.58666 10.9557ZM2.46558 12.4656L1.83376 12.0615C1.67618 12.3078 1.67618 12.6233 1.83376 12.8697L2.46558 12.4656ZM12.4656 6.21559C11.7355 6.21559 11.0165 6.35384 10.3159 6.59678C9.92451 6.73249 9.49724 6.52525 9.36153 6.13389C9.22583 5.74254 9.43307 5.31528 9.82442 5.17957C10.6588 4.89025 11.5443 4.71559 12.4656 4.71559C15.5295 4.71559 18.2125 6.64178 20.058 8.42645C20.9956 9.33317 21.752 10.2373 22.2737 10.9139C22.535 11.2528 22.7387 11.5362 22.878 11.7364C22.9477 11.8365 23.0014 11.916 23.0382 11.9713C23.0566 11.9989 23.0708 12.0206 23.0807 12.0357L23.0923 12.0536L23.0957 12.0588L23.0967 12.0605L23.0971 12.0611C23.0973 12.0613 23.0974 12.0615 22.4656 12.4656C23.0974 12.8697 23.0973 12.8698 23.0973 12.8699L23.0971 12.8701L23.0968 12.8706L23.0958 12.8721L23.0928 12.8768L23.0824 12.8929C23.0736 12.9065 23.0609 12.9258 23.0444 12.9505C23.0116 13 22.9637 13.0711 22.9016 13.1608C22.7773 13.3403 22.5956 13.5951 22.3621 13.9018C21.8959 14.5145 21.2192 15.3397 20.3767 16.1899C20.0851 16.4841 19.6103 16.4863 19.316 16.1947C19.0218 15.9032 19.0196 15.4283 19.3112 15.1341C20.0969 14.3411 20.7311 13.5681 21.1685 12.9934C21.324 12.789 21.4542 12.6104 21.5571 12.4656C21.4365 12.2958 21.2783 12.0795 21.0858 11.8298C20.5954 11.1939 19.8873 10.348 19.0153 9.50473C17.2415 7.7894 14.9245 6.21559 12.4656 6.21559ZM22.4656 12.4656L23.0974 12.8697C23.255 12.6233 23.255 12.3078 23.0974 12.0615L22.4656 12.4656Z"
                            fill="currentColor"
                          />
                        </svg>
                      </span>
                    )}
                  </span>
                </div>
                <Input
                  id="password"
                  className=" p-2 w-full focus:bg-white  bg-white outline-none"
                  name="password"
                  type={!showPasword ? "password" : "text"}
                  placeholder="......."
                  required
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                />
              </div>

              {/* email error div */}
              {formik.touched.password && formik.errors.password ? (
                <div className="flex flex-row items-center text-danger text-sm font-semibold">
                  {" "}
                  {formik.errors.password}
                </div>
              ) : null}

              <Button
                onClick={formik.handleSubmit}
                className="bg-black mt-12 text-lg lg:text-xl font-semibold hover tracking-wider  text-white py-4 px-4"
                type="submit"
              >
                {isLoading ? "Creating your account..." : "Create account"}
              </Button>

              <p className="text-center mt-4 text-lg lg:text-xl text-light-black font-medium ">
                Already have an account?{" "}
                <Link href="login">
                  <a className="text-black hover-underline-animation">Login</a>
                </Link>{" "}
              </p>
            </form>
          </section>
        </Layout>
      </div>
    </>
  );
}
