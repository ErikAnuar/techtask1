import React from "react";
import Navbar from "./../components/Navbar";
import Button from "./../components/Button";
import Background from "./../assets/background.png";

export const Onthewaytocase = (props) => {
  return (
    <>
      <div
        className={`select-none h-screen w-full ${props.className}`}
        style={{ backgroundImage: `url(${Background})` }}
      >
        {props.children}
        <h1 className="ml-[87px] mt-[115px] absolute text-white font-bold text-7xl text-left leading-snug">
          Недостающий <br /> элемент вашего <br /> бизнеса
        </h1>
      </div>
    </>
  );
};
