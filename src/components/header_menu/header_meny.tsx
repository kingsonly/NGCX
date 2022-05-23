import React from "react";
import './header.css'


export const HeaderMenu = () => {
  return (
    <ul className="flex m-3" >
      <li className="mr-3">
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
      </li>
      <li className="list_text mr-5 mt-3 nav_items">
        <a
          className=" "
          href="#"
        >
          HOME
        </a>
      </li>
      <li className="list_text mr-5 mt-3 nav_items">
        <a
          className=" "
          href="#"
        >
          PRODUCTS
        </a>
      </li>
      <li className="list_text mr-5 mt-3 nav_items">
        <a
          className=" "
          href="#"
        >
          RETAILERS
        </a>
      </li>
    </ul>
  );
};

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
</button>;
