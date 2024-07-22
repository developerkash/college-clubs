"use client";
import React, { useEffect, useState } from "react";
import UpdateClub from "../UpdateClub/page";
import toast from "react-hot-toast";

const ManageClub = () => {
  const [clubList, setClubList] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [clubData, setClubData] = useState(null);

  const fetchClubData = async () => {
    const res = await fetch("http://localhost:5000/club/getall");
    if (res.status === 200) {
      const data = await res.json();
      setClubList(data);
    }
  };

  useEffect(() => {
    fetchClubData();
  }, []);

  const deleteClub = async (id) => {
    const res = await fetch(`http://localhost:5000/club/delete/${id}`, {
      method: "DELETE",
    });
    if (res.status === 200) {
      fetchClubData();
      toast.success("Club deleted successfully");
    }
  };

  const toggleUpdate = (club) => {
    setShowForm(true);
    setClubData(club);
  };

  const handleClose = () => {
    setShowForm(false); // Assuming setShowForm controls the visibility
  };

  const displayClubData = () => {
    return clubList.map((club) => (
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <td className="pe-1 py-4">{club.club_type}</td>
        <td className="pe-1 py-4">{club.club_subtype}</td>
        <td className="pe-1 py-4">{club.club_name}</td>
        <td className="pe-1 py-4">{club.club_cordinator}</td>
        <td className="pe-1 py-4">{ new Date (club.created_on).toLocaleDateString()}</td>
        <td className="pe-1 py-4">{club.image}</td>
        <td className="px-1 py-4 text-right">
          <button
            onClick={() => deleteClub(club._id)}
            className="font-medium text-white px-4 py-1 rounded bg-red-500 hover:underline"
          >
            Delete
          </button>
        </td>
        <td className="px-1 py-4 text-right">
          <button
            onClick={() => toggleUpdate(club)}
            className="font-medium text-white px-4 py-1 rounded bg-blue-500 hover:underline"
          >
            Update
          </button>
        </td>
      </tr>
    ));
  };

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-24">
      <table className="w-fit text-sm text-left rtl:text-right text-gray-500 ml-72 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="pe-1 py-1">
              Club Category
            </th>
            <th scope="col" className="pe-1 py-3">
              Club Type
            </th>
            <th scope="col" className="pe-1 py-3">
              Club Name
            </th>
            <th scope="col" className="pe-1 py-3">
              Club Cordinator
            </th>
            <th scope="col" className="pe-1 py-3">
              Creation Date
            </th>
            <th scope="col" className="pe-1 py-3">
              Image
            </th>
            <th scope="col" className="pe-1 py-3">
              <span>Delete</span>
            </th>
            <th scope="col" className="px-1 py-3">
              <span>Update</span>
            </th>
          </tr>
        </thead>

        <tbody>{displayClubData()}</tbody>
      </table>
      {showForm && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          onClick={() => setShowForm(false)}
        >
          <div
            className="bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-lg relative"
            // Prevent the modal from closing when clicking inside the modal content
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-900"
              onClick={() => setShowForm(false)}
            >
              {/* <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg> */}
            </button>
            <div className="p-24 md:p-5">
              <UpdateClub clubData={clubData} fetchClubData={fetchClubData} />
            </div>
          <div className="m-4">
            <button
              type="submit"
              className="block w-full mt-5 rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={handleClose}
            >
              close
            </button>
          </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageClub;
