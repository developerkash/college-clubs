"use client";
import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useFormik } from "formik";
import * as Yup from "yup";

const Signup = () => {
  const signupvalidationschema = Yup.object().shape({
    first_name: Yup.string().required("Required"),
    last_name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    contact: Yup.number().required("Required").min(10, "Invalid contact"),

    password: Yup.string()
      .required("Required")
      .min(8, "Password is too short - should be 8 chars minimum.")
      .matches(/[a-z]/, "password must contain 1 lowercase letter")
      .matches(/[A-Z]/, "password must contain 1 uppercase letter")
      .matches(/[0-9]/, "password must contain 1 number")
      .matches(/[\w]/, "password must contain 1 special case letter"),

    confirm_password: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Required"),
  });

  const adduser = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      contact: "",
      password: "",
      confirm_password: "",
    },
    onSubmit: (values, action) => {
      action.resetForm();
      console.log(values);
    },
    validationSchema: signupvalidationschema,
  });

  return (
    <>
      {/* source:https://codepen.io/owaiswiz/pen/jOPvEPB */}
      <div
      className="
                    xl:h-screen lg:h-screen md:h-screen sm:h-screen  2xl:h-screen
                    bg-indigo-50  flex  justify-center"
    >
      <div className="max-h-full  md:mt-24 sm:mt-32 lg:m-32  text-black  flex justify-center w-full  ">
        <div className="w-5/12">
          <img
            src="https://i.pinimg.com/564x/10/90/6c/10906cb2e6ada9bdd6c465f5242ad255.jpg"
            alt=""
            className="h-full"
          />
        </div>
        <div className="w-7/12 bg-white">
          <div className="mx-5">
            
            <h1 className=" text-2xl font-bold text-center tex">
              Sign in with:
            </h1>

            <form onSubmit={adduser.handleSubmit}>
              <div className="text-center mb-3">
                <button
                  type="button"
                  className="text-blue-700 btn btn-link btn-floating mx-1"
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

              {/* column for first name and last name  in a row */}

              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="first_name"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    First name
                  </label>
                  <div className="">
                    <input
                      type="text"
                      name="first_name"
                      id="first_name"
                      onChange={adduser.handleChange}
                      value={adduser.values.first_name}
                      autoComplete="given-name"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                     {adduser.touched.first_name && (
                      <small className="text-red-500">
                        {adduser.errors.first_name}
                      </small>
                    )} 
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="last_name"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Last name
                  </label>
                  <div className="">
                    <input
                      type="text"
                      name="last_name"
                      id="last_name"
                      onChange={adduser.handleChange}
                      value={adduser.values.last_name}
                      autoComplete="family-name"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    {adduser.touched.last_name && (
                      <small className="text-red-500">
                        {adduser.errors.last_name}
                      </small>
                    )}
                  </div>
                </div>
              </div>

              {/* column for email and contact in a row */}

              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Email
                  </label>
                  <div className="">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      autoComplete="email"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={adduser.handleChange}
                      value={adduser.values.email}
                    />
                    {adduser.touched.email && (
                      <small className="text-red-500">
                        {adduser.errors.email}
                      </small>
                    )}
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="contact"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Contact
                  </label>
                  <div className="">
                    <input
                      type="number"
                      name="contact"
                      id="contact"
                      onChange={adduser.handleChange}
                      value={adduser.values.contact}
                      autoComplete="tel"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    {adduser.touched.contact && (
                      <small className="text-red-500">
                        {adduser.errors.contact}
                      </small>
                    )}
                  </div>
                </div>
              </div>

              {/* column for password and confirm password in a row */}
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Password
                  </label>
                  <div className="">
                    <input
                      type="password"
                      name="password"
                      id="password"
                      autoComplete="new-password"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={adduser.handleChange}
                      value={adduser.values.password}
                    />
                     {adduser.touched.password && (
                      <small className="text-red-500">
                        {adduser.errors.password}
                      </small>
                    )} 
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="confirm_password"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Confirm Password
                  </label>
                  <div className="">
                    <input
                      type="password"
                      name="confirm_password"
                      id="confirm_password"
                      autoComplete="new-password"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={adduser.handleChange}
                      value={adduser.values.confirm_password}
                    />
                    {adduser.touched.confirm_password && (
                      <small className="text-red-500">
                        {adduser.errors.confirm_password}
                      </small>
                    )}
                  </div>
                </div>
                <div className=" flex items-center justify-start">
                  <div className="flex">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="shrink-0 mt- border-gray-200 rounded text-blue-600 focus:ring-blue-500 dark:bg-neutral-900 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                    />
                  </div>
                  <div className="ms-3">
                    <label
                      htmlFor="remember-me"
                      className="text-sm dark:text-white"
                    >
                      I accept the{" "}
                      <a
                        className="text-blue-600 decoration-2 hover:underline font-medium dark:text-blue-500"
                        href="#"
                      >
                        Terms and Conditions
                      </a>
                    </label>
                  </div>
                </div>
              </div>
              <div className="">
                <button
                  type="submit"
                  className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Submit
                </button>
              </div>
            </form>
            <div className="mt-1 text-center font-bold">
              Already have an account?{" "}
              <a href="/login" className="text-blue-500 hover:text-blue-700">
                Login
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Signup;
