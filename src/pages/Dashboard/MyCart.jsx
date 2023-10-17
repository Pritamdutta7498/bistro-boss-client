import React from "react";
import { Helmet } from "react-helmet-async";

const MyCart = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | My Cart</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <h2>My cart is here</h2>
    </div>
  );
};

export default MyCart;
