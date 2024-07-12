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
          <div className="bg-gray-100 dark:bg-gray-800 py-8">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-2 text-center">
                {clubData.club_type}
              </h1>
              <div className="flex flex-col md:flex-row -mx-4">
                <div className="md:flex-1 px-4">
                  <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                    <img
                      className="w-full h-full object-cover"
                      src="https://cdn.pixabay.com/photo/2020/05/22/17/53/mockup-5206355_960_720.jpg"
                      alt="Product Image"
                    />
                  </div>
                </div>
                <div className="md:flex-1 px-4">
                  <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                    {clubData.club_name}
                  </h2>
                  <h3>{clubData.club_subtype}</h3>
                  <div className="flex mb-4">
                    <div className="mr-4">
                      <p>{clubData.description}</p>
                      <span className="text-gray-600 dark:text-gray-300">
                        $29.99
                      </span>
                    </div>
                    <div>
                      <span className="font-bold text-gray-700 dark:text-gray-300">
                        Availability:
                      </span>
                      <span className="text-gray-600 dark:text-gray-300">
                        In Stock
                      </span>
                    </div>
                  </div>
                  <div className="mb-4">
                    <span className="font-bold text-gray-700 dark:text-gray-300">
                      Select Color:
                    </span>
                    <div className="flex items-center mt-2">
                      <button className="w-6 h-6 rounded-full bg-gray-800 dark:bg-gray-200 mr-2" />
                      <button className="w-6 h-6 rounded-full bg-red-500 dark:bg-red-700 mr-2" />
                      <button className="w-6 h-6 rounded-full bg-blue-500 dark:bg-blue-700 mr-2" />
                      <button className="w-6 h-6 rounded-full bg-yellow-500 dark:bg-yellow-700 mr-2" />
                    </div>
                  </div>
                  <div className="mb-4">
                    <span className="font-bold text-gray-700 dark:text-gray-300">
                      Select Size:
                    </span>
                    <div className="flex items-center mt-2">
                      <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
                        S
                      </button>
                      <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
                        M
                      </button>
                      <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
                        L
                      </button>
                      <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
                        XL
                      </button>
                      <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
                        XXL
                      </button>
                    </div>
                  </div>
                  <div>
                    <span className="font-bold text-gray-700 dark:text-gray-300">
                      Product Description:
                    </span>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed sed ante justo. Integer euismod libero id mauris
                      malesuada tincidunt. Vivamus commodo nulla ut lorem
                      rhoncus aliquet. Duis dapibus augue vel ipsum pretium, et
                      venenatis sem blandit. Quisque ut erat vitae nisi ultrices
                      placerat non eget velit. Integer ornare mi sed ipsum
                      lacinia, non sagittis mauris blandit. Morbi fermentum
                      libero vel nisl suscipit, nec tincidunt mi consectetur.
                    </p>
                  </div>
                </div>
              </div>
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
      <section className="bg-amber-100 mt-12 min-h-screen">
        <div className="w-fit   mx-auto    justify-items-center justify-center gap-y-20 gap-x-14 pt-8 mb-5">
          {displayClub()}
        </div>
      </section>
    </>
  );
};

export default ViewClub;
