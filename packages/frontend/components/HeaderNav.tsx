import { useState } from "react";
import Link from "next/link";
import Image from "next/image"

const HeaderNav = () => {
    const [open, setOpen] = useState(false);
    const [flyer, setFlyer] = useState(false);
    const [flyerTwo, setFlyerTwo] = useState(false);
  
    return (
      <div className="absolute top-0 z-10 w-full bg-transparent">
        {/* This example requires Tailwind CSS v2.0+ */}
        <div className="relative ">
          <div className="mx-auto sm:px-6">
            <div className="flex items-center justify-between px-3 py-6 ">
              <div className="flex">
                <Link href='/'>
                <a>
                  <span className="sr-only">Workflow</span>
                  <Image src="/logo.svg"
                  height='50'
                  width='50'
                  />
                </a>
                </Link>
              </div>

              <div className="flex items-center ">

          <div>
  
  <div className="relative grow ">
    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
      <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    </div>
    <input type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg md:w-128 bg-gray-50 focus:ring-blue-500 " placeholder="Search events, tickers..." />
    
  </div>
</div>   
              </div>
              
              
             <div>
             <div className=" md:hidden">
                <button
                  type="button"
                  className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                  onClick={() => setOpen(!open)}
                >
                  <span className="sr-only">Open menu</span>
                  <svg
                    className="w-6 h-6 "
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="white"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div> 

              <nav className="items-center hidden md:flex">
                <div className="relative ml-6">
                  {/* Item active: "text-gray-900", Item inactive: "text-gray-500" */}
                  <div className="relative">
                  <button
                    type="button"
                    className="inline-flex items-center p-2 text-base font-medium text-white rounded-md group hover:opacity-80 focus:outline-none focus:ring-2 "
                    onClick={() => (setFlyer(!flyer), setFlyerTwo(false))}
                  >
                    <span>Solutions  </span>
                    {/*
                Heroicon name: solid/chevron-down
  
                Item active: "text-gray-600", Item inactive: "text-gray-400"
              */}
                    <svg
                      className={
                        `${flyer === true? "transform rotate-180  transition ease-out duration-200": "transform rotate-0 transition ease-out duration-200"} ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500`
                      }
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  </div>
  
                  <div
                    onMouseLeave={() => setFlyer(false)}
                    className={
                      flyer
                        ? " opacity-100 translate-y-0 transition ease-out duration-200 absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                        : " opacity-0 translate-y-1 absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                    }
                  >
                    <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                      <div className="relative grid gap-6 px-5 py-6 bg-white sm:gap-8 sm:p-8">
                      <a
                          href="#"
                          className="flex items-start p-3 -m-3 rounded-lg hover:bg-gray-50"
                        >
                          {/* Heroicon name: outline/calendar */}
                          <svg
                            className="flex-shrink-0 w-6 h-6 text-indigo-600"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>
                          <div className="ml-4">
                            <p className="text-base font-medium text-gray-900">
                              Events
                            </p>
                            <p className="mt-1 text-sm text-gray-500">
                              See what meet-ups and other events we might be
                              planning near you.
                            </p>
                          </div>
                        </a>
                        <a
                          href="#"
                          className="flex items-start p-3 -m-3 rounded-lg hover:bg-gray-50"
                        >
                          {/* Heroicon name: outline/cursor-click */}
                          <svg
                            className="flex-shrink-0 w-6 h-6 text-indigo-600"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                            />
                          </svg>
                          <div className="ml-4">
                            <p className="text-base font-medium text-gray-900">
                              Event as a Service
                            </p>
                            <p className="mt-1 text-sm text-gray-500">
                              Speak directly to your customers in a more
                              meaningful way.
                            </p>
                          </div>
                        </a>
                   
              
                       
                      </div>
                      <div className="px-5 py-5 space-y-6 bg-gray-50 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                        <div className="flow-root">
                          <a
                            href="#"
                            className="flex items-center p-3 -m-3 text-base font-medium text-gray-900 rounded-md hover:bg-gray-100"
                          >
                            {/* Heroicon name: outline/play */}
                            <svg
                              className="flex-shrink-0 w-6 h-6 text-gray-400"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                              />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                            <span className="ml-3">Watch Demo</span>
                          </a>
                        </div>
                        <div className="flow-root">
                          <a
                            href="#"
                            className="flex items-center p-3 -m-3 text-base font-medium text-gray-900 rounded-md hover:bg-gray-100"
                          >
                            {/* Heroicon name: outline/phone */}
                            <svg
                              className="flex-shrink-0 w-6 h-6 text-gray-400"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                              />
                            </svg>
                            <span className="ml-3">Contact Sales</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
  
                <a
                  href="#"
                  className="p-2 ml-6 text-base font-medium text-white border-blue-600 hover:opacity-80 hover:border-b-2"
                >
                  Pricing
                </a>
               
                <div className="relative ml-6">
                  {/* Item active: "text-gray-900", Item inactive: "text-gray-500" */}
                  <button
                    type="button"
                    className="inline-flex items-center p-2 text-base font-medium text-white rounded-md group hover:opacity-80 focus:outline-none "
                    onClick={() => (setFlyerTwo(!flyerTwo), setFlyer(false))}
                  >
                    <span>More</span>
                    {/*
                Heroicon name: solid/chevron-down
  
                Item active: "text-gray-600", Item inactive: "text-gray-400"
              */}
          
                    <svg
                      className={
                        flyerTwo === true
                          ? "transform rotate-180 ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500 transition ease-out duration-200"
                          : "ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                      }
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  {/*
              'More' flyout menu, show/hide based on flyout menu state.
  
              Entering: "transition ease-out duration-200"
                From: "opacity-0 translate-y-1"
                To: "opacity-100 translate-y-0"
              Leaving: "transition ease-in duration-150"
                From: "opacity-100 translate-y-0"
                To: "opacity-0 translate-y-1"
            */}{" "}
                  <div
                    onMouseLeave={() => setFlyerTwo(false)}
                    className={
                      flyerTwo
                        ? " opacity-100 translate-y-0 transition ease-out duration-200 absolute z-10 -ml-8 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:-translate-x-1/2 "
                        : " opacity-0 translate-y-1 absolute z-10 -ml-4 md:-ml-16 mt-3 transform px-2 w-screen max-w-md sm:px-0  lg:-translate-x-1/2"
                    }
                  >
                    <div className="relative overflow-hidden border rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 -left-20">
                      <div className="relative grid gap-6 px-5 py-6 bg-white sm:gap-8 sm:p-8">
                        <a
                          href="#"
                          className="flex items-start p-3 -m-3 rounded-lg hover:bg-gray-50"
                        >
                          {/* Heroicon name: outline/support */}
                          <svg
                            className="flex-shrink-0 w-6 h-6 text-indigo-600"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                            />
                          </svg>
                          <div className="ml-4">
                            <p className="text-base font-medium text-gray-900">
                              Help Center
                            </p>
                            <p className="mt-1 text-sm text-gray-500">
                              Get all of your questions answered in our forums or
                              contact support.
                            </p>
                          </div>
                        </a>
                    
                    
                        <a
                          href="#"
                          className="flex items-start p-3 -m-3 rounded-lg hover:bg-gray-50"
                        >
                          {/* Heroicon name: outline/shield-check */}
                          <svg
                            className="flex-shrink-0 w-6 h-6 text-indigo-600"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                            />
                          </svg>
                          <div className="ml-4">
                            <p className="text-base font-medium text-gray-900">
                              Security
                            </p>
                            <p className="mt-1 text-sm text-gray-500">
                              Understand how we take your privacy seriously.
                            </p>
                          </div>
                        </a>
                      </div>
                      <div className="px-5 py-5 bg-gray-50 sm:px-8 sm:py-8">
                        <div>
                          <h3 className="text-sm font-medium tracking-wide text-gray-500 uppercase">
                            Recent Posts
                          </h3>
                          <ul className="mt-4 space-y-4">
                            <li className="text-base truncate">
                              <a
                                href="#"
                                className="font-medium text-gray-900 hover:text-gray-700"
                              >
                                Boost your conversion rate
                              </a>
                            </li>
                            <li className="text-base truncate">
                              <a
                                href="#"
                                className="font-medium text-gray-900 hover:text-gray-700"
                              >
                                How to use search engine optimization to drive
                                traffic to your site
                              </a>
                            </li>
                            <li className="text-base truncate">
                              <a
                                href="#"
                                className="font-medium text-gray-900 hover:text-gray-700"
                              >
                                Improve your customer experience
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="mt-5 text-sm">
                          <a
                            href="#"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                          >
                            {" "}
                            View all posts <span aria-hidden="true">→</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                </div>

                <div className="ml-6">
                <a
                  href="#"
                  className="inline-flex items-center justify-center p-2 px-4 text-base font-medium text-white border border-transparent shadow-sm bg-red-cred rounded-2xl whitespace-nowrap hover:bg-red-700"
                >
                Login
                </a> 
                </div>
              </nav>
             </div>   
             
            </div>
          </div>
        
          {/*
      Mobile menu, show/hide based on mobile menu state.
  
      Entering: "duration-200 ease-out"
        From: ""
        To: ""
      Leaving: "duration-100 ease-in"
        From: "opacity-100 scale-100"
        To: "opacity-0 scale-95"
    */}
  
  <div


            className={
              `${open ? "z-10 opacity-100 scale-100 ease-out duration-200 ": "-z-10 opacity-0 scale-0"} absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden`
            }
          >
            <div className="bg-white divide-y-2 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 divide-gray-50">
              <div className="px-5 pt-5 pb-6">
                <div className="flex items-center justify-between">
                  <div>
                  <Image src="/logo.svg"
                  height='50'
                  width='50'
               
                  />
                  </div>
                  <div className="-mr-2">
                    <button
                      type="button"
                      className="inline-flex items-center justify-center p-2 text-gray-400 bg-white border rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                      onClick={() => setOpen(!open)}
                    >
                      <span className="sr-only">Close menu</span>
                      {/* Heroicon name: outline/x */}
                      <svg
                        className="w-6 h-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-8">
                  <a
                          href="#"
                          className="flex items-start p-3 -m-3 rounded-lg hover:bg-gray-50"
                        >
                          {/* Heroicon name: outline/calendar */}
                          <svg
                            className="flex-shrink-0 w-6 h-6 text-indigo-600"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>
                          <div className="ml-4">
                            <p className="text-base font-medium text-gray-900">
                              Events
                            </p>
                            <p className="mt-1 text-sm text-gray-500">
                              See what meet-ups and other events we might be
                              planning near you.
                            </p>
                          </div>
                        </a>
                    <a
                      href="#"
                      className="flex items-center p-3 -m-3 rounded-md hover:bg-gray-50"
                    >
                      {/* Heroicon name: outline/cursor-click */}
                      <svg
                        className="flex-shrink-0 w-6 h-6 text-indigo-600"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                        />
                      </svg>
                      <span className="ml-3 text-base font-medium text-gray-900">
                       Event as a Service
                      </span>
                    </a>
                    <a
                      href="#"
                      className="flex items-center p-3 -m-3 rounded-md hover:bg-gray-50"
                    >
                      {/* Heroicon name: outline/shield-check */}
                      <svg
                        className="flex-shrink-0 w-6 h-6 text-indigo-600"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        />
                      </svg>
                      <span className="ml-3 text-base font-medium text-gray-900">
                        Security
                      </span>
                    </a>
               
                  
                  </nav>
                </div>
              </div>
              <div className="px-5 py-6 space-y-6">
                <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                  <a
                    href="#"
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    Pricing
                  </a>
                  
                 
                  <a
                    href="#"
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    Blog
                  </a>
                  <a
                    href="#"
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    Help Center
                  </a>
                
                
                  <a
                    href="#"
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    Events
                  </a>
                </div>
                <div>
                  <a
                    href="#"
                    className="flex items-center justify-center w-full p-2 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700"
                  >
                   Login
                  </a>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };


//   curated from 
//   https://codepen.io/Vinny92/pen/XWNdxvj



  export default HeaderNav
  


  