import React from "react";

const FoodCard = ({item}) => {
    const{name, recipe, image, price} = item;

  return (
    <div>
      <div className="px-5 grid md:grid-cols-3">
        {/* card-1 */}
        <div className="card w-96 bg-base-100 shadow-xl">
          <img
            src={img1}
            className="img-fluid h-96 object-cover rounded-t-2xl"
            alt=""
          />
          <div className="card-body items-center text-center ">
            <h2 className="card-title">Caeser Salad</h2>
            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <button className="btn btn-block hover:btn-warning  px-5 ">
              add to cart
            </button>
          </div>
        </div>
        {/* card-2 */}
        <div className="card w-96 bg-base-100 shadow-xl">
          <img
            src={img2}
            className="img-fluid h-96 object-cover rounded-t-2xl"
            alt=""
          />
          <div className="card-body items-center text-center">
            <h2 className="card-title">Sweet Pizza</h2>
            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <button className="btn btn-block hover:btn-warning  px-5 ">
              add to cart
            </button>
          </div>
        </div>
        {/* card-3 */}
        <div className="card w-96 bg-base-100 shadow-xl">
          <img
            src={img3}
            className="img-fluid h-96 object-cover rounded-t-2xl"
            alt=""
          />
          <div className="card-body items-center text-center">
            <h2 className="card-title">Special Bread</h2>
            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <button className="btn btn-block hover:btn-warning  px-5 ">
              add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
