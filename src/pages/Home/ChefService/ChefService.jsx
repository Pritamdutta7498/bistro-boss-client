import React from "react";

import chefImg from "../../../assets/home/chef-service.jpg";
const ChefService = () => {
  return (
    <div
      style={{ backgroundImage: `url(${chefImg})` }}
      className="w-full bg-cover h-[600px]  flex justify-center items-center  mx-auto mb-10"
    >
      <div className="bg-white w-4/5 h-3/5 text-center p-20 ">
        <h2 className="text-4xl font-semibold font-serif text-zinc-700">
          Bistro Boss Restaurant
        </h2>
        <p className="w-4/5 mx-auto my-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus, libero accusamus laborum deserunt ratione dolor
          officiis praesentium! Deserunt magni aperiam dolor eius dolore at,
          nihil iusto ducimus incidunt quibusdam nemo.
        </p>
      </div>
    </div>
  );
};

export default ChefService;
