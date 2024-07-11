import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4 mt-8">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-4xl my-8">
        <h1 className="text-4xl font-bold mb-6 text-center text-gray-800 ">About Our Club</h1>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Welcome to the [Club Name] at [College/University Name]! We are a vibrant and dynamic community of students who share a passion for [Club Focus/Interest, e.g., technology, arts, community service]. Our club provides a platform for students to explore their interests, develop their skills, and make meaningful connections.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-4 text-gray-800">Our Mission</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Our mission is to foster a supportive environment where students can engage in [Club Activities, e.g., innovative projects, creative endeavors, community outreach] and grow both personally and professionally. We aim to provide resources, opportunities, and mentorship to help our members succeed.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-4 text-gray-800">Our Activities</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Throughout the academic year, we organize a variety of activities and events, including:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>Workshops and seminars led by industry professionals</li>
          <li>Collaborative projects and hackathons</li>
          <li>Networking events and guest speaker sessions</li>
          <li>Social gatherings and team-building activities</li>
          <li>Community service and outreach programs</li>
        </ul>
        <h2 className="text-2xl font-semibold mt-6 mb-4 text-gray-800">Our Team</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Meet our dedicated team of leaders who make it all possible:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li><strong>John Doe:</strong> President</li>
          <li><strong>Jane Smith:</strong> Vice President</li>
          <li><strong>Mark Brown:</strong> Treasurer</li>
          <li><strong>Lisa White:</strong> Secretary</li>
          <li><strong>Emma Green:</strong> Event Coordinator</li>
        </ul>
        <h2 className="text-2xl font-semibold mt-6 mb-4 text-gray-800">Join Us</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          We welcome students from all backgrounds and majors to join us. Whether you're looking to expand your skills, meet like-minded peers, or simply try something new, [Club Name] has something for everyone. 
        </p>
        <p className="text-gray-700 leading-relaxed">
          Thank you for visiting our page! We look forward to seeing you at our next meeting or event. Stay connected with us through our social media channels and keep an eye on our event calendar for upcoming activities.
        </p>
      </div>
    </div>
  );
};

export default About;


      // xl:h-screen lg:h-screen md:h-screen sm:h-screen  2xl:h-screen
      // bg-indigo-50  flex  justify-center"