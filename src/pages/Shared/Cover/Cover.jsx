import React from "react";
import { Parallax } from "react-parallax";

const Cover = ({ img, title }) => {
  return (
    <Parallax
      blur={{ min: -15, max: 15 }}
      bgImage={img}
      bgImageAlt="the img"
      strength={-200}
    >
      <div className="hero h-[600px] bg-no-repeat">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-2xl p-10 bg-black bg-opacity-40 rounded-md">
            <h1 className="text-5xl font-bold text-white uppercase my-2">
              {title}
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Expedita, mollitia velit veniam facere quisquam accusantium vero,
              explicabo consectetur aliquam molestias voluptatum laudantium,
              saepe accusamus quod sunt veritatis ad culpa iusto.
            </p>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;
