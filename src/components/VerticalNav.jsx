import React from "react";
import Logo from "./../assets/bmclogo.png";
import { AiOutlineUnorderedList } from "react-icons/ai";

export const VerticalNav = () => {
  return (
    <div className="w-full h-full bg-black">
      <nav
        className={`relative h-[680px] w-20 rounded-3xl justify-center items-center flex border-[2px] border-gray backdrop-filter backdrop-blur-lg`}
      >
        <img src={Logo} alt="" className="absolute top-0" />
        <ul className="text-center">
          <li className="mb-5">
            <a href="">
              <AiOutlineUnorderedList className="text-4xl text-seriy" />
            </a>
          </li>
          <li className="mb-5">
            <span className="text-gray font-medium text-3xl cursor-pointer">
              M
            </span>
          </li>
          <li className="mb-5">
            <span className="text-gray font-medium text-3xl cursor-pointer">
              S
            </span>
          </li>
          <li className="mb-5">
            <span className="text-gray font-medium text-3xl cursor-pointer">
              P
            </span>
          </li>
          <li className="mb-5">
            <span className="text-gray font-medium text-3xl cursor-pointer">
              Pr
            </span>
          </li>
        </ul>
      </nav>
    </div>
  );
};
