import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";

const FoodCard = ({ item }) => {
  const { name, recipe, image, price } = item;
  const { user } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleAddToCart = (item) => {
    // console.log(item);
    // console.log(user);
    if (user) {
      fetch("http://localhost:5000")
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.insertedId) {
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
          navigate("/login");
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
