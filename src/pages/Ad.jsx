import React from "react";
import VerticalNav from "../components/VerticalNav";
import vector from "./../assets/vector.png";
import postS1 from "./../assets/postS1.png";
import postS2 from "./../assets/postS2.png";
import postS3 from "./../assets/postS3.png";
import postS4 from "./../assets/postS4.png";
import postS5 from "./../assets/postS5.png";
import NavButton from "../components/NavButton";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Button from "../components/Button";
import Footer2 from "../components/Footer2";
import imac from "./../assets/imac.png";

export const Ad = (props) => {
  return (
    <div className="  bg-black w-full h-[930px] overflow-hidden">
      {props.children}
      <div className="absolute">
        <img
          src={imac}
          className="w-[658px] h-[553px] mt-[290px] ml-[870px] z-10"
        />
      </div>
      <NavButton className="absolute mt-[90px] ml-[355px]">
        <AiOutlineArrowLeft className="w-5 h-5" />
      </NavButton>
      <span className=" absolute font-normal text-white text-[14px] leading-[19px] text-opacity-80 mt-[100px] ml-[415px]">
        назад
      </span>
      <VerticalNav className="absolute ml-[98px] mt-[185px] z-10" />
      <img
        src={vector}
        className=" absolute w-[316px] h-[221px] mt-[405px] right-[1250px] z-1"
      />

      <span className=" absolute font-bold text-[89px] leading-[120px] text-white ml-[310px] mt-[190px]">
        Реклама
      </span>
      <Button className=" absolute bg-primary  text-[16px] text-white flex font-inter py-[0px] px-[15px] ml-[560px] mt-[300px]  w-[129px] h-[26px]">
        Что входит&nbsp;
      </Button>

      <ul className=" absolute text-white font-normal text-[18px] leading-[24px] text-opacity-80 ml-[320px] mt-[370px] list-disc ">
        <li className="pb-[14px]">
          Углублённая настройка таргетированной и контекстой рекламы.
        </li>
        <li className="pb-[14px]">Визуальное оформление продающих креативов</li>
        <li className="pb-[14px]">Креативы в формате видео</li>
        <li className="pb-[14px]">Анализ рекламы конкурентов</li>
        <li>Рекламный отчёт</li>
      </ul>
      <Button className=" absolute font-semibold bg-primary text-[15px] text-white font-inter mt-[650px] ml-[320px] w-[252px] h-[43px]">
        Рассчитать стоимость
      </Button>

      <Footer2 className=" absolute mt-[815px] ml-[700px]  " />
    </div>
  );
};

export default Ad;
