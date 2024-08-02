'use client';
import React, { useEffect, useState } from 'react'
import UpdateClub from '../UpdateClub/page';

const ManageQuery = () => {

    const [queryData, setqueryData] = useState([]);
    

    const fetchQueryData = async () => {
      const res = await fetch("http://localhost:5000/contact/getall");
      console.log(res.status);

      if (res.status === 200) {
        const data = await res.json();
        console.log(data);
        setqueryData(data);
      }
    }

    useEffect(() => {
      fetchQueryData();
    }, []);


    const displayQueryData = () => {
      return queryData.map((query) =>  (
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
          <td className="pr-5 py-4">{query.name}</td>
          <td className="pr-5 py-4">{query.email}</td>
          <td className="pr-5 py-4">{query.textarea}</td>
          <td className="pr-5 py-4 text-right">
            <button
              className="font-medium text-white px-4 py-1 rounded bg-red-500  hover:underline"
            >
              Response
            </button>
          </td> 
        </tr>
  
        )
      )
    }

  return (
<div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-24">
  <table className="w-widow text-sm text-left rtl:text-right text-gray-500 ml-72 dark:text-gray-400">
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" className=" py-1">
          Name 
        </th>
        <th scope="col" className=" py-1">
          Email
        </th>
        <th scope="col" className=" py-1">
          Message
        </th>
        
        <th scope="col" className=" py-1">
          <span className="">Action</span>
        </th>
      </tr>
    </thead>
    <tbody>
      {displayQueryData()}
    </tbody>
  </table>
</div>
  )
}

export default ManageQuery;