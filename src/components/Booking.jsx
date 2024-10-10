import React from 'react';
import { FaHome, FaBook, FaRegCalendarAlt, FaBed, FaHistory, FaCog } from 'react-icons/fa';
import { Bell, Search, ChevronDown } from 'lucide-react';
import logo from "../assets/logo_png.png";
import img from '../assets/girl.webp';


const  Booking= () => {
    return (
        <div className="flex min-h-screen bg-gray-100">
            {/* Sidebar Logo */}
            <section className=' flex flex-col'>
                <div className="flex items-center justify-center mb-8">
                    <img src={logo} alt="Logo" className="h-24" /> {/* Adjust height as needed */}
                </div>
                <aside className="w-[330px] bg-white p-6 border-r rounded-3xl mx-6 h-[500px]">

                    {/* Sidebar Links with Icons */}
                    <nav className="space-y-4 ">
                        <a href="#" className="flex items-center space-x-3 text-orange-500 bg-gray-100 p-2 rounded-lg">
                            <FaHome className="text-lg" /> {/* Home icon */}
                            <span>Home</span>
                        </a>
                        <a href="#" className="flex items-center space-x-3 p-2">
                            <FaBook className="text-lg" /> {/* Booking icon */}
                            <span>Booking</span>
                        </a>
                        <a href="#" className="flex items-center space-x-3 p-2">
                            <FaRegCalendarAlt className="text-lg" /> {/* Reservation icon */}
                            <span>Reservation</span>
                        </a>
                        <a href="#" className="flex items-center space-x-3 p-2">
                            <FaBed className="text-lg" /> {/* Rooms icon */}
                            <span>Rooms</span>
                        </a>
                        <a href="#" className="flex items-center space-x-3 p-2">
                            <FaHistory className="text-lg" /> {/* Guest History icon */}
                            <span>Guest History</span>
                        </a>
                    </nav>

                    {/* Calendar Section */}
                    <div className="mt-12 bg-purple-50 p-4 rounded-2xl text-center">
                        <h3 className="text-lg font-medium mb-2">Mon, Aug 17</h3>
                        <div className="bg-white p-4 rounded-lg">
                            <input type="date" className="bg-white p-2 rounded-md w-full" />
                        </div>
                    </div>

                    
                </aside>
                {/* Settings and Sign Out */}
                <div className="flex justify-between items-center mt-4 bg-white w-[330px] border-r rounded-3xl mx-6 h-[60px]">
                        <button className="w-12 h-12 bg-purple-500 text-white rounded-full flex justify-center items-center ml-2">
                            <FaCog className="text-lg" />
                        </button>
                        <button className="w-40 bg-red-500 text-white p-2 rounded-full mr-2">
                            Sign out
                        </button>
                    </div>
            </section>

            {/* Main Content */}
            <main className="flex-1 p-6">
                {/* Header */}
                <nav className="bg-white px-4 py-2 shadow-sm rounded-3xl mt-8">
                    <div className="max-w-7xl mx-auto flex items-center justify-between">
                        {/* Search Bar */}
                        <div className="relative flex-1 max-w-md">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Search Here by Name"
                                    className="w-full pl-4 pr-10 py-2 border rounded-3xl focus:outline-none focus:ring-1 focus:ring-green-500"
                                />
                                <button className="absolute right-2 top-1/2 -translate-y-1/2">
                                    <Search className="h-5 w-5 text-gray-400" />
                                </button>
                            </div>
                        </div>

                        {/* Navigation Items */}
                        <div className="flex items-center ">
                            {/* Notification Bell */}
                            <div className="relative right-[60px]">
                                <Bell className="h-6 w-6 text-gray-600" />
                                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                                    15
                                </span>
                            </div>

                            {/* New Booking Button */}
                            <button className="bg-green-500 text-white px-4 py-1 rounded-3xl hover:bg-green-600 mr-[150px]">
                                New Booking
                            </button>
                            <p className='bg-gray-300 px-3 py-1 rounded mx-6'>9:41AM</p>

                            {/* User Profile */}
                            <div className="flex items-center gap-2">
                                <img
                                    src={img}
                                    alt="User avatar"
                                    className="h-8 w-8 rounded-full"
                                />
                                <div className="hidden md:block">
                                    <p className="text-sm font-medium">Revathi</p>
                                    <p className="text-xs text-gray-500">Admin Staff</p>
                                </div>
                                <ChevronDown className="h-4 w-4 text-gray-500" />
                            </div>
                        </div>
                    </div>
                </nav>

                {/* Guest List Table */}
                <section>
               <table className="min-w-full bg-white rounded-lg shadow-md mt-4">
                
                        <thead>
                            <tr>
                                <th className="p-4 text-left">Bk. No</th>
                                <th className="p-4 text-left">Name</th>
                                <th className="p-4 text-left">Room No</th>
                                <th className="p-4 text-left">Room Type</th>
                                <th className="p-4 text-left">Check In</th>
                                <th className="p-4 text-left">Check Out</th>
                                <th className="p-4 text-left">Total Amount</th>
                                <th className="p-4 text-left">Due Amount</th>
                                <th className="p-4 text-left">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Sample Data */}
                            <tr className="border-t">
                                <td className="p-4">M01</td>
                                <td className="p-4">Raja Ganapathi</td>
                                <td className="p-4">27</td>
                                <td className="p-4 text-orange-500">Single Bed</td>
                                <td className="p-4">Sep 18, 8:00am</td>
                                <td className="p-4">-</td>
                                <td className="p-4">Rs.1500</td>
                                <td className="p-4">Rs.1000</td>
                                <td className="p-4">Pending</td>
                            </tr>
                            {/* Repeat for other rows */}
                        </tbody>
                    </table>
                </section>
            </main>
        </div>
    );
};

export default Booking;
