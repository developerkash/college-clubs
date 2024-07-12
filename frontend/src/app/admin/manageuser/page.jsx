'use client';
import React, { useEffect, useState } from 'react'

const ManageUser = () => {

    const [userData, setuserData] = useState([]);

    const fetchuserData = async () => {
      const res = await fetch("http://localhost:5000/user/getall");
      console.log(res.status);

      if (res.status === 200) {
        const data = await res.json();
        console.log(data);
        setuserData(data);
      }
    }

    useEffect(() => {
      fetchuserData();
    }, []);

    const deleteuser = async (id) => {

      console.log(id);

      const res =  fetch('http://localhost:5000/user/delete/' + id, {method: 'DELETE'});
        if (res.status === 200) {
          fetchuserData();
        }

    }

    const displayuserData = () => {
      return userData.map((user) =>  (
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
          {/* <th
            scope="row"
            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            Apple MacBook Pro 17"
          </th> */}
          <td className="px-3 py-4">{user.first_name} {user.last_name}</td>
          <td className="px-3 py-4">{user.email}</td>
          <td className="px-3 py-4">{user.contact}</td>
          <td className="px-3 py-4">{user.password}</td>
          <td className="px-6 py-4 text-right">
            <button
              onClick={ () => deleteuser(user._id)}
              className="font-medium text-white px-4 py-1 rounded bg-red-500  hover:underline"
            >
              Delete
            </button>
          </td> 
        </tr>
  
        )
      )
    }

  return (
<div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-24">
  <table className="w-full text-sm text-left rtl:text-right text-gray-500 ml-72 dark:text-gray-400">
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" className="px-1 py-1">
          User Name
        </th>
        <th scope="col" className="px-3 py-3">
          Email
        </th>
        <th scope="col" className="px-3 py-3">
          Contact
        </th>
        <th scope="col" className="px-3 py-3">
          Password
        </th>
        <th scope="col" className="px-3 py-3">
          <span className="sr-only">Delete</span>
        </th>
      </tr>
    </thead>
    <tbody>
      {displayuserData()}
    </tbody>
  </table>
</div>
  )
}

export default ManageUser;