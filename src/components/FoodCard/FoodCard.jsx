import React from "react";

const FoodCard = ({item}) => {
    const{name, recipe, image, price} = item;

  return (
    <div>
      <div className="px-5">
        <div className="card w-[400px] h-[600px] bg-base-100 shadow-xl">
          <img
            src={image}
            className="img-fluid h-96 object-cover rounded-t-2xl"
            alt=""
          />
          <div className="card-body items-center text-center ">
            <h2 className="card-title">{name}</h2>
            <p>{recipe}</p>
            <button className="btn btn-block hover:btn-warning  px-5 ">
              Add to cart
            </button>
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default FoodCard;
