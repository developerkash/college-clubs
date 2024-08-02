"use client";
import { useFormik } from "formik";
import React from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const JoinClubForm = () => {
  const router = useRouter();
  const userform = useFormik({
    initialValues: {
      user_name: "",
      user_email: "",
      user_id: "",
    },

    onSubmit: async (values, action) => {
      console.log(values);

      try {
        const res = await fetch("http://localhost:5000/joinclub/add", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });

        if (res.status === 200) {
          const data = await res.json(); // Extract the JSON data from the response
          const userId = data._id; // Ensure the response contains the correct ID

          toast.success("Club joined successfully");
          router.push(`/user/userpage/${userId}`); // Use the correct ID for redirection
          // action.resetForm();
        } else {
          toast.error("Failed to join the club");
        }
      } catch (error) {
        toast.error("An error occurred while joining the club");
        console.error("Error:", error);
      }
    },
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 mt-12">
      <div className="items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row lg:w-96 md:max-w-xl dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <div>
          <p className="text-center">Enter Your Credentials Here to join the Club</p>
          <form onSubmit={userform.handleSubmit}>
            <div className="justify-between p-4 leading-normal">
              {/* User Name */}
              <div>
                <label
                  htmlFor="user_name"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  User Name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    id="user_name"
                    name="user_name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    required
                    onChange={userform.handleChange}
                    value={userform.values.user_name}
                  />
                </div>
              </div>

              {/* User Email  */}
              <div>
                <label
                  htmlFor="user_email"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  E-mail
                </label>
                <div className="mt-2">
                  <input
                    type="email"
                    id="user_email"
                    name="user_email"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    required
                    aria-describedby="user_email"
                    onChange={userform.handleChange}
                    value={userform.values.user_email}
                  />
                </div>
              </div>
              {/* User id  */}
              <div>
                <label
                  htmlFor="user_id"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Student Id
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    id="user_id"
                    name="user_id"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    required
                    aria-describedby="user_id"
                    onChange={userform.handleChange}
                    value={userform.values.user_id}
                  />
                </div>
              </div>

              <button
                type="submit"
                className="block w-full mt-5 rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Join Club
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default JoinClubForm;
