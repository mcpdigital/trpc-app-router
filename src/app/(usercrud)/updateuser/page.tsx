"use client";
import { useState, useEffect } from "react";
import { trpc } from "@/lib/trpc/trpc-client";
import { UpdateUserData } from "@/types/types";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function UpdateUserPage() {
  const defaultUser: UpdateUserData = {
    id: 0,
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
    avatar: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
    },
    company: {
      name: "",
      catchPhrase: "",
      bs: "",
    },
  };
  const [updatedUser, setUpdatedUser] = useState<UpdateUserData | null>(
    defaultUser
  );
  const usersQuery = trpc.userData.getUserData.useQuery();
  const updateUserMutation = trpc.userData.updateUserData.useMutation();

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
    setUpdatedUser(defaultUser); // reset form after submission
    toast.success("User updated successfully", { autoClose: 2000 }); // display success notification
  };

  useEffect(() => {
    if (updateUserMutation.isSuccess) {
      usersQuery.refetch();
    }
  }, [updateUserMutation.isSuccess, usersQuery]);

  if (usersQuery.isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="dark:text-slate-300 border border-black m-4 p-2 rounded-lg  flex flex-col">
      <ToastContainer position="bottom-center" />
      <h1 className="p-4 text-4xl">Update User</h1>
      <table className="table-auto w-full bg-slate-900 table-row p-4 rounded-lg ">
        <thead className="table-header-group rounded-t-lg h-[50px] ">
          <tr className=" text-left text-lg rounded-t-lg bg-slate-800  ">
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Website</th>
            <th>Avatar</th>
          </tr>
        </thead>
        <tbody>
          {usersQuery.data?.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.website}</td>
              <td>{user.avatar}</td>

              <td>
                <button onClick={() => setUpdatedUser(user)}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <form
        onSubmit={handleSubmit}
        className="dark:text-slate-300 dark:bg-slate-700 mt-4 p-4 rounded-lg gap-4  mx-auto flex flex-col "
      >
        <h2 className="text-2xl mb-4">Update User</h2>
        <div className="grid grid-cols-2 gap-4">
          <label>
            Name:
            <input
              className="dark:text-slate-900 stretch ml-1 "
              type="text"
              name="name"
              value={updatedUser?.name}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Username:
            <input
              className="dark:text-slate-900 stretch ml-1 "
              type="text"
              name="username"
              value={updatedUser?.username}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Email:
            <input
              className="dark:text-slate-900  stretch ml-1 "
              type="text"
              name="email"
              value={updatedUser?.email}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Phone:
            <input
              className="dark:text-slate-900  stretch ml-1 "
              type="text"
              name="phone"
              value={updatedUser?.phone}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Website:
            <input
              className="dark:text-slate-900  stretch ml-1 "
              type="text"
              name="website"
              value={updatedUser?.website}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Avatar:
            <input
              className="dark:text-slate-900  stretch ml-1 "
              type="text"
              name="avatar"
              value={updatedUser?.avatar}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <h2 className="text-2xl mt-4 mb-4">Address</h2>
        <div className="grid grid-cols-2 gap-4">
          <label>
            Street:
            <input
              className="dark:text-slate-900 stretch ml-1 "
              type="text"
              name="street"
              value={updatedUser?.address?.street}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Suite:
            <input
              className="dark:text-slate-900 stretch ml-1 "
              type="text"
              name="suite"
              value={updatedUser?.address?.suite}
              onChange={handleInputChange}
            />
          </label>
          <label>
            City:
            <input
              className="dark:text-slate-900 stretch ml-1 "
              type="text"
              name="city"
              value={updatedUser?.address?.city}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Zipcode:
            <input
              className="dark:text-slate-900 stretch ml-1 "
              type="text"
              name="zipcode"
              value={updatedUser?.address?.zipcode}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <h2 className="text-2xl mt-4 mb-4">Company</h2>
        <div className="grid grid-cols-2 gap-4">
          <label>
            Name:
            <input
              className="dark:text-slate-900 stretch ml-1 "
              type="text"
              name="name"
              value={updatedUser?.company?.name}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Catch Phrase:
            <input
              className="dark:text-slate-900 stretch ml-1 "
              type="text"
              name="catchPhrase"
              value={updatedUser?.company?.catchPhrase}
              onChange={handleInputChange}
            />
          </label>
          <label>
            BS:
            <input
              className="dark:text-slate-900 stretch ml-1 "
              type="text"
              name="bs"
              value={updatedUser?.company?.bs}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <div className="mt-4">
          <input
            type="submit"
            className="dark:bg-slate-800 rounded-md hover:cursor-pointer hover:bg-slate-900 active:bg-slate-950  text-slate-100 p-2"
            value="Submit"
          />
        </div>
      </form>
    </div>
  );
}
