import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import ChefService from '../ChefService/ChefService';
import PopularMenu from '../PopularMenu/PopularMenu';
import Feature from '../Feature/Feature';
import Reviews from '../Reviews/Reviews';
import Recommendation from '../Recommendation/Recommendation';

const Home = () => {
    return (
        <div>
           <Banner/>
           <Category/>
           <ChefService/>
           <PopularMenu/>
           <Recommendation/>
           <Feature/>
           <Reviews/>
        </div>
    );
};

export default Home;