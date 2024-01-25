import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Helmet } from "react-helmet-async";
import { AiOutlineDelete } from "react-icons/ai";
import { MdAdminPanelSettings } from "react-icons/md";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await axiosSecure.get("/users");
  
    return res.data;
  });

  // make admin to any specific user with this btn
  const handleMakeAdmin = (user) => {
    // console.log(user)
    fetch(`http://localhost:5000/users/admin/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} is now admin`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  const handleDelete = (user) => {};

  return (
    <div className="flex justify-center items-center h-screen">
      <Helmet>
        <title>Bistro Boss || All User</title>
      </Helmet>
      <div className="overflow-x-auto w-full">
        <h2 className="text-3xl text-center w-4/12 mx-auto shadow-xl p-5 my-4 uppercase">
          Total Users:{" "}
          <span className="text-zinc-600 font-bold">{users.length}</span>{" "}
        </h2>
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

                <td className="font-bold ">
                  {user.role === "admin" ? (
                    "ADMIN"
                  ) : (
                    <button
                      onClick={() => handleMakeAdmin(user)}
                      className="btn btn-ghost bg-blue-300 hover:bg-green-400 hover:text-white"
                    >
                      <MdAdminPanelSettings className="text-xl cursor-pointer " />
                    </button>
                  )}
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
