import React from "react";
import Background from "./../assets/background.png";
import { ShowcasePic } from "../components/ShowcasePic";

export const Exp = (props) => {
  return (
    <div
      class={`select-none relative h-[2609px] w-full ${props.className}`}
      style={{ backgroundImage: `url(${Background})` }}
    >
      {props.children}
      <span className="absolute text-white text-8xl ml-[90px] mt-[150px] font-bold">
        Немного о нашем опыте
      </span>
      <div className="absolute mt-[270px] ml-[790px]">
        <ShowcasePic />
      </div>
      <span className="absolute mt-[400px] ml-[90px] text-white text-9xl font-bold">
        700+
      </span>
      <span className="absolute mt-[550px] ml-[90px] text-white text-4xl font-normal">
        Отснятых видеороликов и <br /> фотосессий
      </span>
      <span className="absolute mt-[1000px] ml-[90px] text-white text-9xl font-bold">
        80+
      </span>
      <span className="absolute mt-[1150px] ml-[90px] text-white text-4xl font-normal">
        Разработано фирменных <br /> стилей и Web-сайтов
      </span>
      <span className="absolute mt-[1600px] ml-[90px] text-white text-9xl font-bold">
        60+
      </span>
      <span className="absolute mt-[1750px] ml-[90px] text-white text-4xl font-normal">
        Оформленных и продвинутых <br /> бизнес-аккаунтов
      </span>
      <span className="absolute mt-[2050px] ml-[90px] text-white text-9xl font-bold">
        10+
      </span>
      <span className="absolute mt-[2200px] ml-[90px] text-white text-4xl font-normal">
        Реализованных маркетинг- <br /> стратегий
      </span>
    </div>
  );
};
