import { useQuery } from "@tanstack/react-query";
import React from "react";

const AllUsers = () => {
  const { data: users = [], refetch } = useQuery(['users'], async () => {
    const res = await fetch('http://localhost:5000/users');
    console.log(res)
    return res.json();
  });

  return (
    <div>
      <h2>All users: {users.length}</h2>
    </div>
  );
};

export default AllUsers;
