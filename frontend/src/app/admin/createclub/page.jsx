"use client";
import { useFormik } from "formik";
import React from "react";
import toast from "react-hot-toast";
import * as Yup from "yup";

const CreateClub = () => {
  const createnewclub = useFormik({
    initialValues: {
      club_name: "",
      club_type: "",
      club_cordinator: "",
      description: "",
      created_on: "",
        },
    onSubmit: async (values, action) => {
      console.log(values);
      const res = await fetch("http://localhost:5000/club/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      action.resetForm();
      console.log(res.status);
      if (res.status === 200) {
        toast.success("Club Created Successfully");
      } else {
        toast.error("Failed to create club");
      }
    },
  });

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className=" items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row lg:w-96 md:max-w-xl  dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
          <div >
            <p className="text-center">Create a New Club</p>
          <form onSubmit={createnewclub.handleSubmit}>
              <div className="  justify-between p-4 leading-normal">
                {/* Club Type */}
                <div>
                  <label
                    htmlFor="club_type"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                    >
                    Club Type
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      id="club_type"
                      name="club_type"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      required
                      onChange={createnewclub.handleChange}
                      value={createnewclub.values.club_type}
                    />
                  </div>
                </div>
                {/* Club Name */}
                <div>
                  <label
                    htmlFor="club_name"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Club Name
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      id="club_name"
                      name="club_name"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      required
                      aria-describedby="name-description"
                      onChange={createnewclub.handleChange}
                      value={createnewclub.values.club_name}
                    />
                  </div>
                </div>
                {/* Club Cordinator */}
                <div>
                  <label
                    htmlFor="club_cordinator"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Club Cordinator
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      id="club_cordinator"
                      name="club_cordinator"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      required
                      aria-describedby=""
                      onChange={createnewclub.handleChange}
                      value={createnewclub.values.club_cordinator}
                    />
                  </div>
                </div>
                {/* Club Description */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Description
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      id="description"
                      name="description"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      required
                      aria-describedby="name-description"
                      onChange={createnewclub.handleChange}
                      value={createnewclub.values.description}
                    />
                  </div>
                </div>
                {/* Club creation date */}
                <div className="mt-2">
                  <label
                    htmlFor="name"
                    className=" text-sm font-semibold leading-6 text-gray-900 pr-5 "
                  >
                    Created On :
                  </label>
                  <input 
                    type="date"
                    name="created_on"
                    required
                    aria-describedby="club-creation-date"
                    onChange={createnewclub.handleChange}
                    value={createnewclub.values.created_on}
                 />
                </div>
                <button
                    type="submit"
                    className="block w-full mt-5 rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Create
                  </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateClub;
