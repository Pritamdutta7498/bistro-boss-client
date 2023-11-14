import React from "react";
import { Helmet } from "react-helmet-async";
import useCart from "../../hooks/useCart";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { AiOutlineDelete } from "react-icons/ai";

const MyCart = () => {
  const [cart] = useCart();
  console.log(cart[0]);
  // console.log(cart[1].price);
  const totalPrice = cart.reduce((sum, item) => item.price + sum, 0);
  // console.log(totalPrice);
  return (
    <>
      <Helmet>
        <title>Bistro Boss | My Cart</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <SectionTitle heading="wanna add more?" subHeading="My Cart" />

      <div className=" text-3xl font-bold flex  justify-evenly ">
        <h2>TOTAL ORDERS: {cart.length}</h2>
        <p>TOTAL PRICE: ${totalPrice}</p>
        <button className="btn btn-info text-white font-bold">PAY</button>
      </div>

      {/* table data */}
      <div className="overflow-x-auto mt-5 px-10">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="bg-stone-400 font-bold uppercase">
              <th>#</th>
              <th>Food</th>
              <th>Item Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={item.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <p className="font-bold">{item.name}</p>
                    </div>
                  </div>
                </td>
                <td>{item.name}</td>
                <td> ${item.price}</td>
                <td>
                  <button className="btn btn-ghost hover:bg-red-400 hover:text-white">
                    <AiOutlineDelete className="text-2xl cursor-pointer " />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default MyCart;
