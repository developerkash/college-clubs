"use client";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const ViewClub = () => {
  const { id } = useParams();
  const [clubData, setclubData] = useState([]);

  const fetchClubs = () => {
    fetch("http://localhost:5000/club/getbyid/" + id)
      .then((response) => {
        console.log(response.status);
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setclubData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchClubs();
  }, []);

  const displayClub = (club) => {
    if (clubData !== null) {
      return (
        <div>
          <div className="bg-amber-400  py-8">
            <div className="max-w-12xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-row text-center justify-between bg-white">
                <div className="w-1/4">
                  <div className="">
                    <h1 className="text-xl  font-semibold">Club Category</h1>
                  </div>
                  <div className="text-lg font-semibold">
                    {clubData.club_type}
                  </div>
                </div>
                <div className="w-1/4">
                  <div className="">
                    <h1 className="text-xl font-semibold">Club Type</h1>
                  </div>
                  <div className="text-lg font-semibold">
                    {clubData.club_subtype}
                  </div>
                </div>
                <div className="w-1/4">
                  <div className="">
                    <h1 className="text-xl font-semibold">Club Name</h1>
                  </div>
                  <div className="text-lg font-semibold">
                    {clubData.club_name}
                  </div>
                </div>
                <div className="w-1/4">
                  <div className="flex justify-end m-2">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-lg ">
                      Join Club
                    </button>
                  </div>
                </div>
              </div>

              <div className=" flex flex-col md:flex-row -mx-4 mt-2">
                <div className="w-1/3 px-4">
                  <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                    <img
                      className="w-full h-full object-cover"
                      src="https://cdn.pixabay.com/photo/2020/05/22/17/53/mockup-5206355_960_720.jpg"
                      alt="Product Image"
                    />
                  </div>
                </div>

                <div className="fixed-0 overflow-auto w-2/3 h-[460px] bg-gray-50">
                  <div className=" px-4">
                    <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                      Description
                    </h1>
                    <p>{clubData.description}</p>
                  </div>
                  <div className=" px-4">
                    <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                      Vission
                    </h1>
                    <p>{clubData.description}</p>
                  </div>
                  <div className=" px-4">
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
                          providing engaging and interactive learning
                          experiences.
                        </li>
                        <li>
                          {" "}
                          <b>Promote Innovation:</b> Encourage creativity and
                          innovation through experimental projects and
                          scientific research.
                        </li>
                        <li>
                          {" "}
                          <b>Cultivate Leadership:</b> Develop leadership skills
                          and teamwork among members through organizing events
                          and participating in competitions.
                        </li>
                        <li>
                          {" "}
                          <b>Advance Knowledge:</b> Foster a culture of
                          continuous learning and academic excellence through
                          workshops, lectures, and discussions.
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
                  <div className=" px-4">
                    <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                      History
                    </h1>
                    <p>{clubData.description}</p>
                  </div>
                </div>
              </div>

              {/* Membership Requirments and fees */}
              <section id="gallery" className="my-8 bg-gray-50">
                  <h2 className="text-2xl font-bold mb-4">Membership</h2>

                <div className="flex flex-row justify-between">

                  <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-2">
                      Membership Requirements
                    </h3>
                    <ul className="list-disc pl-6">
                      <li>
                        Open to All Students: Any student with a passion for
                        science is welcome to join, regardless of their major.
                      </li>
                      <li>
                        Introductory Meeting: New members must attend at least
                        one introductory meeting to get acquainted with the
                        club's activities and expectations.
                      </li>
                      <li>
                        Active Participation: Members are encouraged to actively
                        participate in club events, projects, and meetings.
                      </li>
                      <li>
                        No Prior Experience Needed: We welcome all curious minds
                        and enthusiastic learners, no prior scientific research
                        experience required.
                      </li>
                    </ul>
                  </div>
                  <div className="inline-block h-[250px] min-h-[1em] w-0.5 self-stretch bg-gray-400 space-x- dark:bg-white/10"></div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Membership Fees
                    </h3>
                    <ul className="list-disc pl-6">
                      <li>
                        Semester Fee: $20 per semester. This fee covers
                        materials for experiments, workshops, and guest
                        lectures.
                      </li>
                      <li>
                        Additional Costs: There may be extra costs for optional
                        trips and special events. Fundraising opportunities will
                        be available to help offset these expenses.
                      </li>
                    </ul>
                  </div>

                </div>
              </section>

              {/* Activities and Events */}
              <section id="gallery" className="my-8 bg-gray-50">
                  <h2 className="text-2xl font-bold mb-4">
                    Activities and Events
                  </h2>
                <div className="flex flex-row justify-between ">

                  <div className="mb-6 w-1/3">
                    <h3 className="text-xl font-semibold mb-2">
                      Regular Meetings
                    </h3>
                    <p>
                      We hold regular meetings every Thursday at 5:00 PM in Room
                      101, Science Building. Join us for engaging discussions,
                      hands-on experiments, and collaborative projects.
                    </p>
                  </div>

                  <div className="mb-6 w-1/3">
                    <h3 className="text-xl font-semibold mb-2">
                      Upcoming Events
                    </h3>
                    <ul className="list-disc pl-6">
                      <li>
                        <strong>Science Fair Prep Workshop:</strong> July 20,
                        2024, 3:00 PM - 5:00 PM, Lab 202.
                      </li>
                      <li>
                        <strong>Guest Lecture by Dr. Jane Doe:</strong> August
                        5, 2024, 4:00 PM - 6:00 PM, Auditorium.
                      </li>
                      <li>
                        <strong>Field Trip to Science Museum:</strong> September
                        10, 2024, 9:00 AM - 3:00 PM.
                      </li>
                    </ul>
                  </div>

                  <div className="w-1/3">
                    <h3 className="text-xl font-semibold mb-2">Past Events</h3>
                    <ul className="list-disc pl-6">
                      <li>
                        <strong>Annual Science Exhibition:</strong> Held on
                        April 15, 2024, showcased innovative projects by club
                        members.
                      </li>
                      <li>
                        <strong>Workshop on Renewable Energy:</strong> Conducted
                        on May 10, 2024, focused on sustainable energy
                        solutions.
                      </li>
                      <li>
                        <strong>Science Quiz Competition:</strong> June 5, 2024,
                        tested members' knowledge in various scientific fields.
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Leadership and Contact Information */}
              <section id="gallery" className="my-8 bg-gray-50">
                  <h2 className="text-2xl font-bold mb-4">
                    Leadership and Contact Information
                  </h2>
                  <div className="flex flex-row justify-between ">
                    <div className="mb-6 w-1/4">
                      <h3 className="text-xl font-semibold mb-2">
                        Leadership Team
                      </h3>
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

                    <div className="mb-6 w-1/4">
                      <h3 className="text-xl font-semibold mb-2">Advisor</h3>
                      <p>
                        <strong>Dr. Morgan Smith</strong>, Professor of Physics,
                        Science Department
                      </p>
                    </div>

                    <div className="mb-6 w-1/4">
                      <h3 className="text-xl font-semibold mb-2">
                        Contact Information
                      </h3>
                      <p>
                        <strong>Email:</strong> scienceclub@example.com
                      </p>
                      <p>
                        <strong>Phone:</strong> (123) 456-7890
                      </p>
                      <p>
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

                    <div className="w-1/4">
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
                    </div>

                  </div>
              </section>

              {/* Gallery */}

              <section id="gallery" className="my-8 bg-gray-50">
                <h2 className="text-3xl font-bold mb-4">Gallery</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <img
                    src="../Design.jpg"
                    alt="Event 1"
                    className="w-full h-auto object-cover"
                  />
                  <img
                    src="../Design.jpg"
                    alt="Event 2"
                    className="w-full h-auto object-cover"
                  />
                  <img
                    src="../Design.jpg"
                    alt="Event 3"
                    className="w-full h-auto object-cover"
                  />
                  {/* Add more images/videos as needed */}
                </div>
              </section>

              {/* Testimonials */}

              <section id="testimonials" className="my-8 bg-gray-50">
                <h2 className="text-3xl font-bold mb-4">Testimonials</h2>
                <div className="space-y-4">
                  <blockquote className="p-4 border-l-4 border-blue-500">
                    <p>
                      "Being a part of the Science Club has been a
                      transformative experience. The hands-on projects and
                      engaging discussions have deepened my understanding of
                      science." - Alex J.
                    </p>
                  </blockquote>
                  <blockquote className="p-4 border-l-4 border-blue-500">
                    <p>
                      "The Science Club has given me the opportunity to
                      collaborate with like-minded individuals and work on
                      exciting research projects." - Taylor R.
                    </p>
                  </blockquote>
                  {/* Add more testimonials as needed */}
                </div>
              </section>

              {/* Resources */}
              <section id="resources" className="my-8 bg-gray-50">
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
              <section id="faqs" className="my-8 bg-gray-50">
                <h2 className="text-3xl font-bold mb-4">FAQs</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold">What is the Science Club?</h3>
                    <p>
                      The Science Club is a student organization dedicated to
                      promoting scientific curiosity and knowledge through
                      hands-on activities, workshops, and collaborative
                      projects.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold">
                      Who can join the Science Club?
                    </h3>
                    <p>
                      Any student with an interest in science is welcome to join
                      the Science Club, regardless of their major or background.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold">
                      What activities does the Science Club offer?
                    </h3>
                    <p>
                      We offer a variety of activities including workshops,
                      guest lectures, research projects, science fairs, and
                      community outreach programs.
                    </p>
                  </div>
                  {/* Add more FAQs as needed */}
                </div>
              </section>
            </div>
          </div>
        </div>
      );
    } else {
      return <p>Loading...</p>;
    }
  };

  return (
    <>
      <section className="bg-blue-500 mt-12 min-h-screen">
        <div className="w-full   mx-auto    justify-items-center justify-center gap-y-20  pt-8 mb-5">
          {displayClub()}
        </div>
      </section>
    </>
  );
};

export default ViewClub;
