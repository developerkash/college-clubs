"use client";
import React from "react";
import * as Yup from "yup";
import { useFormik } from "formik";

// yup for form validation
const ResetFormvalidationSchema = Yup.object({
  password: Yup.string()
    .required("Required")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(/[a-z]/, "password must contain 1 lowercase letter")
    .matches(/[A-Z]/, "password must contain 1 uppercase letter")
    .matches(/[0-9]/, "password must contain 1 number")
    .matches(/[\w]/, "password must contain 1 special case letter"),

  confirmPassword: Yup.string()
    .required("Required")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
});
const ResetForm = () => {
  // formik form
  const resetPassword = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    onsubmit: (values, action) => {
      action.ResetForm();
      console.log(values);
    },
    validationSchema: ResetFormvalidationSchema,
  });
  return (
    <div
      
      className="min-h-screen  bg-indigo-50 text-gray-900 flex justify-center"
    >
      <div className="w-96 mt-15 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-neutral-900 dark:border-neutral-700 m-auto">
        <div className="p-4 sm:p-7">
          <div className="text-center">
            <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
              Create New Password
            </h1>
          </div>
          <div className="mt-5">
            {/* Form */}
            <form onSubmit={resetPassword.handleSubmit}>
              <div className="grid gap-y-4">
                {/* Form Group */}
                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm mb-2 dark:text-white"
                  >
                    New Password
                  </label>
                  <div className="relative">
                    <input
                      type="password"
                      id="password"
                      name="password"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      required=""
                      aria-describedby="password-error"
                      onChange={resetPassword.handleChange}
                      value={resetPassword.values.password}
                    />
                    {/* password error */}
                    {resetPassword.touched.password && (
                      <small className="text-red-500">
                        {resetPassword.errors.password}
                      </small>
                    )}
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
                  <p
                    className="hidden text-xs text-red-600 mt-2"
                    id="password-error"
                  >
                    8+ characters required
                  </p>
                </div>
                {/* End Form Group */}
                {/* Form Group */}
                <div>
                  <label
                    htmlFor="confirm-password"
                    className="block text-sm mb-2 dark:text-white"
                  >
                    Confirm Password
                  </label>
                  <div className="relative">
                    <input
                      type="password"
                      id="confirmPassword"
                      name="confirmpassword"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      required=""
                      aria-describedby="confirm-password-error"
                      onChange={resetPassword.handleChange}
                      value={resetPassword.values.confirmPassword}
                    />
                    {/* confirm password error */}
                    {resetPassword.touched.confirmPassword && (
                      <small className="text-red-500">
                        {resetPassword.errors.confirmPassword}
                      </small>
                    )}
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
                  <p
                    className="hidden text-xs text-red-600 mt-2"
                    id="confirm-password-error"
                  >
                    Password does not match the password
                  </p>
                </div>
                {/* End Form Group */}

                <button
                  type="submit"
                  className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                >
                  Change Password
                </button>
              </div>
            </form>
            {/* End Form */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetForm;
