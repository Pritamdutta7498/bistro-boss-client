import React from "react";
import featuredImg from "../../../assets/home/featured.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Feature = () => {
  return (
    <section
      style={{ background: `url(${featuredImg})` }}
      className=" bg-cover h-[650px] relative bg-center text-white  p-14 bg-opacity-50 my-10"
    >
      <div className="absolute inset-0 bg-black opacity-70 py-24">
        <SectionTitle subHeading="---Check it out---" heading="FROM OUR MENU" />
        {/* data in feature background image */}

        <div className="hero ">
          <div className="hero-content flex-col lg:flex-row gap-10">
            <img src={featuredImg} className="max-w-sm rounded-lg shadow-2xl" />
            <div className="w-[604px]">
              <h3 className="text-semibold">March 20, 2025</h3>
              <h1>Where can i get some?</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <button className=" border-b-2 border-x-2 p-3 rounded-md shadow-md uppercase hover:border-blue-500 w-4/12">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
