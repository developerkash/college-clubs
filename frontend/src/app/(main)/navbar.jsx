import Link from 'next/link';
import React from 'react'

const Navbar = () => {
  return (
    <div>
      <>
  {/* ========== HEADER ========== */}
  <>
  {/* component */}
  <nav className=" shadow shadow-gray-300 w-100 px-8 md:px-auto">
    <div className="md:h-16 h-28 mx-auto md:px-4 container flex items-center justify-between flex-wrap md:flex-nowrap">
      {/* Logo */}
      <div className="text-indigo-900 w-20  md:order-1">
      <img className='' src="Design.jpg" alt="" />
      </div>
      <div className="text-gray-500 order-3 w-full md:w-auto md:order-2">
        <ul className="flex font-semibold justify-between">
        <Link href="/"> 
          <li className="md:px-4 hover:text-indigo-400 md:py-2 text-indigo-700">
            Dashboard
          </li>
        </Link> 
        <Link href="/about">
          <li className="md:px-4 md:py-2 text-indigo-700  hover:text-indigo-400">
            About
          </li>
        </Link>
        <Link href="/contact">
          <li className="md:px-4 md:py-2 text-indigo-700  hover:text-indigo-400">
           Contact
          </li>
        </Link>
          <li className="md:px-4 md:py-2 text-indigo-700 hover:text-indigo-400">
           Search
          </li>
          <li className="md:px-4 md:py-2 text-indigo-700   hover:text-indigo-400">
           Explore
          </li>
        </ul>
      </div>
      <div className="order-2 md:order-3">
        <button className="px-4 py-2 bg-indigo-700 hover:bg-indigo-600 text-gray-50 rounded-xl flex items-center gap-2">
          {/* Heroicons - Login Solid */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
          <span>Login</span>
        </button>
      </div>
    </div>
  </nav>
</>

  {/* ========== END HEADER ========== */}
</>

    </div>
  )
}

export default Navbar;