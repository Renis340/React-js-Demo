import React from "react";
import logo from '../Shopping/flipkart-plus.png';
import plus from '../Shopping/plus.png';
import { Select } from '@chakra-ui/react';
import {FaCartPlus} from 'react-icons/fa';
import image1 from './image-1.webp';
import image2 from './image-2.webp';
import image3 from './image-3.webp';
import image4 from './image-4.webp';
import image5 from './image-5.webp';
import image6 from './image-6.webp';
import image7 from './image-7.webp';
import image8 from './image-8.webp';
import image9 from './image-9.webp';
import image10 from './image-10.webp';


function Header() {
    return (
        <div>
            <div className="pt-16">
                <div>
                    <nav className="nav-bg h-14 w-full">
                        <div className="relative flex h-16 items-center justify-between">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* <!-- Mobile menu button--> */}
                                <button
                                    type="button"
                                    className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                    aria-controls="mobile-menu"
                                    aria-expanded="false"
                                >
                                    <span className="sr-only">Open main menu</span>
                                    {/* <!--
                                    Icon when menu is closed.

                                    Menu open: "hidden", Menu closed: "block"
                                     --> */}
                                    <svg
                                        className="block h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                        />
                                    </svg>
                                    {/* <!--
                                    Icon when menu is open.

                                    Menu open: "block", Menu closed: "hidden"
                                    --> */}
                                    <svg
                                        className="hidden h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                </button>
                            </div>
                            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="ml-96">
                                    <div className="flex flex-shrink-0 items-center">
                                        <img
                                            className="block h-5 w-20 lg:hidden"
                                            src={logo}
                                            alt="Your Company"
                                        />
                                        <img
                                            className="hidden h-5 w-20 lg:block"
                                            src={logo}
                                            alt="Your Company"
                                        />
                                    </div>
                                    <a href="" className="text-xs italic">Explore</a>
                                    <span className="text-xs italic _2Fvgi inline-flex">Plus
                                        <img src={plus} alt="" width={"10"} />
                                    </span>

                                </div>
                                <div className="hidden sm:ml-6 sm:block">
                                    <div className="flex space-x-4">
                                        {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                                        <div className="flex">
                                            <label for="location-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Your Email</label>
                                            <div className="relative w-full">
                                                <input type="search" id="location-search" className="block p-2.5 h-9 w-550 z-20 text-sm text-gray-900 bg-gray-50  border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500" placeholder="Search for city or address" required />
                                                <button type="submit" className="absolute top-0 right-0 p-2.5 h-9 text-sm font-medium text-white   border   focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                                    <svg aria-hidden="true" className="w-5 h-5 search_blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                                    <span className="sr-only">Search</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <button className="login-btn ml-12">Login</button>
                                </div>
                                <div className="_3-PJz- ml-12 mb-3 font-bold">
                                    Become a Seller
                                </div>
                                <div className="drop-dwon-bg">
                                    <Select placeholder='More' className="drop-dwon-bg">
                                        <option value='option1'>Option 1</option>
                                        <option value='option2'>Option 2</option>
                                        <option value='option3'>Option 3</option>
                                    </Select>    
                                </div>
                                <div className="cart-display">
                                    <div className="mr-2 mt-1"><FaCartPlus /></div>
                                    <div>
                                        Cart
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
            <div className="drop-shadow-lg">
                <div className="header-bottom inline-flex h-28 mt-358">
                    <div className="gap-between px-6">
                        <img src={image1} alt="Grocery" className="w-16 h-16" />
                        <div className="text-display">Grocery</div>
                    </div>
                    <div className="gap-between px-6">
                        <img src={image2} alt="Grocery" className="w-16 h-16" />
                        <div className="text-display">Mobiles</div>
                    </div>
                    <div className="gap-between px-6">
                        <img src={image3} alt="Grocery" className="w-16 h-16" />
                        <div className="text-display">Fashion</div>
                    </div>
                    <div className="gap-between px-6">
                        <img src={image4} alt="Grocery" className="w-16 h-16" />
                        <div className="text-display">Electronics</div>
                    </div>
                    <div className="gap-between px-6">
                        <img src={image5} alt="Grocery" className="w-16 h-16" />
                        <div className="text-display">Home</div>
                    </div>
                    <div className="gap-between px-6">
                        <img src={image6} alt="Grocery" className="w-16 h-16" />
                        <div className="text-display">Appliances</div>
                    </div>
                    <div className="gap-between px-6">
                        <img src={image7} alt="Grocery" className="w-16 h-16" />
                        <div className="text-display">Travel</div>
                    </div>
                    <div className="gap-between px-6">
                        <img src={image8} alt="Grocery" className="w-16 h-16" />
                        <div className="text-display">Top Offers</div>
                    </div>
                    <div className="gap-between px-6">
                        <img src={image9} alt="Grocery" className="w-16 h-16" />
                        <div className="text-display">Beauty, Toys & More</div>
                    </div>
                    <div className="gap-between px-6">
                        <img src={image10} alt="Grocery" className="w-16 h-16" />
                        <div className="text-display">Two Wheelers</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
