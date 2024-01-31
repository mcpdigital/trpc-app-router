"use client";
import { useState, useEffect } from "react";
import { trpc } from "@/lib/trpc/trpc-client";
import { UpdateUserData, UserData } from "@/types/types";

export default function UserManagementPage() {
  const [selectedUser, setSelectedUser] = useState<UserData | null>(null);
  const [updatedUser, setUpdatedUser] = useState<UpdateUserData | null>(null);
  const usersQuery = trpc.userData.getUserData.useQuery();
  const updateUserMutation = trpc.userData.updateUserData.useMutation();
  const deleteUserMutation = trpc.userData.deleteUserData.useMutation();

  // Handle input change
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUpdatedUser((prevState) => {
      const keys = name.split(".");
      if (!prevState) {
        throw new Error("prevState is null");
      } else {
        if (keys.length === 1) {
          return { ...prevState, [name]: value } as UpdateUserData;
        } else {
          return {
            ...prevState,
            [keys[0]]: {
              ...((prevState[keys[0] as keyof UpdateUserData] as Record<
                string,
                any
              >) || {}),
              [keys[1]]: value,
            },
          } as UpdateUserData;
        }
      }
    });
  };

  // Handle submit
  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    const id = updatedUser?.id;
    updateUserMutation.mutate({ id: Number(id), ...updatedUser });
  };

  // Handle delete
  const handleDelete = (userId: number) => {
    deleteUserMutation.mutate({ id: userId });
  };

  useEffect(() => {
    if (updateUserMutation.isSuccess || deleteUserMutation.isSuccess) {
      usersQuery.refetch();
    }
  }, [updateUserMutation.isSuccess, deleteUserMutation.isSuccess]);

  return (
    <div
      className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
      style={{ minHeight: "calc(85vh - 60px)" }}
    >
      {usersQuery.data?.map((user) => (
        <div
          key={user.id}
          className="  dark:text-slate-300  dark:bg-slate-800  p-5  pb-1 "
        >
          {/* Display user information */}
          <div className="dark:text-slate-300 dark:bg-slate-600 p-2 rounded-lg shadow-xl ">
            <div>{user.name}</div>
            <div>{user.email}</div>

            <div className="flex mt-4 gap-2 justify-center">
              <button
                className="rounded-md dark:bg-blue-600 min-w-[72px] p-2"
                onClick={() => setSelectedUser(user)}
              >
                Update
              </button>
              <button
                className="rounded-md dark:bg-red-700 min-w-[72px] p-2"
                onClick={() => handleDelete(user.id)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Update form */}
      {selectedUser && (
        <form onSubmit={handleSubmit}>
          {/* Include form fields for all properties of the user */}
          <input
            name="name"
            value={updatedUser?.name || ""}
            onChange={handleInputChange}
          />
          <input
            name="email"
            value={updatedUser?.email || ""}
            onChange={handleInputChange}
          />
          {/* Add more fields as needed */}
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
}
