import React from "react";

const NavButton = (props) => {
  return (
    <button
      className={`bg-primary rounded-full w-10 h-10 hover:w-12 hover:h-12 transition-width duration-150 ease-in-out text-white justify-center items-center flex ${props.className}`}
    >
      {props.children}
    </button>
  );
};

export default NavButton;
