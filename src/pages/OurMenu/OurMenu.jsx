import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../Shared/Cover/Cover';
import menuImg from '../../assets/menu/banner3.jpg';
import dessertImg from '../../assets/menu/dessert-bg.jpeg';
import saladImg from '../../assets/menu/salad-bg.jpg';
import PopularMenu from '../Home/PopularMenu/PopularMenu';

const OurMenu = () => {
  return (
    <div className='py-20'>
      <Helmet>
        <title>Bistro Boss | Menu</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <Cover img={menuImg} title={"Our Menu"}/>
      {/* for test we use the popular menu section*/}
      <PopularMenu/>
      <Cover img={dessertImg} title={"Our Menu Dessert"}/>
      <PopularMenu/>
      <Cover img={saladImg} title={"Our Menu salad"}/>


    </div>
  );
};

export default OurMenu;
