"use client";
import { useState, useEffect } from "react";
import { trpc } from "@/lib/trpc/trpc-client";
import { UpdateUserData, UserData } from "@/types/types";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Trash, Edit2Icon } from "lucide-react";
import { GRAD_OCEANIC, GRAD_PANDORA, GRAD_PARADISE } from "@/tw_gradients";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

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
      toast.success("User updated successfully", { autoClose: 2000 }); // display success notification
      usersQuery.refetch();
      setIsFormVisible(false); // hide the form
    }
  }, [updateUserMutation.isSuccess]);

  useEffect(() => {
    if (deleteUserMutation.isSuccess) {
      toast.success("User deleted successfully", { autoClose: 2000 });
      usersQuery.refetch();
    }
  }, [deleteUserMutation.isSuccess]);

  return (
    <div className="">
      <ToastContainer position="bottom-center" />
      <div className="mx-auto mt-4  mb-6 flex max-w-[98%] justify-center rounded-md border border-blue-600 bg-gray-800 p-0.5 text-center  text-2xl text-gray-200 shadow-xl">
        <div className="  shadow-lg w-full rounded-md bg-slate-900 p-1 text-2xl text-gray-200">
          User Control
        </div>
      </div>

      <div
        className=" grid grid-cols-1 mx-auto my-2 gap-8 sm:mx-4 text-center sm:max-w-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
        style={{ minHeight: "calc(85vh - 60px)" }}
      >
        {usersQuery.data?.map((user) => (
          <div
            key={user.id}
            className=" dark:text-slate-200  dark:bg-slate-600  p-3  drop-shadow-lg  border-gray-600 dark:border-gray-700 bg-gradient-to-r from-gray-950 via-blue-950  to-gray-950 "
          >
            {/* Display user information */}
            <div className="dark:text-slate-300 min-h-full dark:bg-slate-600 p-2 rounded-lg  bg-gradient-to-r from-blue-800 via-blue-700  to-blue-950 shadow-inner">
              <div
                className={
                  GRAD_PANDORA +
                  " text-2xl font-semibold truncate text-center bg-orange-600  bg-clip-text text-transparent "
                }
              >
                {user.name}
              </div>
              <div className="truncate">{user.email}</div>
              <div className="truncate mt-2 text-lg">{user.address.city}</div>

              <div className="flex mt-12 gap-2 justify-evenly ">
                <button
                  title="Edit"
                  className=" p-2  border-white/50 border-2 rounded-full"
                  onClick={() => {
                    setSelectedUser(user);
                    setUpdatedUser(user); // set updatedUser when a user is selected
                    setIsFormVisible(true); // show the form
                  }}
                >
                  <Edit2Icon size={20} />
                </button>
                <button
                  title="Delete"
                  className="p-2 border-white/50 border-2 rounded-full"
                  onClick={() => handleDelete(user.id)}
                >
                  <Trash size={20} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Update form */}
      {/* Update form */}
      <div
        className={`dark:text-slate-200 flex flex-col rounded-xl drop-shadow-lg mb-4 mx-auto  max-w-[466px] text-slate-900 ${
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
  );
}
