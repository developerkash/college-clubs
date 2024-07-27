"use client";
import { useFormik } from "formik";
import React from "react";
import toast from "react-hot-toast";

const CreateAnnouncementsPage = () => {
  const announcements = useFormik({
    initialValues: {
      title: "",
      message: "",
      created_on: "",
    },
    onSubmit: async (values, action) => {
      console.log(values);
      const res = await fetch("http://localhost:5000/announcements/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
    //   action.resetForm();
      console.log(res.status);
      if (res.status === 200) {
        toast.success("Announcement Created Successfully");
      } else {
        toast.error("Failed to create Announcement");
      }
    },
  });


  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className=" items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row lg:w-96 md:max-w-xl  dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
          <div>
            <p className="text-center">Create a New Announcements</p>
            <form onSubmit={announcements.handleSubmit}>
              <div className="  justify-between p-4 leading-normal">

                {/* Announcements Title */}
                <div>
                  <label
                    htmlFor="Announce"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Title
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      id="Announce"
                      name="title"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      required
                      onChange={announcements.handleChange}
                      value={announcements.values.title}
                    />
                  </div>
                </div>
                {/* Announcements Description */}
                <div>
                  <label
                    htmlFor="Message"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Message
                  </label>
                  <div className="mt-2">
                    <textarea
                      type="textarea"
                      id="Message"
                      name="message"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      required
                      aria-describedby="name-message"
                      onChange={announcements.handleChange}
                      value={announcements.values.message}
                    />
                  </div>
                </div>
                {/* Announcements creation date */}
                <div className="mt-2">
                  <label
                    htmlFor="created_on"
                    className=" text-sm font-semibold leading-6 text-gray-900 pr-5 "
                  >
                    Created On :
                  </label>
                  <input
                    type="date"
                    name="created_on"
                    id="created_on"
                    required
                    aria-describedby="club-creation-date"
                    onChange={announcements.handleChange}
                    value={announcements.values.created_on}
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

export default CreateAnnouncementsPage;
