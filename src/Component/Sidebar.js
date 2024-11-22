import React, { useState } from "react";
import { IoHomeOutline, IoSearch } from "react-icons/io5";
import { TbArrowsShuffle } from "react-icons/tb";
import { IoIosTrendingUp } from "react-icons/io";
import { BsTv } from "react-icons/bs";
import { PiFilmSlate } from "react-icons/pi";
import { LuShapes } from "react-icons/lu";

const Sidebar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleHoverEnter = () => {
    setIsMenuOpen(true);
  };

  const handleHoverLeave = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="flex h-screen">
      <div
        className={`h-full bg-black text-white transition-all duration-300 ease-in-out ${
          isMenuOpen ? "w-[150px]" : "w-[70px]"
        } sticky top-0`}
        onMouseEnter={handleHoverEnter}
        onMouseLeave={handleHoverLeave}
      >
        {/* List of icons */}
        <ul className="flex flex-col items-center justify-center h-full space-y-6">
          <li>
            <IoSearch className="text-3xl m-1" />
          </li>
          <li>
            <IoHomeOutline className="text-3xl m-1" />
          </li>
          <li>
            <TbArrowsShuffle className="text-3xl m-1" />
          </li>
          <li>
            <IoIosTrendingUp className="text-3xl m-1" />
          </li>
          <li>
            <BsTv className="text-3xl m-1" />
          </li>
          <li>
            <PiFilmSlate className="text-3xl m-1" />
          </li>
          <li>
            <LuShapes className="text-3xl m-1" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
