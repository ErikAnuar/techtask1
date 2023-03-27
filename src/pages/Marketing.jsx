import React from "react";
import Vector22 from "./../assets/Vector22.svg";
import Rectangle910 from "./../assets/rectangle910.png";
import Rectangle914 from "./../assets/rectangle914.png";
import Union from "./../assets/union.png";
import Layer20 from "./../assets/layer20.png";
import Layer21 from "./../assets/layer21.png";
import Layer22 from "./../assets/layer22.png";
import zerotwo from "./../assets/02.png";
import rightblock from "./../assets/rightblock.png";
import Rightside from "./../assets/rightside.png";
import { VerticalNav } from "../components/VerticalNav";
import Button from "../components/Button";
import Slider from "../components/Slider";

export const Marketing = (props) => {
  return (
    <div className="select-none relative">
      <div className="relative h-[900px] w-[full] bg-interestingdark ">
        {props.children}
        <img
          src={Vector22}
          alt=""
          className="absolute w-[316px] h-[221px] mt-[310px]"
        />
        <div className="absolute mt-[80px]">
          <VerticalNav className="absolute ml-[125px] w-[74px] h-[633px] cursor-pointer fixed-navbar z-30" />
        </div>
        <span className="absolute text-white text-[89px] font-bold mt-[115px] ml-[330px]">
          Маркетинг
        </span>
        <div className="absolute mt-[293px] ml-[330px] ">
          <span className="text-[33px] medium text-white">
            Не знаете как выйти <br /> на рынок удачнее?
          </span>
          <br />
          <span
            className="text-xl light text-seriy"
            style={{ display: "block", marginTop: "15px" }}
          >
            Предоставим вам детальную аналитику <br /> по каждому застройщику,
            по каждому объекту <br /> в каждом городе, которая регулярно <br />{" "}
            обновляется.
          </span>
          <br />
          <span class="text-xl font-bold text-seriy">BIG DATA </span>
          <span class="text-xl light text-seriy">
            это то, с чем мы работаем за вас.
          </span>
        </div>
        <img
          src={Rectangle914}
          alt=""
          className="absolute w-[257px] h-[316px] -bottom-6 ml-[330px] shadow-gray-900"
        />
        <div className="w-2 h-2 bg-primary opacity-20 absolute ml-[360px] bottom-[247px] rounded-full"></div>
        <span className="text-primary medium text-4 opacity-30 absolute ml-[375px] bottom-60">
          город
        </span>
        <div className="bottom-16 absolute ml-[360px]">
          <span className="text-primary font-medium text-[28px]">Астана</span>{" "}
          <br />
          <span className="text-primary light text-[28px] opacity-60">
            Алматы
          </span>{" "}
          <br />
          <span className="text-primary light text-[28px] opacity-60">
            Костанай
          </span>{" "}
          <br />
          <span className="text-primary light text-[28px] opacity-60">
            Актобе
          </span>{" "}
          <br />
        </div>
        <span className="text-primary light text-[28px] opacity-60 -bottom-4 absolute ml-[360px]">
          Шымкент
        </span>

        <img
          src={Rectangle910}
          alt=""
          className="absolute w-[298px] h-[328px] text-navColor -bottom-6 ml-[530px] filter drop-shadow-md"
        />
        <div className="-bottom-2 absolute ml-[652px] z-20">
          <span className="text-primary light text-[26px] opacity-60">
            BI Group
          </span>{" "}
          <br />
          <span className="text-primary medium text-[26px]">G-park</span> <br />
          <span className="text-primary light text-[26px] opacity-60">
            BAZIS-A
          </span>{" "}
          <br />
          <span className="text-primary light text-[26px] opacity-60">
            NAK
          </span>{" "}
          <br />
          <span className="text-primary light text-[26px] opacity-60">
            ORDA
          </span>{" "}
          <br />
          <span className="text-primary light text-[26px] opacity-60">
            INVEST
          </span>{" "}
        </div>
        <div className="absolute w-6 h-6 bg-primary bottom-[155px] ml-[621px] z-20 rounded-full">
          <img
            src={Layer20}
            alt=""
            className="absolute w-4 h-4 bg-primary z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 "
          />
        </div>
        <img
          src={Layer21}
          alt=""
          className="w-14 h-7 absolute bottom-[193px] ml-[605px] z-20"
        />
        <img
          src={Layer22}
          alt=""
          className="w-8 h-6 absolute bottom-[116px] ml-[617px] z-20"
        />
        <div className="w-2 h-2 bg-primary opacity-20 absolute ml-[620px] bottom-[247px] rounded-full"></div>
        <span className="text-primary medium text-4 opacity-30 absolute ml-[635px] bottom-[240px]">
          Застройщик
        </span>
        <img
          src={Union}
          alt=""
          className="absolute w-[761px] h-[414px] bottom-0 right-[165px]"
        />
        <img
          src={Rightside}
          alt=""
          className="absolute w-[721px] h-[400px] bottom-0 right-44"
        />
        <Button className="absolute bg-primary text-white font-inter bottom-4 left-64 py-0">
          Рассчитать стоимость
        </Button>
      </div>
      <div className="relative h-[330px] w-full bg-white z-40">
        <span className="absolute ml-[330px] medium text-black text-[33px] mt-[70px]">
          Структуризация <br /> и стратегия
        </span>
        <span className="absolute ml-[330px] light text-black text-5 mt-[170px]">
          на основе массива данных <br /> мы разрабатываем стратегию для <br />{" "}
          отдела продаж и в режиме <br /> реального времени корректируем <br />{" "}
          её в зависимости от условий рынка
        </span>
        <img
          src={zerotwo}
          alt=""
          className="absolute w-[203px] h-[120px] ml-[225px] mt-[50px]"
        />
        <img
          src={rightblock}
          alt=""
          className="absolute right-0 w-[700px] h-[252px] top-12"
        />
      </div>
      <div className="relative h-[900px] w-full bg-interestingdark z-28">
        <img
          src={Vector22}
          alt=""
          className="absolute w-[316px] h-[221px] mt-[310px]"
        />
        <span className="absolute text-white text-[89px] medium ml-[300px] mt-[50px]">
          Мир это данные
        </span>
      </div>
    </div>
  );
};
