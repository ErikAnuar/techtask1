import React from "react";
import Vector22 from "./../assets/Vector22.svg";
import { VerticalNav } from "../components/VerticalNav";

export const Marketing = (props) => {
  return (
    <div className="relative h-[900px] w-[1600px] bg-interestingdark">
      {props.children}
      <img
        src={Vector22}
        alt=""
        className="absolute w-[316px] h-[221px] mt-[310px]"
      />
      <div className="absolute mt-[150px]">
        <VerticalNav className="absolute ml-[125px] w-[74px] h-[674px] cursor-pointer" />
      </div>
      <span className="absolute text-white text-[89px] font-bold mt-[115px] ml-[330px]">
        Маркетинг
      </span>
      <div className="absolute  mt-[293px] ml-[330px] ">
        <span className="text-[33px] medium text-white">
          Не знаете как выйти <br /> на рынок удачнее?
        </span>
        <br />
        <span
          className="text-xl light text-seriy"
          style={{ display: "block", marginTop: "15px" }}
        >
          Предоставим вам детальную аналитику <br /> по каждому застройщику, по
          каждому объекту <br /> в каждом городе, которая регулярно <br />{" "}
          обновляется.
        </span>
      </div>
    </div>
  );
};
