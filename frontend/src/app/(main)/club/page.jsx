"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";


const Clubs = () => {
  const [clubs, setClubs] = useState([]);
  const [visibleClubs, setVisibleClubs] = useState({
    "Academic and Professional Clubs": 4,
    "Arts and Culture Clubs": 4,
    "Political and Advocacy Clubs": 4,
    "Social and Community Service Clubs": 4,
    "Sports and Recreation Clubs": 4,
    "Technology and Innovation Clubs": 4,
  });


  const fetchClubs = () => {
    fetch("http://localhost:5000/club/getall")
      .then((response) => response.json())
      .then((data) => setClubs(data))
      .catch((err) => console.error("Error:", err));
  };


  useEffect(() => {
    fetchClubs();
  }, []);


  const renderClubsByType = (type) => {
    const visibleCount = visibleClubs[type];
    return clubs
      .filter((club) => club.club_type === type)
      .slice(0, visibleCount)
      .map((club) => (
        <div
          key={club._id}
          className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
        >
          <a href="#">
            <img
              src={`http://localhost:5000/${club.image}`}
              alt="club"
              className="w-72 h-44 object-cover rounded-t-xl"
            />
            <div className="px-4 py-3 w-72">
              <span className="text-lg font-bold text-black block uppercase ">
                {club.club_subtype}
              </span>
              <span className="text-md font-semibold text-black block capitalized italic underline">
                {club.club_name}
              </span>
              <div className="mt-2">
                <div>
                  <p className="text-gray-400 uppercase text-xs font-semibold text-black cursor-auto">
                    Coordinated by: {club.club_cordinator}
                  </p>
                </div>
                <div>
                  <Link
                    href={`/ClubDetail/${club._id}`}
                    className="text-blue-500 hover:text-blue-700 text-sm font-semibold"
                  >
                    <p className="text-right">View more</p>
                  </Link>
                </div>
              </div>
            </div>
          </a>
        </div>
      ));
  };


  const toggleViewMore = (type) => {
    setVisibleClubs((prev) => ({
      ...prev,
      [type]: prev[type] === 4 ? clubs.filter((club) => club.club_type === type).length : 4,
    }));
  };


  const clubSections = [
    "Academic and Professional Clubs",
    "Arts and Culture Clubs",
    "Political and Advocacy Clubs",
    "Social and Community Service Clubs",                      
    "Sports and Recreation Clubs",
    "Technology and Innovation Clubs",
  ];


  return (
    <section className="bg-white mt-20 ">
      {clubSections.map((section) => (
        <div key={section} className="bg-orange-200 m-5 p-5 w-fit mx-auto text-center justify-items-center justify-center gap-y-20 gap-x-14">
          <div>
            <h1 className="text-4xl font-bold text-center  p-5 bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400  text-transparent bg-clip-text">{section}</h1>
          </div>
          <div className="bg-orenge-200 m-5 p-5 w-fit mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 pt-8 mb-5">
            {renderClubsByType(section)}
          </div>
          <button
            onClick={() => toggleViewMore(section)}
            className="text-blue-700 hover:text-blue-900 text-4xl font-semibold mt-4 "
          >
            {visibleClubs[section] === 3 ? "View More" : "View Less"}
          </button>
        </div>
      ))}
    </section>
  );
};


export default Clubs;


