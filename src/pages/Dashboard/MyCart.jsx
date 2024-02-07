import React from "react";
import { Helmet } from "react-helmet-async";
import useCart from "../../hooks/useCart";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { AiOutlineDelete } from "react-icons/ai";
import Swal from "sweetalert2";

const MyCart = () => {
  const [cart, refetch] = useCart();
  // console.log(cart[0]);
  // console.log(cart[1].price);
  const totalPrice = cart.reduce((sum, item) => item.price + sum, 0);
  // console.log(totalPrice);

  // handle delete item from cart
  const handleDelete = (item) => {
    // console.log(item);
    //
    Swal.fire({
      title: "Are you sure?",
      text: "This item has been deleted form cart!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/carts/${item._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };
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
                  <button
                    onClick={() => handleDelete(item)}
                    className="btn btn-ghost bg-red-300 hover:bg-red-500 hover:text-white"
                  >
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
