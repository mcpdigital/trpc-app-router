"use client";
// src/app/usercrud/deleteuser/page.tsx
import { useEffect } from "react";
import { trpc } from "@/lib/trpc/trpc-client";

export default function DeleteUserPage() {
  const usersQuery = trpc.users.getUsers.useQuery();
  const deleteUserMutation = trpc.users.deleteUser.useMutation();

  const deleteUser = (id) => {
    deleteUserMutation.mutate({ id: Number(id) });
  };

  useEffect(() => {
    if (deleteUserMutation.isSuccess) {
      usersQuery.refetch();
    }
  }, [deleteUserMutation.isSuccess, usersQuery]);

  if (usersQuery.isLoading) {
    return <div>Loading...</div>;
  }

  if (usersQuery.isError) {
    return <div>Error: {usersQuery.error.message}</div>;
  }

  return (
    <div className="flex flex-col ">
      <h1 className="p-4 text-4xl">Delete User</h1>
      <table
        id="userstable"
        className="dark:text-slate-300 m-2 rounded-lg dark:bg-slate-900 mx-screen pt-5  pb-1"
      >
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {usersQuery.data.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <button onClick={() => deleteUser(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
