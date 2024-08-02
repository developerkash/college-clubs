"use client";
import React from "react";
import Link from "next/link";

const UserNavbar = () => {
  return (
    <>
      <nav className="fixed top-0 w-full  bg-red-700 py-2.5 dark:bg-gray-900">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex flex-row items-center justify-between  px-4 mx-auto">
            <img src="../Design.jpg" className="h-6 mr-3 sm:h-9" alt="Logo" />

            <div
              className="items-center justify-center w-full lg:flex lg:w-auto lg:order"
              id="mobile-menu-2"
            >
              <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <Link href="/">
                  <li className="block py-2 pl-3 pr-4 text-white  border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:underline lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">
                    Home
                  </li>
                </Link>
                <Link href="/about">
                  <li className="block py-2 pl-3 pr-4 text-white  border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:underline lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">
                    about
                  </li>
                </Link>
                <Link href="/contact">
                  <li className="block py-2 pl-3 pr-4 text-white  border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:underline lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">
                    contact
                  </li>
                </Link>
                <Link href="/club">
                  <li className="block py-2 pl-3 pr-4 text-white  border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:underline lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">
                    clubs
                  </li>
                </Link>
                <Link href="/event">
                  <li className="block py-2 pl-3 pr-4 text-white  border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:underline lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">
                    Events
                  </li>
                </Link>
                <Link href="/announcement">
                  <li className="block py-2 pl-3 pr-4 text-white  border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:underline lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">
                    Announcements
                  </li>
                </Link>
                <Link href="/team">
                  <li className="block py-2 pl-3 pr-4 text-white  border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:underline lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">
                    Team
                  </li>
                </Link>
              </ul>
            </div>

            <img
              className="w-8 h-8 rounded-full"
              src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              alt="user photo"
            />
          </div>
        </div>
      </nav>
    </>
  );
};

export default UserNavbar;
