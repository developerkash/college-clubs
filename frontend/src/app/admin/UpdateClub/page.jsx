import { Formik } from "formik";
import React from "react";
import toast from "react-hot-toast";

const UpdateClub = ({ clubData, fetchclubData }) => {
  const userSubmit = async (formdata) => {
    console.log(formdata);

    const res = await fetch(
      "http://localhost:5000/club/update/" + formdata._id,
      {
        method: "PUT",
        body: JSON.stringify(formdata),
        headers: { "Content-Type": "application/json" },
      }
    );

    console.log(res.status);
    if (res.status === 200) {
      toast.success("Club updated successfully");
      fetchclubData();
    } else {
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="vh-100">
      <div className="col-md-10 mx-auto">
        <div className="card">
          <div className="card-body">
            <h3>Club Update Form</h3>

            <Formik initialValues={clubData} onSubmit={userSubmit}>
              {({ values, handleChange, handleSubmit }) => (
                <form onSubmit={handleSubmit}>
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
                          onChange={handleChange}
                          value={values.club_type}
                        />
                      </div>
                    </div>
                    {/* Club subType */}
                    <div>
                      <label
                        htmlFor="club_subtype"
                        className="block text-sm font-semibold leading-6 text-gray-900"
                      >
                        Club Sub-Type
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          id="club_subtype"
                          name="club_subtype"
                          className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          required
                          onChange={handleChange}
                          value={values.club_subtype}
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
                          onChange={handleChange}
                          value={values.club_name}
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
                          onChange={handleChange}
                          value={values.club_cordinator}
                        />
                      </div>
                    </div>
                    {/* Club Description */}
                    <div>
                      <label
                        htmlFor="description"
                        className="block text-sm font-semibold leading-6 text-gray-900"
                      >
                        Description
                      </label>
                      <div className="mt-2">
                        <textarea
                          type="text"
                          id="description"
                          name="description"
                          className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          required
                          aria-describedby="name-description"
                          onChange={handleChange}
                          value={values.description}
                        />
                      </div>
                    </div>
                    {/* Club creation date */}
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
                        onChange={handleChange}
                        value={values.created_on}
                      />
                    </div>
                    {/* <div className="mt-2">
                    <label
                      htmlFor="image"
                      className=" text-sm font-semibold leading-6 text-gray-900 pr-5 "
                    >
                      Upload File
                    </label>
                    <input
                      type="file"
                      name="image"
                      id="image"
                      required
                      aria-describedby="file_upload_details"
                      onChange={uploadFile}
                    />
                  </div> */}

                    <button
                      type="submit"
                      className="block w-full mt-5 rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Update
                    </button>
                  </div>
                </form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateClub;
