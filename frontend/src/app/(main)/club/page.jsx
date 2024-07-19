"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Clubs = () => {
  const [clubs, setClubs] = useState([]);

  const fetchClubs = () => {
    fetch("http://localhost:5000/club/getall")
      .then((response) => {
        console.log(response.status);
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setClubs(data);
      })
      .catch((err) => {
        console.error("Error:", err);
      });
  };

  useEffect(() => {
    fetchClubs();
  }, []);

  const renderClubsByType = (type) => {
    return clubs
      .filter((club) => club.club_type === type)
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

  return (
    <>
      <section className="bg-amber-100 mt-15 pt-8 min-h-screen">
        <div className="bg-blue-500 m-5 p-5 w-fit mx-auto text-center justify-items-center justify-center gap-y-20 gap-x-14">
          <div>
            <h2 className="text-2xl block font-bold ">
              Academic and Professional Clubs
            </h2>
          </div>
          <div className="bg-blue-500 m-5 p-5 w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 pt-8 mb-5">
            {renderClubsByType("Academic and Professional Clubs")}
          </div>
        </div>

        <div className="bg-blue-500 m-5 p-5 w-fit mx-auto text-center justify-items-center justify-center gap-y-20 gap-x-14">
          <div>
            <h2 className="text-2xl block font-bold ">
              Arts and Culture Clubs
            </h2>
          </div>
          <div className="bg-blue-500 m-5 p-5 w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 pt-8 mb-5">
            {renderClubsByType("Arts and Culture Clubs")}
          </div>
        </div>

        <div className="bg-blue-500 m-5 p-5 w-fit mx-auto text-center justify-items-center justify-center gap-y-20 gap-x-14">
          <div>
            <h2 className="text-2xl block font-bold ">
              Political and Advocacy Clubs{" "}
            </h2>
          </div>
          <div className="bg-blue-500 m-5 p-5 w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 pt-8 mb-5">
            {renderClubsByType("Political and Advocacy Clubs")}
          </div>
        </div>

        <div className="bg-blue-500 m-5 p-5 w-fit mx-auto text-center justify-items-center justify-center gap-y-20 gap-x-14">
          <div>
            <h2 className="text-2xl block font-bold ">
              Social and Community Service Clubs
            </h2>
          </div>
          <div className="bg-blue-500 m-5 p-5 w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 pt-8 mb-5">
            {renderClubsByType("Social and Community Service Clubs")}
          </div>
        </div>

        <div className="bg-blue-500 m-5 p-5 w-fit mx-auto text-center justify-items-center justify-center gap-y-20 gap-x-14">
          <div>
            <h2 className="text-2xl block font-bold ">
              Sports and Recreation Clubs{" "}
            </h2>
          </div>
          <div className="bg-blue-500 m-5 p-5 w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 pt-8 mb-5">
            {renderClubsByType("Sports and Recreation Clubs")}
          </div>
        </div>

        <div className="bg-blue-500 m-5 p-5 w-fit mx-auto text-center justify-items-center justify-center gap-y-20 gap-x-14">
          <div>
            <h2 className="text-2xl block font-bold ">
              Technology and Innovation Clubs
            </h2>
          </div>
          <div className="bg-blue-500 m-5 p-5 w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 pt-8 mb-5">
            {renderClubsByType("Technology and Innovation Clubs")}
          </div>
        </div>
      </section>
    </>
  );
};

export default Clubs;
