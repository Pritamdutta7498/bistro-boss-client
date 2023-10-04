import React from "react";
import featuredImg from "../../../assets/home/featured.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Feature = () => {
  return (
    <section
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${featuredImg})`,
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        
      }}
      className="text-white font-semibold p-14 my-10"
    >
      <SectionTitle subHeading="---Check it out---" heading="FROM OUR MENU" />
      {/* data in feature background image */}

      <div className="hero">
        <div className=" hero-content flex-col lg:flex-row gap-10">
          <img src={featuredImg} className="max-w-sm rounded-lg shadow-2xl" />
          <div className="w-[604px]">
            <h3 className="text-semibold">March 20, 2025</h3>
            <h1>Where can I get some?</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className=" border-b-4 border-x-2 p-3 rounded-md shadow-md uppercase hover:border-blue-500 w-4/12">
              Read More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
