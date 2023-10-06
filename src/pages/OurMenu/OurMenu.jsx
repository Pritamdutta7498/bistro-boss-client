import React from "react";
import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import menuImg from "../../assets/menu/banner3.jpg";
import dessertImg from "../../assets/menu/dessert-bg.jpeg";
import saladImg from "../../assets/menu/salad-bg.jpg";
import soupImg from "../../assets/menu/soup-bg.jpg";
import pizzaImg from "../../assets/menu/pizza-bg.jpg";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import useMenu from "../../hooks/useMenu";
import MenuCategory from "./MenuCategory";

const OurMenu = () => {
  const [menu] = useMenu();
  // console.log(menu);

  // filtering specific category data from menu.json data
  const offered = menu.filter((item) => item.category === "offered");
  // console.log(offered);
  const salad = menu.filter((item) => item.category === "salad");
  const dessert = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const soup = menu.filter((item) => item.category === "soup");
  return (
    <div className="py-20">
      <Helmet>
        <title>Bistro Boss | Menu</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      {/* main cover img */}
      <Cover img={menuImg} title={"Our Menu"} />
      <SectionTitle heading="TODAY'S OFFER" subHeading="Don't miss" />
      {/* today's offer items */}
      <MenuCategory items={offered} />
      {/* desert items */}
      <MenuCategory items={dessert} coverImg={dessertImg} title={"Dessert"} />
      {/* pizza items */}
      <MenuCategory items={pizza} coverImg={pizzaImg} title={"Pizza"} />
      {/* salad items */}
      <MenuCategory items={salad} coverImg={saladImg} title={"Salad"} />
      {/* soup items */}
      <MenuCategory items={soup} coverImg={soupImg} title={"Soup"} />
    </div>
  );
};

export default OurMenu;
