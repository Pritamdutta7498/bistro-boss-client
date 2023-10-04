import React, { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        // filtering the "popular" category data
        const popularItem = data.filter((item) => item.category == "popular");
        setMenu(popularItem);
      });
  }, []);
  return (
    <section className="my-10">
      <SectionTitle
        subHeading={"---Check it out---"}
        heading={"FROM OUR MENU"}
      />
      <div className="grid md:grid-cols-2 gap-10">
        {menu.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="flex justify-center ">
        <button className="btn border-b-4 border-x-2 p-3 rounded-md shadow-md uppercase my-5 w-2/5">
          View full menu
        </button>
      </div>
    </section>
  );
};

export default PopularMenu;
