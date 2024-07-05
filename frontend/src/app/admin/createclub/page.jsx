"use client";
import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";



const CreateClub = () => {
    
    const CreateClubValidation = Yup.object().shape({
        clubname: Yup.string().required("Club Name is required"),
        clubtype: Yup.string().required("Club Type is required"),
        description: Yup.string().required("Description is required"),
      });
    
  
    const createnewclub = useFormik({
    initialValues: {
      clubname: "",
      clubtype: "",
      description: "",
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

    },
    validationSchema: CreateClubValidation,
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Create a New Club</h2>
        <form onSubmit={createnewclub.handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Club Name</label>
            <input
              type="text"
              name="clubname"
              id="clubname"
              onChange={createnewclub.handleChange}
              value={createnewclub.values.clubname}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {/* Error message */}
            {createnewclub.touched.clubname && (
              <small className="text-red-500">
                {createnewclub.errors.clubname}
              </small>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Club Type</label>
            <input
              type="text"
              name="clubtype"
              id="clubtype"
              onChange={createnewclub.handleChange}
              value={createnewclub.values.clubtype}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {/* Error message */}
            {createnewclub.touched.clubtype && (
              <small className="text-red-500">
                {createnewclub.errors.clubtype}
              </small>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Description</label>
            <textarea
              name="description"
              id="description"
              onChange={createnewclub.handleChange}
              value={createnewclub.values.description}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            {/* Error message */}
            {createnewclub.touched.description && (
              <small className="text-red-500">
                {createnewclub.errors.description}
              </small>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
          >
            Create Club
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateClub;
