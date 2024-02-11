"use client";
import Loading from "@/components/Loading";
import { useState, useEffect } from "react";
import { trpc } from "@/lib/trpc/trpc-client";
import { UpdateUserData, UserData } from "@/types/types";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Trash, Edit2Icon, Edit2 } from "lucide-react";
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
import {
  GRAD_BLUESTEEL,
  GRAD_BUTTON1,
  GRAD_OCEANIC,
  GRAD_PANDORA,
} from "@/tw_gradients";
import { DialogClose } from "@radix-ui/react-dialog";

export default function UserManagementPage() {
  const [selectedUser, setSelectedUser] = useState<UserData | null>(null);
  const [updatedUser, setUpdatedUser] = useState<UpdateUserData | null>(null);
  const usersQuery = trpc.userData.getUserData.useQuery();
  const updateUserMutation = trpc.userData.updateUserData.useMutation();
  const deleteUserMutation = trpc.userData.deleteUserData.useMutation();
  const [isFormVisible, setIsFormVisible] = useState(true);
  const [isUpdateLoading, setIsUpdateLoading] = useState(false);
  const [isDeleteLoading, setIsDeleteLoading] = useState(false);

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
    setIsUpdateLoading(true);
    updateUserMutation.mutate(
      { id: Number(id), ...updatedUser },
      {
        onSuccess: () => {
          setIsUpdateLoading(false);
          setUpdatedUser(null); // clear the form
          setSelectedUser(null); // close the dialog
          setIsFormVisible(false); // hide the form
        },
      }
    );
  };

  // Handle delete
  const handleDelete = (userId: number) => {
    setIsDeleteLoading(true);
    deleteUserMutation.mutate({ id: userId });

    setSelectedUser(null); // close the dialog
  };

  useEffect(() => {
    if (updateUserMutation.isSuccess || updateUserMutation.isError) {
      setIsUpdateLoading(false);
      console.log("isUpdateLoading", isUpdateLoading);

      if (updateUserMutation.isSuccess) {
        toast.success("User updated successfully", { autoClose: 500 }); // display success notification
        usersQuery.refetch();
      }
    }
  }, [updateUserMutation.isSuccess]);

  useEffect(() => {
    if (deleteUserMutation.isSuccess || deleteUserMutation.isError) {
      setIsDeleteLoading(false); // set loading state to false when the mutation is completed
      console.log("isDeleteLoading", isDeleteLoading);

      if (deleteUserMutation.isSuccess) {
        toast.success("User deleted successfully", { autoClose: 500 });
        usersQuery.refetch();
      }
    }
  }, [deleteUserMutation.isSuccess]);

  return (
    <div className="bg-slate-300 dark:bg-slate-800">
      <ToastContainer theme="dark" position="bottom-center" />
      <div className="mx-auto mt-4  mb-6 flex max-w-[98%] justify-center rounded-md border-slate-400 border dark:border-blue-600 dark:bg-gray-800 p-0.5 text-center  text-2xl text-gray-200 shadow-xl">
        <div className="  shadow-lg w-full rounded-md bg-slate-600 dark:bg-slate-800 p-1 text-2xl dark:text-gray-200">
          User Control
        </div>
      </div>

      <div
        className=" grid grid-cols-1 mx-auto my-2 gap-8 bg-slate-300 dark:bg-slate-800 p-2 dark:p-0 sm:mx-4 text-center sm:max-w-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 "
        style={{ minHeight: "calc(85vh - 60px)" }}
      >
        {usersQuery.data?.map((user) => (
          <div
            key={user.id}
            className=" dark:text-slate-200 text-slate-800 bg-slate-200 dark:bg-slate-600  p-3  drop-shadow-lg  border-gray-600 dark:border-gray-700 dark:bg-gradient-to-r dark:from-gray-900 dark:via-gray-950  dark:to-gray-950 bg-gradient-to-bl from-gray-600 via-gray-500  to-gray-600 rounded-xl"
          >
            {/* Display user information */}
            {/* Display user information */}
            <div className="dark:text-slate-300 text-slate-800 min-h-full bg-slate-200 dark:bg-slate-600 p-2 rounded-lg  dark:bg-gradient-to-tr dark:from-blue-900 dark:via-blue-900  dark:to-blue-950 bg-gradient-to-tr from-slate-400 via-slate-300  to-slate-400 shadow-inner">
              <div
                className={
                  GRAD_OCEANIC +
                  " dark:bg-gradient-to-t bg-gradient-to-br dark:from-green-200 dark:via-green-400 dark:to-purple-700 text-2xl font-bold truncate text-center bg-orange-600  bg-clip-text text-transparent "
                }
              >
                {user.name}
              </div>
              <div className="truncate">{user.email}</div>
              <div className="truncate mt-2 text-lg">{user.address.city}</div>
              <div className="flex  gap-2 justify-evenly mt-8">
                <Dialog>
                  <DialogTrigger
                    onClick={() => {
                      setSelectedUser(user);
                      setUpdatedUser(user); // set updatedUser when a user is selected
                      //setIsFormVisible(true); // show the form
                    }}
                  >
                    <div className="p-1.5 dark:border-white/50 border-black/50 border-2 rounded-full">
                      <Edit2Icon size={20} />
                    </div>
                  </DialogTrigger>
                  {updatedUser && (
                    <DialogContent className="  divide-y-2 divide-popover ring-2 ring-offset-4 dark:ring-offset-white/15 bg-slate-200  ring-slate-800    dark:bg-slate-800 rounded-xl p-2 gap-2 my-3">
                      <div className="text-2xl flex flex-row p-1 justify-center ">
                        Udate User Info
                      </div>
                      <form
                        className="grid grid-cols-1 mx-2 place-items-center sm:grid-cols-2 text-slate-800 sm:justify-between  dark:bg-slate-800  p-2 gap-2 mt-4 mb-3"
                        onSubmit={(e) => {
                          e.preventDefault();
                          handleSubmit(e);
                          // setIsFormVisible(false); // close the dialog
                        }}
                      >
                        <div>
                          <label
                            className="text-slate-900 text-left ml-2 dark:text-slate-200 block mb-2"
                            htmlFor="name"
                          >
                            Name
                          </label>
                          <input
                            type="name"
                            id="name"
                            className="form-input ml-2  dark:text-slate-900 text-slate-950 dark:bg-slate-200 p-2 rounded-md"
                            name="name"
                            value={updatedUser?.name || ""}
                            onChange={handleInputChange}
                          />
                        </div>

                        <div>
                          <label
                            className=" text-slate-900 text-left ml-2 dark:text-slate-200 block mb-2"
                            htmlFor="email"
                          >
                            Email
                          </label>
                          <input
                            type="email"
                            id="email"
                            className="form-input text-slate-900 dark:text-slate-900 ml-2 dark:bg-slate-200 p-2 rounded-md"
                            name="email"
                            value={updatedUser?.email || ""}
                            onChange={handleInputChange}
                          />
                        </div>

                        <div>
                          <label
                            className="text-slate-900 text-left ml-2 dark:text-slate-200 block mb-2"
                            htmlFor="city"
                          >
                            City
                          </label>
                          <input
                            type="text"
                            id="city"
                            className="form-input ml-2 dark:text-slate-900 dark:bg-slate-200 p-2 rounded-md"
                            name="address.city"
                            value={updatedUser?.address?.city || ""}
                            onChange={handleInputChange}
                          />
                        </div>

                        <div>
                          <label
                            className="text-slate-900 text-left ml-2 dark:text-slate-200 block mb-2"
                            htmlFor="street"
                          >
                            Street
                          </label>
                          <input
                            type="text"
                            id="street"
                            className="form-input ml-2 text-slate-900 dark:text-slate-900 dark:bg-slate-200 p-2 rounded-md"
                            name="address.street"
                            value={updatedUser?.address?.street || ""}
                            onChange={handleInputChange}
                          />
                        </div>

                        <div>
                          <label
                            className="text-slate-900 text-left ml-2 dark:text-slate-200 block mb-2"
                            htmlFor="website"
                          >
                            Website
                          </label>
                          <input
                            title="Website"
                            placeholder="Website"
                            type="text"
                            id="website"
                            className="form-input ml-2 text-slate-900 dark:text-slate-900 dark:bg-slate-200 p-2 rounded-md"
                            name="website"
                            value={updatedUser?.website || ""}
                            onChange={handleInputChange}
                          />
                        </div>

                        <div>
                          <label
                            className="text-slate-900 text-left ml-2 dark:text-slate-200 block mb-2"
                            htmlFor="companyname"
                          >
                            Company
                          </label>
                          <input
                            type="text"
                            id="companyname"
                            className="form-input ml-2 dark:text-slate-900 dark:bg-slate-200 p-2 rounded-md"
                            name="company.name"
                            value={updatedUser?.company?.name || ""}
                            onChange={handleInputChange}
                          />
                        </div>

                        <div className="sm:col-span-2 inline-flex items-top justify-center mt-4 ">
                          <button
                            type="submit"
                            title="Update"
                            name="UpdateUser"
                            about="Update user"
                            className=" p-1 min-h-[39px] text-slate-900 dark:text-slate-200 hover:bg-black/10 dark:hover:bg-white/10 mx-auto dark:border-white/50 border-2 rounded-lg border-slate-400"
                          >
                            Update
                            {isUpdateLoading && (
                              <div className="fixed col-span-2  justify-center -mt-[35%]">
                                <Loading />
                              </div>
                            )}
                          </button>
                        </div>
                      </form>
                    </DialogContent>
                  )}
                </Dialog>

                <Dialog>
                  <DialogTrigger onClick={() => setSelectedUser(user)}>
                    <div className="p-1.5 dark:border-white/50 border-black/50 border-2 rounded-full">
                      <Trash size={20} />
                    </div>
                  </DialogTrigger>

                  <DialogContent className="ring-2 ring-offset-4 dark:ring-offset-white/15 bg-slate-200  ring-slate-800    dark:bg-slate-800 rounded-xl p-2 gap-2 my-3">
                    <p>Are you sure you want to delete this user?</p>
                    <div className="flex mt-12 gap-2 justify-evenly dark:text-slate-200 text-slate-900">
                      <button
                        onClick={() => handleDelete(user.id)}
                        title="Delete"
                        className=" p-2  border-white/50 border-2 w-[44px] hover:border-red-700  rounded-full"
                      >
                        Yes
                      </button>
                      <div className="items-center justify-center">
                        {isDeleteLoading && <Loading />}
                      </div>
                      <DialogClose asChild>
                        <button
                          onClick={() => setSelectedUser(null)}
                          className=" p-2  border-white/50 border-2 w-[44px] hover:border-green-700 rounded-full"
                        >
                          No
                        </button>
                      </DialogClose>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
