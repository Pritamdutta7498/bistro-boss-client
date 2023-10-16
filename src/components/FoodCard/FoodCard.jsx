import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";
import useCart from "../../hooks/useCart";

const FoodCard = ({ item }) => {
  const { name, recipe, image, price, _id } = item;
  const { user } = useContext(AuthContext);
  const [, refetch] = useCart()

  const navigate = useNavigate();
  const location = useLocation();

  const handleAddToCart = (item) => {
    // console.log(item);
    // console.log(user);
    if (user && user.email) {
      const cartItem = {
        menuItemId: _id,
        name,
        recipe,
        image,
        price,
        email: user.email,
      };
      fetch("http://localhost:5000/carts", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(cartItem),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.insertedId) {
            refetch();//refetch cart to update the cart item data number
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Add to cart successfully",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      Swal.fire({
        title: "Please Login!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login Now!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div className="card w-96 h-[600px] bg-base-100 shadow-xl">
      <img
        src={image}
        className="img-fluid h-96 object-cover rounded-t-2xl"
        alt=""
      />
      <p className="absolute py-5 px-10 rounded-md right-0 top-8 badge badge-warning font-semibold shadow-md shadow-gray-500 gap-2">
        ${price}
      </p>
      <div className="card-body items-center text-center ">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <button
          onClick={() => handleAddToCart(item)}
          className="btn btn-block hover:btn-warning  px-5 "
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default FoodCard;
