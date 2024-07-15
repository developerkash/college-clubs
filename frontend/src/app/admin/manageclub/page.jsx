"use client";
import React, { useEffect, useState } from "react";

const ManageClub = () => {
  const [clubData, setclubData] = useState([]);

  const fetchclubData = async () => {
    const res = await fetch("http://localhost:5000/club/getall");
    console.log(res.status);
    if (res.status === 200) {
      const data = await res.json(); // Await the JSON parsing
      console.log(data);
      setclubData(data);
    }
  };

  useEffect(() => {
    fetchclubData();
  }, []);

  const deleteclub = async (id) => {
    console.log(id);

    const res = await fetch("http://localhost:5000/club/delete/" + id, {
      method: "DELETE",
    });
    if (res.status === 200) {
      fetchclubData();
    }
  };

  // update club (assuming updateclub function is defined somewhere)
  const updateclub = async (id) => {
    console.log(id);

    const res = await fetch("http://localhost:5000/club/update/" + id, {
      method: "PUT",
    });
    if (res.status === 200) {
      fetchclubData();
    }
  };

  const displayclubData = () => {
    return clubData.map((club) => (
      <tr
        key={club._id}
        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
      >
        {/* <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          Apple MacBook Pro 17"
        </th> */}
        <td className="px-3 py-4">{club.club_type}</td>
        <td className="px-3 py-4">{club.club_subtype}</td>
        <td className="px-3 py-4">{club.club_name}</td>
        <td className="px-3 py-4">{club.club_cordinator}</td>
        <td className="px-3 py-4">{club.created_on}</td>

        <td className="px-6 py-4 text-right">
          <button
            onClick={() => updateclub(club._id)}
            className="font-medium text-white px-4 py-1 rounded bg-blue-700 hover:underline"
          >
            Edit
          </button>
        </td>
        <td className="px-6 py-4 text-right">
          <button
            onClick={() => deleteclub(club._id)}
            className="font-medium text-white px-4 py-1 rounded bg-red-500 hover:underline"
          >
            Delete
          </button>
        </td>
      </tr>
    ));
  };

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-24">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 ml-72 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-1 py-1">
              Club Category
            </th>
            <th scope="col" className="px-1 py-3">
              Club Type
            </th>
            <th scope="col" className="px-1 py-3">
              Club Name
            </th>
            <th scope="col" className="px-1 py-3">
              Club Cordinator
            </th>
            <th scope="col" className="px-1 py-3">
              Creation Date
            </th>
            <th scope="col" className="px-1 py-3">
              <span className="sr-only">Edit</span>
            </th>
            <th scope="col" className="px-1 py-3">
              <span className="sr-only">Delete</span>
            </th>
          </tr>
        </thead>
        <tbody>{displayclubData()}</tbody>
      </table>
    </div>
  );
};
export default ManageClub;
