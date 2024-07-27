"use client";
import React from "react";

const TeamPage = () => {
  const teamMembers = [
    {
      name: "John Doe",
      position: "President",
      bio: "John is a senior studying Business Administration. He is passionate about entrepreneurship and has led several successful projects.",
      image: "image1.jpg",
    },
    {
      name: "Jane Smith",
      position: "Vice President",
      bio: "Jane is a junior majoring in Computer Science. She loves coding and has been instrumental in organizing tech events.",
      image: "image2.jpg",
    },
    {
      name: "Alex Johnson",
      position: "Secretary",
      bio: "Alex is a sophomore with a keen interest in environmental science. He has coordinated multiple community service activities.",
      image: "image3.jpg",
    },
    
    // Add more team members as needed
  ];

  return (
    <div className="max-w-7xl mt-28 mx-auto py-12 px-6 bg-orange-200">
      <h1 className="text-3xl font-bold text-center mb-8">Meet Our Team</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
            <img
              src={member.image}
              alt={member.name}
              className="w-32 h-32 mx-auto rounded-full mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">{member.name}</h2>
            <h3 className="text-indigo-600 mb-4">{member.position}</h3>
            <p className="text-gray-700">{member.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamPage;
