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
    <section>
      <SectionTitle
        subHeading={"---Check it out---"}
        heading={"FROM OUR MENU"}
      />
      <div>
        {menu.map((item) => (
          <MenuItem key={item} item={item}></MenuItem>
        ))}
      </div>
    </section>
  );
};

export default PopularMenu;
