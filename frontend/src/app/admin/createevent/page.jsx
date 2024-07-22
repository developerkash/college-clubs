"use client";
import React from "react";
import { useFormik } from "formik";
import toast from "react-hot-toast";

const EventPage = () => {
  const eventDetails = useFormik({
    initialValues: {

      // Event created for
      category: "",
      club_type: "",  
      club_name: "", 

      // Event Basic Information
      title: "",
      description: "",
      image: null,
      startDate: "",
      endDate: "",

      // Event Location
      venue: "",
      address: "",

      // Registration and Maximum Capacity
      rsvpLink: "",
      maxCapacity: "",

      // Event Organizers and Agenda
      organizers: "",
      agenda: "",

      //Contact Information
      contactEmail: "",
      contactPhone: "",

      //Admin-Specific Fields
      visibility: "Public",
      approvalStatus: "Pending Approval",
      eventStatus: "Active",
      adminNotes: "",
    },
    onSubmit: async (values, action) => {
      console.log(values);

      // Send the data to the backend
      const res = await fetch("http://localhost:5000/event/add",{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      console.log(res.status);
      action.resetForm();
      if (res.status === 200) {
        toast.success("Event created successfully");
      } else {
        toast.error("Failed to create event");
      }
    },
  });

  return (
    <div className="max-w-2xl mt-12 bg-red-100 mx-auto p-6  rounded-lg shadow-md">
      <h2 className="text-2xl text-center font-bold mb-4">Create New Event</h2>
      <form onSubmit={eventDetails.handleSubmit}>
        {/* Event created for */}
        <div className="bg-indigo-50 p-5">
          <h1 className="text-xl font-bold mb-4">Event created for</h1>
          {/* Club Category */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Club Category
            </label>
            <select
              name="category"
              value={eventDetails.values.category}
              onChange={eventDetails.handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            >
              <option value="">Select Category</option>
              <option value="Sports">Sports</option>
              <option value="Academic">Academic</option>
              <option value="Social">Social</option>
            </select>
          </div>
          {/* Club Type */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Club Type
            </label>
            <select
              name="clubType" // Changed the name to clubType
              value={eventDetails.values.club_type}
              onChange={eventDetails.handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            >
              <option value="">Select Type</option>
              <option value="Basketball">Basketball</option>
              <option value="Volleyball">Volleyball</option>
              <option value="Badminton">Badminton</option>
            </select>
          </div>
          {/* Club Name */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Club Name
            </label>
            <input
              type="text"
              name="club_name"
              value={eventDetails.values.club_name}
              onChange={eventDetails.handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              required
            />
          </div>
        </div>

        {/* Event Basic Information */}
        <div className="bg-indigo-50 p-5 mt-5">
          <h1 className="text-xl font-bold mb-4">Event Basic Information</h1>
          {/* Event Title */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Event Title
            </label>
            <input
              type="text"
              name="title"
              value={eventDetails.values.title}
              onChange={eventDetails.handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              required
            />
          </div>
          {/* Event Description */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Event Description
            </label>
            <textarea
              name="description"
              value={eventDetails.values.description}
              onChange={eventDetails.handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              required
            />
          </div>
          {/* Event Banner */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Event Image
            </label>
            <input
              type="file"
              name="image"
              className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
            />
          </div>
          {/* Date and Time */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Start Date and Time
              </label>
              <input
                type="datetime-local"
                name="startDate"
                value={eventDetails.values.startDate}
                onChange={eventDetails.handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                End Date and Time
              </label>
              <input
                type="datetime-local"
                name="endDate"
                value={eventDetails.values.endDate}
                onChange={eventDetails.handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                required
              />
            </div>
          </div>
        </div>

        {/* Event Location */}
        <div className="bg-indigo-50 p-5 mt-5">
          <h1 className="text-xl font-bold mb-4">Event Location</h1>
          {/* Location */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Venue Name
            </label>
            <input
              type="text"
              name="venue"
              value={eventDetails.values.venue}
              onChange={eventDetails.handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Venue Address
            </label>
            <input
              type="text"
              name="address"
              value={eventDetails.values.address}
              onChange={eventDetails.handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
        </div>

        {/* Registration and Maximum Capacity */}
        <div className="bg-indigo-50 p-5 mt-5">
          <h1 className="text-xl font-bold mb-4">
            Registration and Maximum Capacity
          </h1>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              RSVP/Registration Link
            </label>
            <input
              type="url"
              name="rsvpLink"
              value={eventDetails.values.rsvpLink}
              onChange={eventDetails.handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Maximum Capacity
            </label>
            <input
              type="number"
              name="maxCapacity"
              value={eventDetails.values.maxCapacity}
              onChange={eventDetails.handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
        </div>

        {/* Event Organizers and Event Agenda */}
        <div className="bg-indigo-50 p-5 mt-5">
          <h1 className="text-xl font-bold mb-4">Event Organizers and Agenda</h1>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Event Organizers
            </label>
            <input
                type="text"
                name="organizers"
                value={eventDetails.values.organizers}
                onChange={eventDetails.handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            {/* Event Agenda */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Event Agenda
              </label>
              <textarea
                name="agenda"
                value={eventDetails.values.agenda}
                onChange={eventDetails.handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-indigo-50 p-5 mt-5">
            <h1 className="text-xl font-bold mb-4">Contact Information</h1>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Contact Email
              </label>
              <input
                type="email"
                name="contactEmail"
                value={eventDetails.values.contactEmail}
                onChange={eventDetails.handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Contact Phone Number
              </label>
              <input
                type="tel"
                name="contactPhone"
                value={eventDetails.values.contactPhone}
                onChange={eventDetails.handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          {/* Admin-Specific Fields */}
          <div className="bg-indigo-50 p-5 mt-5">
            <h1 className="text-xl font-bold mb-4">Admin-Specific Fields</h1>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Event Visibility
              </label>
              <select
                name="visibility"
                value={eventDetails.values.visibility}
                onChange={eventDetails.handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              >
                <option value="Public">Public</option>
                <option value="Private">Private</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Approval Status
              </label>
              <select
                name="approvalStatus"
                value={eventDetails.values.approvalStatus}
                onChange={eventDetails.handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              >
                <option value="Pending Approval">Pending Approval</option>
                <option value="Approved">Approved</option>
                <option value="Rejected">Rejected</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Event Status
              </label>
              <select
                name="eventStatus"
                value={eventDetails.values.eventStatus}
                onChange={eventDetails.handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              >
                <option value="Active">Active</option>
                <option value="Cancelled">Cancelled</option>
                <option value="Completed">Completed</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Admin Notes
              </label>
              <textarea
                name="adminNotes"
                value={eventDetails.values.adminNotes}
                onChange={eventDetails.handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          {/* Submit */}
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="inline-flex mt-5 justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Create Event
            </button>
          </div>
        </form>
      </div>
    
  );
};

export default EventPage;

