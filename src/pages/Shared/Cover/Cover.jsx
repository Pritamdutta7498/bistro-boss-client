import React from "react";

const Cover = ({img, title}) => {
  return (
    <div
      className="hero h-[600px]"
      style={{
        backgroundImage:
          `url("${img}")`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-2xl p-10 bg-black bg-opacity-40 rounded-md">
          <h1 className="text-5xl font-bold text-white uppercase my-2">{title}</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, mollitia velit veniam facere quisquam accusantium vero, explicabo consectetur aliquam molestias voluptatum laudantium, saepe accusamus quod sunt veritatis ad culpa iusto.</p>
        </div>
      </div>
    </div>
  );
};

export default Cover;
