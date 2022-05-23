import React from "react";
import "./header.css";

const HeaderMenu = () => {
  return (
<nav className="flex items-center justify-between flex-wrap bg-white-500 p-3">
<button
  id="dropdownDefault"
  data-dropdown-toggle="dropdown"
  className=" text-white bg-green-500 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 rounded-lg  px-4 py-2.5  inline-flex items-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
  type="button"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="fill-green-500 py-1 h-6 w-6"
    viewBox="0 0 24 24"
    stroke="white"
    stroke-width="2"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
    />
  </svg>
  <span className="btn_text">Browse Communities </span>

  <svg
    className="w-4 h-4 ml-2"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M19 9l-7 7-7-7"
    ></path>
  </svg>
</button>
  <div className="block lg:hidden">
    <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
      <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button>
  </div>
  <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto ml-5">
    <div className="text-sm lg:flex-grow">
      <a href="#responsive-header" className="list_text block mt-4 lg:inline-block lg:mt-0  hover:text-black mr-4">
        Docs
      </a>
      <a href="#responsive-header" className="list_text block mt-4 lg:inline-block lg:mt-0  hover:text-black mr-4">
        Examples
      </a>
      <a href="#responsive-header" className="list_text block mt-4 lg:inline-block lg:mt-0  hover:text-black">
        Blog
      </a>
    </div>
    {/* <div>
      <a href="#" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Download</a>
    </div> */}
  </div>
</nav>
  );
};
{
  /* 
<button
  id="dropdownDefault"
  data-dropdown-toggle="dropdown"
  className=" text-white bg-green-500 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 rounded-lg  px-4 py-2.5  inline-flex items-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
  type="button"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="fill-green-500 py-1 h-6 w-6"
    viewBox="0 0 24 24"
    stroke="white"
    stroke-width="2"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
    />
  </svg>
  <span className="btn_text">Browse Communities </span>

  <svg
    className="w-4 h-4 ml-2"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M19 9l-7 7-7-7"
    ></path>
  </svg>
</button>; */
}

export default HeaderMenu;
