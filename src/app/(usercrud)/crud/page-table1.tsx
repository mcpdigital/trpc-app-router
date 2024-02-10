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
      <ToastContainer position="top-right" />

      <div
        className="mx-auto my-2 sm:mx-4 text-left sm:max-w-auto border-1 border border-slate-700 dark:border-slate-900  rounded-lg shadow-xl "
        style={{ minHeight: "calc(85vh - 60px)" }}
      >
        <table className="table-auto w-full  bg-slate-800 mt-0 rounded-lg ">
          <thead className="dark:text-slate-300 text-slate-900 text-2xl">
            <tr className="h-[4rem] ">
              <th className="pl-4">Name</th>
              <th>Email</th>
              <th className="text-end pr-12">Actions</th>
            </tr>
          </thead>
          <tbody className="">
            {usersQuery.data?.map((user, index) => (
              <tr
                key={user.id}
                className={
                  index % 2 === 0
                    ? "dark:bg-slate-600 bg-slate-200 "
                    : "dark:bg-slate-700 bg-slate-400"
                }
              >
                <td className="pl-4">{user.name}</td>
                <td>{user.email}</td>
                <td className="flex mt-4 gap-4  mr-2 items-center justify-end ">
                  <button
                    className=" bg-gradient-to-r from-blue-500 to-purple-500 text-white p-1 rounded hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 -mt-3 mb-1 min-w-[72px] ring-violet-950 hover:ring-violet-400 ring-1 shadow-lg"
                    onClick={() => {
                      setSelectedUser(user);
                      setUpdatedUser(user); // set updatedUser when a user is selected
                      setIsFormVisible(true); // show the form
                    }}
                  >
                    Update
                  </button>
                  <button
                    className="rounded-md min-w-[72px] p-1 -mt-3 mb-1 bg-gradient-to-r from-red-700 via-red-600 to-yellow-600 shadow-lg ring-red-950 hover:ring-yellow-400 ring-1"
                    onClick={() => handleDelete(user.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Update form */}
        <div
          className={`dark:text-slate-200  dark:bg-slate-900 rounded-xl shadow-xl mb-4 mx-auto  max-w-[466px] text-slate-900 ${
            isFormVisible ? "" : "hidden"
          }`}
        >
          {selectedUser && (
            <form
              onSubmit={handleSubmit}
              className={`grid grid-cols-2 ring-2 ring-offset-4 dark:ring-offset-white/15 ring-slate-800  divide-black  dark:bg-slate-800 rounded-xl p-2 gap-2 mt-4 mb-3 ${
                isFormVisible ? "" : "hidden"
              }`}
            >
              {/* Include form fields for all properties of the user */}
              <div>
                <label
                  className="text-slate-100 text-left ml-2 dark:text-slate-200 block mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  type="name"
                  id="name"
                  className="form-input ml-2 dark:text-slate-900 dark:bg-slate-200 p-2 rounded-md"
                  name="name"
                  value={updatedUser?.name || ""}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label
                  className="text-slate-100 text-left ml-2 dark:text-slate-200 block mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="form-input  dark:text-slate-900 ml-2 dark:bg-slate-200 p-2 rounded-md"
                  name="email"
                  value={updatedUser?.email || ""}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label
                  className="text-slate-100 text-left ml-2 dark:text-slate-200 block mb-2"
                  htmlFor="city"
                >
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  className="form-input ml-2 dark:text-slate-900 dark:bg-slate-200 p-2 rounded-md"
                  name="city"
                  value={updatedUser?.address?.city || ""}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label
                  className="text-slate-100 text-left ml-2 dark:text-slate-200 block mb-2"
                  htmlFor="street"
                >
                  Street
                </label>
                <input
                  type="text"
                  id="street"
                  className="form-input ml-2 dark:text-slate-900 dark:bg-slate-200 p-2 rounded-md"
                  name="street"
                  value={updatedUser?.address?.street || ""}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label
                  className="text-slate-100 text-left ml-2 dark:text-slate-200 block mb-2"
                  htmlFor="website"
                >
                  Website
                </label>
                <input
                  title="Website"
                  placeholder="Website"
                  type="text"
                  id="website"
                  className="form-input ml-2 dark:text-slate-900 dark:bg-slate-200 p-2 rounded-md"
                  name="website"
                  value={updatedUser?.website || ""}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label
                  className="text-slate-100 text-left ml-2 dark:text-slate-200 block mb-2"
                  htmlFor="companyname"
                >
                  Company
                </label>
                <input
                  type="text"
                  id="companyname"
                  className="form-input ml-2 dark:text-slate-900 dark:bg-slate-200 p-2 rounded-md"
                  name="companyname"
                  value={updatedUser?.company?.name || ""}
                  onChange={handleInputChange}
                />
              </div>

              <div className="col-span-2 inline-flex justify-center">
                <button
                  className="mt-4 mb-2  rounded-md text-slate-100 dark:bg-blue-600 min-w-[72px] p-1 "
                  type="submit"
                >
                  Update
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
