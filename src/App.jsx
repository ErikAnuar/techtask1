import "./App.css";
import Button from "./components/Button";
import NavButton from "./components/NavButton";
import Slider from "./components/Slider";
import { useState } from "react";

const App = () => {
  const [value, setValue] = useState(0);
  return (
    <div className="w-full flex justify-center items-center gap-2">
      <Button className="bg-primary text-white">Рассчитать стоимость</Button>
      <Button className=" text-primary">заказать звонок</Button>
      <Button className="text-primary border-primary border hover:bg-primary hover:text-white">
        оформить заявку
      </Button>
      <Slider value={20} />
      <Slider onChange={(e) => setValue(e.target.value)} value={value} />
      <NavButton />
    </div>
  );
};

export default App;
