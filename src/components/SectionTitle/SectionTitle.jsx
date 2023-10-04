import React from "react";

const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="text-center my-10 md:w-4/12 mx-auto  font-semibold">
      <p className="text-amber-400 text-xl ">{subHeading}</p>
      <h2 className="py-4 text-4xl  border-y-4  text-zinc-700 uppercase">
        {heading}
      </h2>
    </div>
  );
};

export default SectionTitle;
