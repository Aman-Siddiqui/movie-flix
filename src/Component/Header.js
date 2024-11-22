import React, { useState } from "react";
import Sidebar from "./Sidebar";
import MainContainer from "./MainContainer";

const Header = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 overflow-auto">
        <img
          className="  w-screen h-auto object-cover"
          alt="bgLogo"
          src="https://webneel.com/wnet/file/images/11-16/8-xmen-movie-poster-design.jpg"
        />

        <div className="absolute inset-x-0 top-0 bg-gradient-to-b pl-24 from-black to-transparent flex items-center z-10">
          <div className="flex items-center">
            <img
              className="w-28 h-32"
              alt="logo"
              src="https://png.pngtree.com/png-vector/20220319/ourmid/pngtree-mv-letter-logo-symbol-black-marketing-vector-png-image_26403324.png"
            />
          </div>

          <div className="ml-24 cursor-pointer">
            <ul className="flex space-x-8">
              <li className="text-white transform hover:scale-110 transition-transform duration-200 cursor-pointer">
                Home
              </li>
              <li className="text-white transform hover:scale-110 transition-transform duration-200 cursor-pointer">
                Movies
              </li>
              <li className="text-white transform hover:scale-110 transition-transform duration-200 cursor-pointer">
                Web Series
              </li>
              <li className="text-white transform hover:scale-110 transition-transform duration-200 cursor-pointer">
                Tv Shows
              </li>
              <li className="text-white transform hover:scale-110 transition-transform duration-200 cursor-pointer">
                Recently Added
              </li>
              <li className="text-white transform hover:scale-110 transition-transform duration-200 cursor-pointer">
                My List
              </li>
            </ul>
          </div>
        </div>

        <div className="overflow-auto">
          <MainContainer />
        </div>
      </div>
    </div>
  );
};

export default Header;
