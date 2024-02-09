"use client";
import { useState, useEffect } from "react";
import { trpc } from "@/lib/trpc/trpc-client";
import { UpdateUserData, UserData } from "@/types/types";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function UserManagementPage() {
  const [selectedUser, setSelectedUser] = useState<UserData | null>(null);
  const [updatedUser, setUpdatedUser] = useState<UpdateUserData | null>(null);
  const usersQuery = trpc.userData.getUserData.useQuery();
  const updateUserMutation = trpc.userData.updateUserData.useMutation();
  const deleteUserMutation = trpc.userData.deleteUserData.useMutation();
  const [isFormVisible, setIsFormVisible] = useState(true);
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
    setUpdatedUser(null); // clear the form
  };

  // Handle delete
  const handleDelete = (userId: number) => {
    deleteUserMutation.mutate({ id: userId });
  };

  useEffect(() => {
    if (updateUserMutation.isSuccess) {
      usersQuery.refetch();
      toast.success("User updated successfully", { autoClose: 2000 });
      setIsFormVisible(false); // hide the form
    }
  }, [updateUserMutation.isSuccess]);

  useEffect(() => {
    if (deleteUserMutation.isSuccess) {
      usersQuery.refetch();
      toast.success("User deleted successfully", { autoClose: 2000 });
    }
  }, [deleteUserMutation.isSuccess]);

  return (
    <div>
      <ToastContainer position="bottom-center" />

      <div
        className="grid grid-cols-1 mx-auto my-2 gap-2 sm:mx-4 text-center sm:max-w-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
        style={{ minHeight: "calc(85vh - 60px)" }}
      >
        {usersQuery.data?.map((user) => (
          <div
            key={user.id}
            className="  dark:text-slate-300  dark:bg-slate-800 rounded-xl p-5   "
          >
            {/* Display user information */}
            <div className="dark:text-slate-300 dark:bg-slate-600 p-2 rounded-lg shadow-xl ">
              <div>{user.name}</div>
              <div>{user.email}</div>

              <div className="flex mt-4 gap-2 justify-center">
                <button
                  className="rounded-md dark:bg-blue-600 min-w-[72px] p-2"
                  onClick={() => {
                    setSelectedUser(user);
                    setUpdatedUser(user); // set updatedUser when a user is selected
                    setIsFormVisible(true); // show the form
                  }}
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
        <div
          className={`dark:text-slate-900 text-slate-900 ${
            isFormVisible ? "" : "hidden"
          }`}
        >
          {selectedUser && (
            <form
              onSubmit={handleSubmit}
              className={`dark:text-slate-900 text-slate-900 ${
                isFormVisible ? "" : "hidden"
              }`}
            >
              {/* Include form fields for all properties of the user */}
              <input
                className="dark:text-slate-900 dark:bg-slate-300 p-2 rounded-md mt-2"
                name="name"
                value={updatedUser?.name || ""}
                onChange={handleInputChange}
              />
              <input
                className="dark:text-slate-900 dark:bg-slate-300 p-2 rounded-md mt-2"
                name="email"
                value={updatedUser?.email || ""}
                onChange={handleInputChange}
              />
              {/* Add more fields as needed */}
              <p>
                <button
                  className="mt-2 rounded-md text-slate-100 dark:bg-blue-600 min-w-[72px] p-2"
                  type="submit"
                >
                  Submit
                </button>
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
