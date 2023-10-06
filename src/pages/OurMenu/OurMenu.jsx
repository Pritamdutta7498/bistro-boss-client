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
  const offered = menu.filter(item =>item.category === "offered");
  // console.log(offered);
  const salad = menu.filter(item =>item.category === "salad");
  const dessert = menu.filter(item =>item.category === "dessert");
  const pizza = menu.filter(item =>item.category === "pizza");
  const soup = menu.filter(item =>item.category === "soup");
  return (
    <div className="py-20">
      <Helmet>
        <title>Bistro Boss | Menu</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <Cover img={menuImg} title={"Our Menu"} />
      <SectionTitle heading="TODAY'S OFFER" subHeading="Don't miss"/>
      <MenuCategory items={offered}/>
      {/* for dessert */}
      <Cover img={dessertImg} title={"Dessert"} />
      <MenuCategory items={dessert}/>
      {/* for pizza */}
      <Cover img={pizzaImg} title={"Pizza"} />
      <MenuCategory items={pizza}/>
      {/* for salad */}
      <Cover img={saladImg} title={"Salad"} />
      <MenuCategory items={salad}/>
      {/* for soup */}
      <Cover img={soupImg} title={"Soup"} />
      <MenuCategory items={soup}/>



 
    </div>
  );
};

export default OurMenu;
