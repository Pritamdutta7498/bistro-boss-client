import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Helmet } from "react-helmet-async";
import { AiOutlineDelete } from "react-icons/ai";
import { MdAdminPanelSettings } from "react-icons/md";

const AllUsers = () => {
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await fetch("http://localhost:5000/users");
    console.log(res);
    return res.json();
  });

  const handleDelete = (user) => {};

  return (
    <div className="flex justify-center items-center h-screen">
      <Helmet>
        <title>Bistro Boss || All User</title>
      </Helmet>
      <div className="overflow-x-auto w-full">
        <h2 className="text-3xl text-center w-4/12 mx-auto shadow-xl p-5 my-4 uppercase">Total Users: <span className="text-zinc-600 font-bold">{users.length}</span> </h2>
        <table className="table table-zebra ">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {
                    users.role === 'admin' ? 'admin' : <button
                    onClick={() => handleDelete(user)}
                    className="btn btn-ghost bg-blue-300 hover:bg-green-400 hover:text-white"
                  >
                    <MdAdminPanelSettings  className="text-xl cursor-pointer " />
                  </button>
                  }
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(user)}
                    className="btn btn-ghost bg-red-300 hover:bg-red-500 hover:text-white"
                  >
                    <AiOutlineDelete className="text-xl cursor-pointer " />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
