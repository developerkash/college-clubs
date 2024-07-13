"use client";
import Link from "next/link";
import React, { use, useEffect, useState } from "react";

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
        console.log(err);
      });
  };

  useEffect(() => {
    fetchClubs();
  });

  const clubList = (club) => {
    return clubs.map((club) => {
      return (
        <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
          <a href="#">
            <img
              src="https://media.istockphoto.com/id/1339094198/photo/rear-view-of-a-gaming-setup-with-desktop-pc-and-a-big-monitor.jpg?s=2048x2048&w=is&k=20&c=p5m2SAVrev7kz0UiSBaho9JddZelm8hRq9Mrgvimkmw="
              alt="Product"
              className="h-80 w-72 object-cover rounded-t-xl"
            />
            <div className="px-4 py-3 w-72">
              <span className="text-lg font-bold text-black  block uppercase ">
                {club.club_subtype}
              </span>
              <span className="text-md font-semibold text-black  block capitalized italic underline">
                {club.club_name}
              </span>
              <div className=" mt-2">
                <div>
                  <p className="text-gray-400  uppercase text-xs  font-semibold text-black cursor-auto">
                    Cordinated by:{club.club_cordinator}
                  </p>
                </div>
                <div>
                  <Link
                    href={`/ViewClub/${club._id}`}
                    className="text-blue-500 hover:text-blue-700 text-sm font-semibold"
                  >
                    <p className="text-right">View more</p>
                  </Link>
                </div>
              </div>
            </div>
          </a>
        </div>
      );
    });
  };

  return (
    <>
      <section className="bg-amber-100 mt-12 min-h-screen">
        {/* Div for Academic and Professional Clubs */}
        <div className="w-fit   mx-auto   grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 pt-8 mb-5">
          {clubList()}
        </div>

        {/* Div for Sports and Recreation Clubs */}
        

      </section>
    </>
  );
};

export default Clubs;
