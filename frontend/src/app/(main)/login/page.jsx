"use client";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Login = () => {
  const loginvalidationschema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),

    password: Yup.string()
      .min(8, "Password is too short - should be 8 chars minimum.")
      .required("Required")
      .matches(/[a-z]/, "password must contain 1 lowercase letter")
      .matches(/[A-Z]/, "password must contain 1 uppercase letter")
      .matches(/[0-9]/, "password must contain 1 number")
      .matches(/[\w]/, "password must contain 1 special case letter"),

    remember: Yup.string().required("Required"),
  });

  const loginuser = useFormik({
    initialValues: {
      email: "",
      password: "",
      remember: "",
    },
    onSubmit: (values, action) => {
      action.resetForm();
      console.log(values);
    },
    validationSchema: loginvalidationschema,
  });

  return (
    <>
      {/* source:https://codepen.io/owaiswiz/pen/jOPvEPB */}
      <div
        className="min-h-screen  bg-red-100 text-gray-900 flex justify-center"
        style={{ backgroundColor: "#9A616D" }}
      >
        <div className="max-w-screen-xl  mb-10 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
          {/* first division containing form */}
          <div className=" xl:w-6/12 p-6 sm:p-12">
            <div>
              <img
                src="https://storage.googleapis.com/devitary-image-host.appspot.com/15846435184459982716-LogoMakr_7POjrN.png"
                className="w-32 mx-auto"
              />
            </div>

            <h1 className="mt-5 text-2xl font-bold text-center">
              Sign in with:
            </h1>

            {/* Form */}
            <form>
              <div className="text-center mb-3">
                <button
                  type="button"
                  className="btn btn-link btn-floating mx-1"
                >
                  <i className="fab fa-facebook-f" />
                </button>
                <button
                  type="button"
                  className="btn btn-link btn-floating mx-1"
                >
                  <i className="fab fa-google" />
                </button>
                <button
                  type="button"
                  className="btn btn-link btn-floating mx-1"
                >
                  <i className="fab fa-twitter" />
                </button>
                <button
                  type="button"
                  className="btn btn-link btn-floating mx-1"
                >
                  <i className="fab fa-github" />
                </button>
              </div>
              <h5 className="mb-5 text-2lg  text-center">
                -----Or Continue with-----
              </h5>

              <div className="grid gap-y-4">
                {/* Form Group */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Email address
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      required=""
                      aria-describedby="email-error"
                    />
                  </div>
                </div>
                {/* End Form Group */}
                {/* Form Group */}
                <div>
                  <div className="flex justify-between items-center">
                    <label
                      htmlFor="password"
                      className="block text-sm font-semibold leading-6 text-gray-900"
                    >
                      Password
                    </label>
                    <a
                      className="text-sm text-blue-600 decoration-2 hover:underline font-medium"
                      href="/forgetPassword"
                    >
                      Forgot password?
                    </a>
                  </div>
                  {/* Input Field for password*/}
                  <div className="mt-2.5">
                    <input
                      type="password"
                      id="password"
                      name="password"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      required=""
                      aria-describedby="password-error"
                    />
                    <div className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
                      <svg
                        className="size-5 text-red-500"
                        width={16}
                        height={16}
                        fill="currentColor"
                        viewBox="0 0 16 16"
                        aria-hidden="true"
                      >
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                      </svg>
                    </div>
                  </div>
                </div>
                {/* End Form Group */}

                {/* Checkbox */}
                <div className="flex items-center">
                  <div className="flex">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                    />
                  </div>
                  <div className="ms-3">
                    <label
                      htmlFor="remember-me"
                      className="text-sm dark:text-white"
                    >
                      Remember me
                    </label>
                  </div>
                </div>
                {/* End Checkbox */}
                <button
                  type="submit"
                  className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign in
                </button>
              </div>
            </form>
            {/* End Form */}
            <div className="mt-1 text-center font-bold">
              Don't have an account yet?
              <a href="/signup" className="text-blue-500 hover:text-blue-700">
                Sign up here
              </a>
            </div>
          </div>
          {/* End of first division */}

          {/* second division containing Image */}
          <div className="flex-1 bg-indigo-100 text-center  lg:flex">
            <img src="https://i.pinimg.com/originals/34/ad/1c/34ad1c2bbf283d9e8c16cf50484f8db0.jpg" />
          </div>
          {/* End of secnd division */}
        </div>
      </div>
    </>
  );
};

export default Login;
