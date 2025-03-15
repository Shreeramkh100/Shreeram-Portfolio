import React, { useState } from 'react';
import close_menu from "./resources/close_menu.png";
import menu from "./resources/menu.png";
import header from "./header.js";
import { Link } from "react-scroll";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="flex text-white justify-around items-center relative h-[100px] w-vw  sm:mx-2 md:mx-6 lg:mx-0">
      <span className="absolute top-[61px] left-[30px] font-semibold text-2xl md:text-3xl w-[120px] h-[38px] lg:left-[110px] lg:top-[50px]">
        Portfolio
      </span>
      <img
        src={menuOpen ? close_menu : menu}
        onClick={handleMenu}
        className="absolute top-[61px] right-[30px] h-8 w-8 md:h-10 md:w-10 lg:hidden"
      />
      <div
        className={`${
          menuOpen ? "block" : "hidden"
        } flex justify-center items-center w-[191px] h-[190px] md:h-[270px] md:w-[210px] md:py-3  bg-gradient-to-tr from-[#0a030f] via-[#15141a] to-[#06110a] rounded-[10px] absolute top-28 right-16  lg:block lg:top-[10px] lg:right-[10px] lg:h-[100px] lg:bg-none lg:shadow-none lg:w-[700px] lg:mx-10 z-50`}
      >
        <ul className="flex justify-center items-center px-5 py-3 flex-col  w-full h-full  lg:flex-row  lg:justify-evenly">
          {header.map((header_item,id) => (
            <Link  key={id} to={header_item.href} smooth={true} duration={2000} key={header_item.href}>
              <li className=" flex justify-center items-center font-medium my-1  text-xl size-5 leading-4 py-3 md:py-5  lg:font-semibold hover:text-[#198FFF] cursor-pointer">
                {header_item.title}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}
// 

export default Header;
