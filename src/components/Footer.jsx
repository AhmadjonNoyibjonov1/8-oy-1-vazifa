import React from 'react';
import logo from '../assets/logo.svg';
import { useSelector } from 'react-redux';

function Footer({ subscribeText }) {
    const isDarkMode = useSelector((state) => state.theme.darkMode);

    return (
        <footer className={`${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-600'} py-8 border-t-2`}>
            <div className="container mx-auto w-[1200px] flex justify-between items-center">
                <div className="flex flex-col items-start">
                    <div className="flex items-center space-x-2">
                        <div>
                            <a href='logo'>
                                <img src={logo} alt="Logo" />
                            </a>
                        </div>
                    </div>
                    <p className="mt-2">
                        Copyright © 2021 BRIX Templates | All Rights Reserved
                    </p>
                </div>

                <div className="flex items-center border border-[#EFF0F6] rounded-[60px] pt-3 pb-3 pr-[17px] pl-6 shadow-md">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className={`p-3 rounded-full ${isDarkMode ? 'border-gray-700 bg-gray-800 text-white' : 'border-gray-200 bg-white text-black'} overflow-none focus:outline-none outline-none w-64`}
                    />
                    <button className="ml-2 px-6 py-3 rounded-full bg-[#4E20FF] text-white font-bold shadow-md hover:bg-purple-700 transition duration-300">
                       Subscribe {subscribeText}
                    </button>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
