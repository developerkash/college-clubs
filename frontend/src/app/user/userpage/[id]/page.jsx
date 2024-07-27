"user client";
import React from "react";
import Link from "next/link";

const UserPage = () => {
  return (
    <div>
      <div className="bg-amber-100  py-8">
        <div className="max-w-12xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-row text-center justify-between bg-white">
            <div className="w-1/4">
              <div className="">
                <h1 className="text-xl  font-semibold">Club Category</h1>
              </div>
              <div className="text-lg font-semibold">
                Club Category name
              </div>
            </div>
            <div className="w-1/4">
              <div className="">
                <h1 className="text-xl font-semibold">Club Type</h1>
              </div>
              <div className="text-lg font-semibold">
              Club Type name 
              </div>
            </div>
            <div className="w-1/4">
              <div className="">
                <h1 className="text-xl font-semibold">Club Name</h1>
              </div>
              <div className="text-lg font-semibold">Club Name dispaly</div>
            </div>
            <div className="w-1/4">
              <div className="flex justify-end m-2 gap-2">
                <button
                  type="button"
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg "
                >
                  <Link
                    href="#"
                    className="text-white  text-sm font-semibold"
                  >
                    Create Event
                  </Link>
                </button>
                <button
                  type="button"
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg "
                >
                  <Link
                    href="#"
                    className="text-white  text-sm font-semibold"
                  >
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
                src="../image2.jpg"
                alt="Event 2"
                className="w-full h-full object-cover"
              />
              <img
                src="../image3.jpg"
                alt="Event 3"
                className="w-full h-full object-cover"
              />
              {/* Add more images/videos as needed */}
            </div>
          </section>

          {/* Activities and Events */}
          <section id="gallery" className="my-8 ">
            <h2 className="text-2xl font-bold mb-4">Activities and Events</h2>
            <div className="flex flex-row justify-between  gap-4">
              <div className=" w-1/3 bg-white p-4">
                <h3 className="text-xl font-semibold mb-2">Regular Meetings</h3>
                <p>
                  We hold regular meetings every Thursday at 5:00 PM in Room
                  101, Science Building. Join us for engaging discussions,
                  hands-on experiments, and collaborative projects.
                </p>
              </div>

              <div className=" w-1/3 bg-white p-4">
                <h3 className="text-xl font-semibold mb-2">Upcoming Events</h3>
                <ul className="list-disc pl-6">
                  <li className="mb-2">
                    <strong>Science Fair Prep Workshop:</strong>

                    <div className="flex flex-row justify-between text-sm">
                      <div>July 20, 2024,</div>
                      <div>3:00 PM - 5:00 PM</div>
                      <div>Lab 202.</div>
                    </div>
                  </li>
                  <li className="mb-2">
                    <strong>Guest Lecture by Dr. Jane Doe:</strong>

                    <div className="flex flex-row justify-between text-sm">
                      <div>August 5, 2024</div>
                      <div>4:00 PM - 6:00 PM</div>
                      <div>Auditorium</div>
                    </div>
                  </li>
                  <li className="mb-2">
                    <strong>Field Trip to Science Museum:</strong>

                    <div className="flex flex-row justify-between text-sm">
                      <div>September 5, 2024</div>
                      <div>9:00 AM - 3:00 PM</div>
                      <div>Science City</div>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="w-1/3 bg-white p-4">
                <h3 className="text-xl font-semibold mb-2">Past Events</h3>
                <ul className="list-disc pl-6">
                  <li>
                    <strong>Annual Science Exhibition:</strong>
                    <div>
                      Held on April 15, 2024, showcased innovative projects by
                      club members.
                    </div>
                  </li>
                  <li>
                    <strong>Workshop on Renewable Energy:</strong>
                    <div>
                      Conducted on May 10, 2024, focused on sustainable energy
                      solutions.
                    </div>
                  </li>
                  <li>
                    <strong>Science Quiz Competition:</strong>{" "}
                    <div>
                      June 5, 2024, tested members' knowledge in various
                      scientific fields.
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Membership Requirments and fees */}
          <section id="gallery" className="my-8">
            <h2 className="text-2xl font-bold mb-4">Membership</h2>

            <div className="flex flex-row justify-between gap-4">
              <div className="mb-6 p-4 bg-white w-2/3">
                <h3 className="text-xl font-semibold mb-2">
                  Membership Requirements
                </h3>
                <ul className="list-disc pl-6">
                  <li>
                    <strong>Open to All Students:</strong>
                    <div>
                      Any student with a passion for science is welcome to join,
                      regardless of their major.
                    </div>
                  </li>
                  <li>
                    <strong> Introductory Meeting:</strong>
                    <div>
                      New members must attend at least one introductory meeting
                      to get acquainted with the club's activities and
                      expectations.
                    </div>
                  </li>
                  <li>
                    <strong>Active Participation:</strong>
                    <div>
                      Members are encouraged to actively participate in club
                      events, projects, and meetings.
                    </div>
                  </li>
                  <li>
                    <strong>No Prior Experience Needed:</strong>
                    <div>
                      We welcome all curious minds and enthusiastic learners, no
                      prior scientific research experience required.
                    </div>
                  </li>
                </ul>
              </div>
              <div className="mb-6 p-4 bg-white w-1/3">
                <h3 className="text-xl font-semibold mb-2">Membership Fees</h3>
                <ul className="list-disc pl-6">
                  <li>
                    <strong>Semester Fee:</strong>
                    <div>
                      {" "}
                      $20 per semester. This fee covers materials for
                      experiments, workshops, and guest lectures.
                    </div>
                  </li>
                  <li>
                    <strong>Additional Costs:</strong>
                    <div>
                      {" "}
                      There may be extra costs for optional trips and special
                      events. Fundraising opportunities will be available to
                      help offset these expenses.
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Leadership and Contact Information */}
          <section id="gallery" className="my-8">
            <h2 className="text-2xl font-bold mb-4">
              Leadership and Contact Information
            </h2>
            <div className="flex flex-row justify-between  gap-4 ">
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
                <div>
                  <strong className="italic underline">President</strong>
                  <p>
                    <strong>Email:</strong> scienceclub@example.com
                  </p>
                  <p>
                    <strong>Phone:</strong> (123) 456-7890
                  </p>
                </div>

                <div>
                  <strong className="italic underline">Vice President</strong>
                  <p>
                    <strong>Email:</strong> scienceclub@example.com
                  </p>
                  <p>
                    <strong>Phone:</strong> (123) 456-7890
                  </p>
                </div>
              </div>

              <div className="w-1/4 bg-white mb-6 p-3">
                <h3 className="text-xl font-semibold mb-2">Website</h3>
                <p>
                  <a
                    href="https://www.scienceclubwebsite.com"
                    target="_blank"
                    className="text-blue-500"
                  >
                    www.scienceclubwebsite.com
                  </a>
                </p>

                <p className="mt-2">
                  <strong>Follow us on Social Media:</strong>
                </p>
                <ul className="list-disc pl-6">
                  <li>
                    <strong>Facebook:</strong>{" "}
                    <a
                      href="https://facebook.com/scienceclub"
                      target="_blank"
                      className="text-blue-500"
                    >
                      facebook.com/scienceclub
                    </a>
                  </li>
                  <li>
                    <strong>Twitter:</strong>{" "}
                    <a
                      href="https://twitter.com/scienceclub"
                      target="_blank"
                      className="text-blue-500"
                    >
                      @scienceclub
                    </a>
                  </li>
                  <li>
                    <strong>Instagram:</strong>{" "}
                    <a
                      href="https://instagram.com/scienceclub"
                      target="_blank"
                      className="text-blue-500"
                    >
                      @scienceclub
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* description and overview */}
          <div className=" flex flex-col md:flex-row -mx-4 mt-2">
            <div className="fixed-0 overflow-auto  h-[460px] bg-gray-50">
              <div className=" px-4">
                <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                  Description
                </h1>
                <p>Show Description</p>
              </div>
              <div className=" px-4">
                <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                  Vission
                </h1>
                <p>Show</p>
              </div>
              <div className=" px-4">
                <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                  Mission
                </h1>
                <p>
                  The Science Club is dedicated to fostering a deep appreciation
                  and understanding of science among students through hands-on
                  exploration, collaborative learning, and community engagement.{" "}
                  <b>Our mission is to:</b>
                  <ul>
                    <li>
                      {" "}
                      <b>Inspire Curiosity:</b> Spark interest in science by
                      providing engaging and interactive learning experiences.
                    </li>
                    <li>
                      {" "}
                      <b>Promote Innovation:</b> Encourage creativity and
                      innovation through experimental projects and scientific
                      research.
                    </li>
                    <li>
                      {" "}
                      <b>Cultivate Leadership:</b> Develop leadership skills and
                      teamwork among members through organizing events and
                      participating in competitions.
                    </li>
                    <li>
                      {" "}
                      <b>Advance Knowledge:</b> Foster a culture of continuous
                      learning and academic excellence through workshops,
                      lectures, and discussions.
                    </li>
                    <li>
                      {" "}
                      <b>Serve the Community:</b> Contribute to society by
                      promoting science education and awareness through outreach
                      programs and initiatives.
                    </li>
                  </ul>
                  <p className="mt-5">
                    {" "}
                    By pursuing these objectives, we aim to empower future
                    scientists, engineers, and innovators who will drive
                    positive change and contribute to the advancement ofscience
                    and technology.
                  </p>
                </p>
              </div>
              <div className=" px-4">
                <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                  History
                </h1>
                <p>history</p>
              </div>
            </div>
          </div>

          {/* Testimonials */}

          <section id="testimonials" className="my-8 bg-white">
            <h2 className="text-3xl font-bold mb-4">Testimonials</h2>
            <div className="space-y-4">
              <blockquote className="p-4 border-l-4 border-blue-500">
                <p>
                  "Being a part of the Science Club has been a transformative
                  experience. The hands-on projects and engaging discussions
                  have deepened my understanding of science." - Alex J.
                </p>
              </blockquote>
              <blockquote className="p-4 border-l-4 border-blue-500">
                <p>
                  "The Science Club has given me the opportunity to collaborate
                  with like-minded individuals and work on exciting research
                  projects." - Taylor R.
                </p>
              </blockquote>
              {/* Add more testimonials as needed */}
            </div>
          </section>

          {/* Resources */}
          <section id="resources" className="my-8 bg-white p-4">
            <h2 className="text-3xl font-bold mb-4">Resources</h2>
            <ul className="list-disc pl-6">
              <li>
                <a
                  href="study-guide.pdf"
                  className="text-blue-600 hover:underline"
                >
                  Study Guide
                </a>
              </li>
              <li>
                <a
                  href="workshop-materials.zip"
                  className="text-blue-600 hover:underline"
                >
                  Workshop Materials
                </a>
              </li>
              <li>
                <a
                  href="research-papers.pdf"
                  className="text-blue-600 hover:underline"
                >
                  Research Papers
                </a>
              </li>
              {/* Add more resources as needed */}
            </ul>
          </section>

          {/* FAQs */}
          <section id="faqs" className="my-8 bg-white p-4">
            <h2 className="text-3xl font-bold mb-4">FAQs</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold">What is the Science Club?</h3>
                <p>
                  The Science Club is a student organization dedicated to
                  promoting scientific curiosity and knowledge through hands-on
                  activities, workshops, and collaborative projects.
                </p>
              </div>
              <div>
                <h3 className="font-semibold">
                  Who can join the Science Club?
                </h3>
                <p>
                  Any student with an interest in science is welcome to join the
                  Science Club, regardless of their major or background.
                </p>
              </div>
              <div>
                <h3 className="font-semibold">
                  What activities does the Science Club offer?
                </h3>
                <p>
                  We offer a variety of activities including workshops, guest
                  lectures, research projects, science fairs, and community
                  outreach programs.
                </p>
              </div>
              {/* Add more FAQs as needed */}
            </div>
          </section>

<div>
          {/* <div>
            <h2 className="text-3xl font-bold mb-4">Club Details</h2>
            <ul
              className=" flex list-none flex-col flex-wrap ps-0 md:flex-row"
              role="tablist"
            >
              <li role="presentation" className="flex-grow basis-0 text-center">
                <a
                  href="#pills-home02"
                  className={`my-2 block rounded px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 
        ${activeTab === "home" ? "bg-indigo-500 text-white" : "bg-red-100"} 
        dark:bg-neutral-700 dark:text-white/50 
        ${
          activeTab === "home" ? "dark:bg-slate-900 dark:text-primary-500" : ""
        } 
        md:me-4`}
                  id="pills-home-tab02"
                  onClick={() => handleTabClick("home")}
                  role="tab"
                  aria-controls="pills-home02"
                  aria-selected={activeTab === "home"}
                >
                  Description
                </a>
              </li>
              <li role="presentation" className="flex-grow basis-0 text-center">
                <a
                  href="#pills-profile02"
                  className={`my-2 block rounded px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 
        ${
          activeTab === "profile"
            ? "bg-primary-100 text-primary-700"
            : "bg-zinc-100"
        } 
        dark:bg-neutral-700 dark:text-white/50 
        ${
          activeTab === "profile"
            ? "dark:bg-slate-900 dark:text-primary-500"
            : ""
        } 
        md:me-4`}
                  id="pills-profile-tab02"
                  onClick={() => handleTabClick("profile")}
                  role="tab"
                  aria-controls="pills-profile02"
                  aria-selected={activeTab === "profile"}
                >
                  Vision
                </a>
              </li>
              <li role="presentation" className="flex-grow basis-0 text-center">
                <a
                  href="#pills-contact02"
                  className={`my-2 block rounded px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 
        ${
          activeTab === "contact"
            ? "bg-primary-100 text-primary-700"
            : "bg-zinc-100"
        } 
        dark:bg-neutral-700 dark:text-white/50 
        ${
          activeTab === "contact"
            ? "dark:bg-slate-900 dark:text-primary-500"
            : ""
        } 
        md:me-4`}
                  id="pills-contact-tab02"
                  onClick={() => handleTabClick("contact")}
                  role="tab"
                  aria-controls="pills-contact02"
                  aria-selected={activeTab === "contact"}
                >
                  Mission
                </a>
              </li>
              <li role="presentation" className="flex-grow basis-0 text-center">
                <a
                  href="#pills-contact02"
                  className={`my-2 block rounded px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 
        ${
          activeTab === "contact"
            ? "bg-primary-100 text-primary-700"
            : "bg-zinc-100"
        } 
        dark:bg-neutral-700 dark:text-white/50 
        ${
          activeTab === "contact"
            ? "dark:bg-slate-900 dark:text-primary-500"
            : ""
        } 
        md:me-4`}
                  id="pills-contact-tab02"
                  onClick={() => handleTabClick("contact")}
                  role="tab"
                  aria-controls="pills-contact02"
                  aria-selected={activeTab === "contact"}
                >
                  History
                </a>
              </li>
            </ul>
            <div className="mb-6">
              <div
                className={`transition-opacity duration-150 ease-linear ${
                  activeTab === "home"
                    ? "block opacity-100"
                    : "hidden opacity-0"
                }`}
                id="pills-home02"
                role="tabpanel"
                aria-labelledby="pills-home-tab02"
              >
                <div className=" px-4 bg-white">
                  <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                    Description
                  </h1>
                  <p>{clubData.description}</p>
                </div>{" "}
              </div>
              <div
                className={`transition-opacity duration-150 ease-linear ${
                  activeTab === "profile"
                    ? "block opacity-100"
                    : "hidden opacity-0"
                }`}
                id="pills-profile02"
                role="tabpanel"
                aria-labelledby="pills-profile-tab02"
              >
                <div className=" px-4">
                  <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                    Vission
                  </h1>
                  <p>{clubData.description}</p>
                </div>{" "}
              </div>
              <div
                className={`transition-opacity duration-150 ease-linear ${
                  activeTab === "contact"
                    ? "block opacity-100"
                    : "hidden opacity-0"
                }`}
                id="pills-contact02"
                role="tabpanel"
                aria-labelledby="pills-contact-tab02"
              >
                <div className=" px-4 bg-white">
                  <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                    Mission
                  </h1>
                  <p>
                    The Science Club is dedicated to fostering a deep
                    appreciation and understanding of science among students
                    through hands-on exploration, collaborative learning, and
                    community engagement. <b>Our mission is to:</b>
                    <ul>
                      <li>
                        {" "}
                        <b>Inspire Curiosity:</b> Spark interest in science by
                        providing engaging and interactive learning experiences.
                      </li>
                      <li>
                        {" "}
                        <b>Promote Innovation:</b> Encourage creativity and
                        innovation through experimental projects and scientific
                        research.
                      </li>
                      <li>
                        {" "}
                        <b>Cultivate Leadership:</b> Develop leadership skills
                        and teamwork among members through organizing events and
                        participating in competitions.
                      </li>
                      <li>
                        {" "}
                        <b>Advance Knowledge:</b> Foster a culture of continuous
                        learning and academic excellence through workshops,
                        lectures, and discussions.
                      </li>
                      <li>
                        {" "}
                        <b>Serve the Community:</b> Contribute to society by
                        promoting science education and awareness through
                        outreach programs and initiatives.
                      </li>
                    </ul>
                    <p className="mt-5">
                      {" "}
                      By pursuing these objectives, we aim to empower future
                      scientists, engineers, and innovators who will drive
                      positive change and contribute to the advancement
                      ofscience and technology.
                    </p>
                  </p>
                </div>
              </div>
              <div
                className={`transition-opacity duration-150 ease-linear ${
                  activeTab === "disabled"
                    ? "block opacity-100"
                    : "hidden opacity-0"
                }`}
                id="pills-disabled02"
                role="tabpanel"
                aria-labelledby="pills-disabled-tab02"
              >
                <div className=" px-4">
                  <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                    History
                  </h1>
                  <p>{clubData.description}</p>
                </div>
              </div>
            </div>
          </div> */}
</div>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
