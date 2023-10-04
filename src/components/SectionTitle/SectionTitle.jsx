import React from "react";

const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="text-center my-10">
      <p className="text-amber-400 font-semibold text-xl ">{subHeading}</p>

      <hr className="border-b-4 w-2/6 mx-auto" />

      <h2 className="py-4 text-4xl font-semibold text-zinc-700 uppercase">{heading}</h2>
      <hr className="border-b-4 w-2/6 mx-auto" />

    </div>
  );
};

export default SectionTitle;
