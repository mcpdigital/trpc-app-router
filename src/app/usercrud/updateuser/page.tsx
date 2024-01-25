"use client";
import { useState, useEffect } from "react";
import { trpc } from "@/lib/trpc/trpc-client";

export default function UpdateUserPage() {
  const [updatedUser, setUpdatedUser] = useState({
    id: "",
    name: "",
    email: "",
    password: "",
    avatar: "",
  });
  const usersQuery = trpc.users.getUsers.useQuery();
  const updateUserMutation = trpc.users.updateUser.useMutation();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUpdatedUser({ ...updatedUser, [event.target.name]: event.target.value });
  };

  const updateUser = (id: string | number) => {
    const user = usersQuery.data?.find((user) => user.id === id);
    if (user) setUpdatedUser({ ...user, id: String(user.id) });
  };

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    updateUserMutation.mutate({ id: Number(updatedUser.id), ...updatedUser });
  };

  useEffect(() => {
    if (updateUserMutation.isSuccess) {
      usersQuery.refetch();
    }
  }, [updateUserMutation.isSuccess, usersQuery]);

  if (usersQuery.isLoading) {
    return <div>Loading...</div>;
  }

  if (usersQuery.isError) {
    return <div>Error: {usersQuery.error.message}</div>;
  }

  return (
    <div className="flex flex-col text-center ">
      <h1 className="p-4 text-4xl">Update User</h1>
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
                <button onClick={() => updateUser(user.id)}>Update</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {updatedUser && (
        <form
          onSubmit={handleSubmit}
          className="dark:text-slate-300 dark:bg-slate-700 mt-4 p-4 rounded-lg gap-4  mx-auto flex flex-col "
        >
          <label>
            Name:
            <input
              className="dark:text-slate-900 stretch ml-1 "
              type="text"
              name="name"
              value={updatedUser.name}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Email:
            <input
              className="dark:text-slate-900  stretch ml-1 "
              type="text"
              name="email"
              value={updatedUser.email}
              onChange={handleInputChange}
            />
          </label>
          <div>
            <input
              type="submit"
              className="dark:bg-slate-800 rounded-md hover:cursor-pointer hover:bg-slate-900 active:bg-slate-950  text-slate-100 p-2"
              value="Submit"
            />
          </div>
        </form>
      )}
    </div>
  );
}
