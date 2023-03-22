import React from "react";

const Slider = ({ value, onChange, min, max, step, className }) => {
  return (
    <input
      onChange={onChange}
      type="range"
      className={`cursor-pointer appearance-none in-range:bg-primary rounded-2xl accent-primary ${className}`}
      min={min}
      max={max}
      value={value}
      step={step}
    />
  );
};

export default Slider;
