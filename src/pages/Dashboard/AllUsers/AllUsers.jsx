import { useQuery } from "@tanstack/react-query";
import React from "react";

const AllUsers = () => {
//   const { data: users = [], refetch } = useQuery(['users'], async () => {
//     const res = await fetch('http://localhost:5000/users');
//     console.log(res)
//     return res.json();
//   });
  const { data: menu = [], refetch } = useQuery(['menu'], async () => {
    const res = await fetch('http://localhost:5000/menu');
    console.log(res)
    return res.json();
  });

  return (
    <div>
      <h2>All users: {menu.length}</h2>
    </div>
  );
};

export default AllUsers;
