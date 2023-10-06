import React from "react";
import MenuItem from "../Shared/MenuItem/MenuItem";

const MenuCategory = ({ items }) => {
  return (
    <div className="my-5">
      <div className="grid md:grid-cols-2 gap-10">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="flex justify-center ">
        <button className="btn border-b-4 border-x-2 p-3 rounded-md shadow-md uppercase my-5 w-2/5">
          View full menu
        </button>
      </div>
    </div>
  );
};

export default MenuCategory;
