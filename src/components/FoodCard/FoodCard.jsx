import React from "react";

const FoodCard = ({ item }) => {
  const { name, recipe, image, price } = item;
  

  return (
    <div className="card w-96 h-[600px] bg-base-100 shadow-xl">
      <img
        src={image}
        className="img-fluid h-96 object-cover rounded-t-2xl"
        alt=""
      />
      <p className="absolute py-5 px-10 rounded-md right-0 top-8 badge badge-warning font-semibold shadow-md shadow-gray-500 gap-2">${price}</p>
      <div className="card-body items-center text-center ">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <button className="btn btn-block hover:btn-warning  px-5 ">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default FoodCard;
