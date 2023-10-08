import React from "react";
import MenuItem from "../Shared/MenuItem/MenuItem";
import Cover from "../Shared/Cover/Cover";
import { Link } from "react-router-dom";

const MenuCategory = ({ items, coverImg, title }) => {
  return (
    <div className="my-5">
      {title && <Cover img={coverImg} title={title} />}
      <br />

      <div className="grid md:grid-cols-2 gap-10">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
        <Link to={`/order/${title}`} className="flex justify-center ">
        <button className="btn border-b-4 border-x-2 p-3 rounded-md shadow-md uppercase my-5 w-2/5">
          View full menu
        </button>
        </Link>
        
    </div>
  );
};

export default MenuCategory;
