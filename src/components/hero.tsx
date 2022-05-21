import React from "react";
import "./hero.css";

export const Hero = () => {
  return (
    <div className="HeroBgImage heroBg ">
      <div className="container px-6 py-4 mx-auto lg:flex lg:h-128 lg:py-16 ">
        <div className="flex flex-col items-center w-full lg:flex-row lg:w-1/2">
          <div className="max-w-lg">
            <h1 className="heroLarge">Don’t miss amazing offers</h1>
            <div className="heroSmall py-6">Sign up for our newsletter</div>
            <div>
              <div className="py-20">
                <form>
                  <div className="relative">
                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                      <svg
                        className="w-5 h-5 text-gray-500 dark:text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        ></path>
                      </svg>
                    </div>
                    <input
                      type="search"
                      id="search"
                      className="round block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50  border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Your email address"
                      required
                    />
                    <button
                      type="submit"
                      className=" round text-white absolute right-2.5 bottom-2.5 bg-green-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium  text-sm px-4 py-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                    >
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="flex heroImage  ">
        
          <img className="object-cover w-full max-w-2xl rounded-md lg:h-full"
                    src="https://s3-alpha-sig.figma.com/img/6b9c/ce3b/cdffb7cac8c5f09057cb20931107b4c3?Expires=1653868800&Signature=LTJVGmmygXwyLiXll-WeuBPR9WGM803PUEdm-K-V3cg5G11nh4WZGXJ4fDn3Jco75GXQ1BoGtG2UyquF5cPVcd-grXDkstiHgimpfjf6EM5DlZ9ciIYFei7KHhyUA48-r2FRz86Et0TZ1P236na40w6dYWSYG-QV1r-yl68uMtwwv8tmGX7p9dBvrYiHouloz0ZUkjndtEDSC1QP23rEsEm1WBOOshq4Kb6ew5DCFJq0g7F3SQvAKY9NIGy94HLWcJh6uiUh5CrFb5r9koc12NLHA92O4t9~4za1OYuk2F8OWJ2Wlr9CVBRYjk~doAe8RCr2WcLjjZVbA--M3ErB6g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="apple watch photo"/>
        </div>
      </div>
    </div>
  );
};
