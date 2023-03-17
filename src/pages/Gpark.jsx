import React from "react";
import Navbar from "./../components/Navbar";
import Button from "./../components/Button";
import Background from "./../assets/background.png";
import gPark from "./../assets/gPark.png";
import redHouse from "./../assets/redHouse.png";
import redLine from "./../assets/redLine.png";
import inst from "./../assets/inst.png";
import shadowInst from "./../assets/shadowInst.png";
import arrowCurved from "./../assets/arrowCurved.png";
import BMCNav from "./../assets/BMCNav.png";
import CheckButton from "../components/CheckButton";
import Helsinki from "./../assets/Helsinki.png";
import Stockholm from "./../assets/Stockholm.png";
import ways from "./../assets/ways.png";
import Parking from "./../assets/Parking.png";
import { useState } from "react";
import Slider from "./../components/Slider";
import graySquare from "./../assets/graySquare.png";
import Footer from "./../components/Footer";

export const Gpark = (props) => {
  const [value, setValue] = useState(0);
  return (
    <>
      <div className="bg-black w-[1953px] h-[2200px]">
        <div
          className={`h-[483px] w-[1600px] absolute bg-primary ${props.className}`}
        >
          <div className="absolute text-white ml-[510px] mt-[120px]">
            <div>Постов</div>
            <div>200+</div>
          </div>

          <div className="absolute text-white ml-[510px] mt-[280px]">
            <div>Stories</div>
            <div>500+</div>
          </div>

          <img
            src={gPark}
            className=" absolute w-[185px] h-[185px] ml-[817px] mr-[642px] mt-[322px] mb-[43px] z-10"
          />

          <div className=" absolute font-medium text-white text-[54px]  leading-[58px] tracking-[4.6px] border-solid border-white border-opacity-[22px] rounded-[1px] ml-[1300px]">
            <div
              className=" "
              style={{
                WebkitTextStroke: "1px rgba(255, 255, 255, 0.22)",
                WebkitTextFillColor: "transparent",
              }}
            >
              SMM
            </div>

            <div
              className="text-transparent pt-[5px] pb-[5px]"
              style={{
                WebkitTextStroke: "1px rgba(255, 255, 255, 0.22)",
                WebkitTextFillColor: "transparent",
              }}
            >
              SMM
            </div>

            <div
              className="text-transparent  pt-[5px] pb-[5px]"
              style={{
                WebkitTextStroke: "1px rgba(255, 255, 255, 0.22)",
                WebkitTextFillColor: "transparent",
              }}
            >
              SMM
            </div>

            <div
              className="text-transparent  pt-[5px] pb-[5px]"
              style={{
                WebkitTextStroke: "1px rgba(255, 255, 255, 0.22)",
                WebkitTextFillColor: "transparent",
              }}
            >
              SMM
            </div>

            <div>SMM</div>
          </div>

          {props.children}
        </div>
        <div className="absolute  ml-[400px] mr-[600px] mb-[1335px] mt-[700px] text-white z-10 w-[719px] h-[76px]">
          <p className="non-italic font-bold text-[30px] leading-[38px]">
            Разработка новой &nbsp;
            <img src={redHouse} className="w-[42px] h-[30px] inline-block" />
            айдентики <br />
            для инстаграма &nbsp;
            <img src={redLine} className=" w-[12px] inline-block" /> и принцип
            наследственности
          </p>
        </div>
        <div className="absolute text-white mr-[600px] ml-[400px] mb-[1178px] mt-[830px] z-10 w-[550px] h-[220px] non-italic font-normal text-[16px] leading-[20px]">
          <p>
            У каждой истории есть начало, и наше сотрудничество с G-Park
            <br />
            стала примером работы двух профессионалов своего дела. G-park
            <br />
            показывает своим клиентам то, как должны и могут выглядеть
            <br />
            современная застройка, качественный менеджмент и рабочая система,
            дающая результат. А мы, люди, команда, которая умеет
            <br />
            это показывать.
            <br />
            <br />
            Опираясь на наш опыт, мы использовать простые методы подачи
            <br />
            информации и показывали людям не просто картинки,
            <br />а действительно крутые фишки в игровых, познавательных и даже
            <br />
            шуточных форматах.
          </p>
        </div>
        <img
          src={inst}
          className=" absolute w-[257px] h-[491px]  ml-[950px] mt-[870px] z-10"
        />
        <img
          src={shadowInst}
          className=" absolute w-[235px] h-[450px] ml-[1165px] mt-[866px] z-1 "
        />
        <img
          src={arrowCurved}
          className=" absolute w-[117px] h-[117px] ml-[1107.5px] mt-[780px]"
        />
        <div className="absolute bg-white w-[1641px] h-[123px] mt-[1320px] ">
          <div className="absolute bg-primary w-[1808px] h-[25px] my-12 ">
            <img src={BMCNav} className="absolute mt-1 z-10" />
          </div>
        </div>
        <div className="absolute z-29">
          <img src={Helsinki} className=" mt-[1416px] ml-[300px]   z-10" />
        </div>
        <div className="absolute">
          <img src={Stockholm} className=" mt-[1416px] ml-[580px] z-10" />
        </div>
        <div className="absolute z-29">
          <img src={ways} className=" mt-[1700px] ml-[300px] z-10" />
        </div>
        <div className="absolute z-29">
          <img src={Parking} className=" mt-[1700px] ml-[580px] z-10" />
        </div>
        <div className="absolute text-white font-normal text-[20px] leading-[25px] non-italiic text-opacity-80 mt-[1550px] ml-[980px]">
          Специально для застройщиков
        </div>
        <div className=" absolute text-white w-[419px] h-[138px] font-medium leading-[69px] text-[64px] mt-[1580px] ml-[980px] ">
          Social Media
          <br />
          Design
        </div>
        <Button className=" absolute font-semibold bg-primary text-white font-inter mt-[1855px] ml-[980px]">
          Рассчитать стоимость
        </Button>
        <Button className=" absolute rounded-md bg-transparent text-zinc-400 font-normal px-6 py-2 flex items-center justify-center border-white border mt-[1770px] ml-[980px]">
          Больше примеров
        </Button>
        <Slider value={20} className=" mt-[1920px] ml-[980px]" />
        <Slider onChange={(e) => setValue(e.target.value)} value={value} />

        <div className=" absolute w-[10px] h-[10px]  mt-[1965px] ml-[1200px]">
          <img src={graySquare} className="" />
        </div>

        <div className=" absolute w-[10px] h-[10px]  mt-[1965px] ml-[1260px]">
          <img src={graySquare} className="" />
        </div>

        <div className=" absolute w-[10px] h-[10px]  mt-[1965px] ml-[1320px]">
          <img src={graySquare} className="" />
        </div>

        <div className=" absolute w-[10px] h-[10px]  mt-[1965px] ml-[1380px]">
          <img src={graySquare} className="" />
        </div>

        <div className="absolute inset-0 ml-[780px] mt-[282px]">
          <div className="bg-primary w-64 h-64 rounded-full "></div>
        </div>

        <Footer className=" absolute mt-[2060px] ml-[545px]  " />
      </div>
    </>
  );
};
