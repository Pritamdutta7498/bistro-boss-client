import React from "react";
import { Helmet } from "react-helmet-async";
import useCart from "../../hooks/useCart";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

const MyCart = () => {
  const [cart] = useCart();
  // console.log(cart[1].price);
  const totalPrice = cart.reduce((sum, item) => item.price + sum, 0);
  console.log(totalPrice);
  return (
    <>
      <Helmet>
        <title>Bistro Boss | My Cart</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <SectionTitle heading="wanna add more?" subHeading="My Cart" />

      <div className="w-[972px] h-[972px] flex  justify-between p-10 " >
        <h2 className="text-3xl font-bold">TOTAL ORDERS: {cart.length}</h2>
        <p className="text-3xl font-bold">TOTAL PRICE: ${totalPrice}</p>
       <button className="btn btn-info text-white font-bold">PAY</button>

      </div>      
    </>
  );
};

export default MyCart;
