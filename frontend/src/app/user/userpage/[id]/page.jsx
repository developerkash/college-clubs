"use client";
import React from "react";
import Link from "next/link";

const UserPage = () => {
  return (
    <div className="mt-12">
      <div className="bg-amber-100 py-8 ">
        <div className="max-w-12xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white mt-16 ">
            <h1 className="text-8xl font-bold text-center  p-5 bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400  text-transparent bg-clip-text">
              "Welcome to Science Club!"
            </h1>
            <h1 className="text-3xl font-bold text-center  p-5 bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400  text-transparent bg-clip-text">
              "We are Happy to See You Here."
            </h1>
          </div>
          <div>
          {/* <div className="flex flex-row text-center justify-between bg-white mt-5">
            <div className="w-1/4">
              <div className="">
                <h1 className="text-xl font-semibold">Club Category</h1>
              </div>
              <div className="text-lg font-semibold">Club Category name</div>
            </div>
            <div className="w-1/4">
              <div className="">
                <h1 className="text-xl font-semibold">Club Type</h1>
              </div>
              <div className="text-lg font-semibold">Club Type name</div>
            </div>
            <div className="w-1/4">
              <div className="">
                <h1 className="text-xl font-semibold">Club Name</h1>
              </div>
              <div className="text-lg font-semibold">Club Name display</div>
            </div>
            <div className="w-1/4">
              <div className="flex justify-end m-2 gap-2">
                <button
                  type="button"
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                >
                  <Link
                    href="/user/CreateEvent"
                    className="text-white text-sm font-semibold"
                  >
                    Create Event
                  </Link>
                </button>
                <button
                  type="button"
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                >
                  <Link
                    href="/user/CreateAnnouncements"
                    className="text-white text-sm font-semibold"
                  >
                    Make Announcement
                  </Link>
                </button>
              </div>
            </div>
          </div> */}
          </div>
          {/* Gallery */}
          <section id="gallery" className="my-8 bg-white">
            <h2 className="text-3xl font-bold mb-4">Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
              <img
                src="../../image1.jpg"
                alt="Event 1"
                className="w-full h-full object-cover"
              />
              <img
                src="../../image2.jpg"
                alt="Event 2"
                className="w-full h-full object-cover"
              />
              <img
                src="../../image3.jpg"
                alt="Event 3"
                className="w-full h-full object-cover"
              />
              {/* Add more images/videos as needed */}
            </div>
          </section>

          {/* Activities and Events */}
          <section id="activities" className="my-8">
            <h2 className="text-2xl font-bold mb-4">Activities and Events</h2>
            <div className="flex flex-row justify-between gap-4">
              <div className="w-1/2 bg-white p-4">
                <h3 className="text-xl font-semibold mb-2">Upcoming Events</h3>
                <ul className="list-disc pl-6">
                  <li className="mb-2">
                    <strong>Science Fair Prep Workshop:</strong>
                    <div className="flex flex-row justify-between text-sm">
                      <span>July 20, 2024,</span>
                      <span>3:00 PM - 5:00 PM</span>
                      <span>Lab 202.</span>
                    </div>
                  </li>
                  <li className="mb-2">
                    <strong>Guest Lecture by Dr. Jane Doe:</strong>
                    <div className="flex flex-row justify-between text-sm">
                      <span>August 5, 2024</span>
                      <span>4:00 PM - 6:00 PM</span>
                      <span>Auditorium</span>
                    </div>
                  </li>
                  <li className="mb-2">
                    <strong>Field Trip to Science Museum:</strong>
                    <div className="flex flex-row justify-between text-sm">
                      <span>September 5, 2024</span>
                      <span>9:00 AM - 3:00 PM</span>
                      <span>Science City</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Leadership and Contact Information */}
          <section id="leadership" className="my-8">
            <h2 className="text-2xl font-bold mb-4">
              Leadership and Contact Information
            </h2>
            <div className="flex flex-row justify-between gap-4">
              <div className="mb-6 w-1/4 bg-white p-3">
                <h3 className="text-xl font-semibold mb-2">Leadership Team</h3>
                <ul className="list-disc pl-6">
                  <li>
                    <strong>President:</strong> Alex Johnson
                  </li>
                  <li>
                    <strong>Vice President:</strong> Jamie Lee
                  </li>
                  <li>
                    <strong>Treasurer:</strong> Sam Patel
                  </li>
                  <li>
                    <strong>Secretary:</strong> Taylor Kim
                  </li>
                </ul>
              </div>
              <div className="mb-6 w-1/4 bg-white p-3">
                <h3 className="text-xl font-semibold mb-2">Advisor</h3>
                <p>
                  <strong>Dr. Morgan Smith</strong>, Professor of Physics,
                  Science Department
                </p>
              </div>
              <div className="mb-6 w-1/4 bg-white p-3">
                <h3 className="text-xl font-semibold mb-2">
                  Contact Information
                </h3>
                <p>
                  <strong>Email:</strong> sciclub@example.com
                </p>
                <p>
                  <strong>Follow Us:</strong> Instagram @sciclub and Twitter
                  @sci_club
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
