import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from 'sweetalert2'

const img_hosting_token = import.meta.env.VITE_Image_Upload_token;
const AddItem = () => {
  const axiosSecure  = useAxiosSecure();
  const {
    register,
    handleSubmit,
    reset
  } = useForm();
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);

    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgResponse) => {
        if (imgResponse.success) {
          const imgUrl = imgResponse.data.display_url;
          const { name, price, category, recipe } = data;
          const newItem = {
            name,
            price: parseFloat(price),
            category,
            recipe,
            image: imgUrl,
          };
          console.log(newItem);

          axiosSecure.post("/menu", newItem).then((data) => {
            console.log("after posting new item", data.data);
            if(data.data.insertedId){
              reset();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your Item has been added",
                showConfirmButton: false,
                timer: 1500
              });

            }
          });
        }
      });
  };

  return (
    <div className="">
      <div>
        <SectionTitle
          heading="ADD An Item"
          subHeading="---What's new---"
        ></SectionTitle>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full mx-auto max-w-2xl p-4 bg-base-100 shadow-xl rounded-xl"
        >
          <div className="form-control ">
            <label className="label ">
              <span className="label-text">Recipe name*</span>
            </label>
            <input
              type="text"
              placeholder="Recipe name"
              {...register("name", { required: true, maxLength: 120 })}
              className="input input-bordered w-full max-w-md"
            />
          </div>
          <div className=" flex items-center  ">
            <div>
              <label className="label">Category*</label>
              <select
                defaultValue="Pick One"
                {...register("category", { required: true })}
                className="select select-bordered"
              >
                <option disabled>Pick One</option>
                <option>Pizza</option>
                <option>Chiken</option>
                <option>Soups</option>
                <option>Salads</option>
                <option>Drinks</option>
                <option>Desert</option>
              </select>
            </div>
            {/* price */}
            <div className="ml-4 mt-3 w-6/12">
              <label className="label-text">Price*</label>
              <input
                type="number"
                placeholder="Price"
                {...register("price", { required: true, maxLength: 120 })}
                className="input input-bordered  w-full"
              />
            </div>
          </div>
          <div className="my-3">
            <label className="label"> Recipe Details*</label>
            <textarea
              {...register("recipe", { required: true, maxLength: 120 })}
              className="textarea textarea-bordered h-24 w-full max-w-md"
              placeholder="Recipe Details"
            ></textarea>
          </div>

          <div className="label">
            <span className="label-text">Choose file</span>
          </div>
          <input
            type="file"
            {...register("image", { required: true, maxLength: 120 })}
            className="file-input file-input-bordered w-full max-w-md"
          />
          <div className="mx-auto ">
            <input
              type="submit"
              className="btn btn-wide btn-active btn-warning mt-4 "
              value="Add Item"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddItem;
