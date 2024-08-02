"use client";
import React from "react";
import Link from "next/link";

const UserPage = () => {
  return (
    <div className="mt-16">
      <div className="bg-amber-100 py-8 mt-16">
        <div className="max-w-12xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-row text-center justify-between bg-white">
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
                  <Link href="#" className="text-white text-sm font-semibold">
                    Create Event
                  </Link>
                </button>
                <button
                  type="button"
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                >
                  <Link href="#" className="text-white text-sm font-semibold">
                    Make Announcement
                  </Link>
                </button>
              </div>
            </div>
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
              <div className="w-1/3 bg-white p-4">
                <h3 className="text-xl font-semibold mb-2">Regular Meetings</h3>
                <p>
                  We hold regular meetings every Thursday at 5:00 PM in Room 101, Science Building. Join us for engaging discussions, hands-on experiments, and collaborative projects.
                </p>
              </div>

              <div className="w-1/3 bg-white p-4">
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

              <div className="w-1/3 bg-white p-4">
                <h3 className="text-xl font-semibold mb-2">Past Events</h3>
                <ul className="list-disc pl-6">
                  <li>
                    <strong>Annual Science Exhibition:</strong>
                    <span> Held on April 15, 2024, showcased innovative projects by club members.</span>
                  </li>
                  <li>
                    <strong>Workshop on Renewable Energy:</strong>
                    <span> Conducted on May 10, 2024, focused on sustainable energy solutions.</span>
                  </li>
                  <li>
                    <strong>Science Quiz Competition:</strong>
                    <span> June 5, 2024, tested members' knowledge in various scientific fields.</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Membership Requirements and Fees */}
          <section id="membership" className="my-8">
            <h2 className="text-2xl font-bold mb-4">Membership</h2>
            <div className="flex flex-row justify-between gap-4">
              <div className="mb-6 p-4 bg-white w-2/3">
                <h3 className="text-xl font-semibold mb-2">Membership Requirements</h3>
                <ul className="list-disc pl-6">
                  <li>
                    <strong>Open to All Students:</strong>
                    <span> Any student with a passion for science is welcome to join, regardless of their major.</span>
                  </li>
                  <li>
                    <strong>Introductory Meeting:</strong>
                    <span> New members must attend at least one introductory meeting to get acquainted with the club's activities and expectations.</span>
                  </li>
                  <li>
                    <strong>Active Participation:</strong>
                    <span> Members are encouraged to actively participate in club events, projects, and meetings.</span>
                  </li>
                  <li>
                    <strong>No Prior Experience Needed:</strong>
                    <span> We welcome all curious minds and enthusiastic learners, no prior scientific research experience required.</span>
                  </li>
                </ul>
              </div>
              <div className="mb-6 p-4 bg-white w-1/3">
                <h3 className="text-xl font-semibold mb-2">Membership Fees</h3>
                <ul className="list-disc pl-6">
                  <li>
                    <strong>Semester Fee:</strong>
                    <span> $20 per semester. This fee covers materials for experiments, workshops, and guest lectures.</span>
                  </li>
                  <li>
                    <strong>Additional Costs:</strong>
                    <span> There may be extra costs for optional trips and special events. Fundraising opportunities will be available to help offset these expenses.</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Leadership and Contact Information */}
          <section id="leadership" className="my-8">
            <h2 className="text-2xl font-bold mb-4">Leadership and Contact Information</h2>
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
                  <strong>Dr. Morgan Smith</strong>, Professor of Physics, Science Department
                </p>
              </div>
              <div className="mb-6 w-1/4 bg-white p-3">
                <h3 className="text-xl font-semibold mb-2">Contact Information</h3>
                <p>
                  <strong>Email:</strong> sciclub@example.com
                </p>
                <p>
                  <strong>Follow Us:</strong> Instagram @sciclub and Twitter @sci_club
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
