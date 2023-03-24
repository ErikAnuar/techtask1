import React from "react";
import Logo from "./../assets/bmclogo.svg";
import { AiOutlineUnorderedList } from "react-icons/ai";

export const VerticalNav = (props) => {
  return (
    <nav
      className={`relative h-[680px] w-20 rounded-3xl justify-center items-center flex border-[2px] border-gray backdrop-filter backdrop-blur-lg ${props.className}`}
    >
      <img src={Logo} alt="" className="absolute top-0" />
      <ul className="text-center">
        <li className="mb-5">
          <a href="">
            <AiOutlineUnorderedList className="text-4xl text-seriy" />
          </a>
        </li>
        <li className="mb-5">
          <span
            className={`text-gray font-medium text-3xl cursor-pointer ${
              props.active === "M" && "text-white"
            }`}
            onMouseEnter={() => props.onHover("M")}
          >
            M
          </span>
        </li>
        <li className="mb-5">
          <span
            className={`text-gray font-medium text-3xl cursor-pointer ${
              props.active === "S" && "text-white"
            }`}
            onMouseEnter={() => props.onHover("S")}
          >
            S
          </span>
        </li>
        <li className="mb-5">
          <span
            className={`text-gray font-medium text-3xl cursor-pointer ${
              props.active === "P" && "text-white"
            }`}
            onMouseEnter={() => props.onHover("P")}
          >
            P
          </span>
        </li>
        <li className="mb-5">
          <span
            className={`text-gray font-medium text-3xl cursor-pointer ${
              props.active === "Pr" && "text-white"
            }`}
            onMouseEnter={() => props.onHover("Pr")}
          >
            Pr
          </span>
        </li>
      </ul>
    </nav>
  );
};
