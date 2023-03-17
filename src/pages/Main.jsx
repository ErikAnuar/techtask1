import React from "react";
import Navbar from "./../components/Navbar";
import Button from "./../components/Button";
import Background from "./../assets/background.png";
import bmcscene from "./../assets/bmcscene.mp4";

export const Main = (props) => {
  return (
    <>
      <div className={`select-none h-screen w-full ${props.className}`}>
        <video
          src={bmcscene}
          autoPlay
          muted
          loop
          className="absolute h-screen w-full object-cover"
        ></video>
        {props.children}
        <h1 className="ml-[87px] mt-[115px] absolute text-white font-bold text-7xl ml-7 mt-5 text-left leading-snug">
          Маркетинг <br /> полного цикла <br /> для застройщиков
        </h1>
      </div>
    </>
  );
};
