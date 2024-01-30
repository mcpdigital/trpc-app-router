"use client";
// src/app/usercrud/createuser/page.tsx
import { useState } from "react";
import { trpc } from "@/lib/trpc/trpc-client";
import { CreateUserData } from "@/types/types";

export default function CreateUserPage() {
  const [newUser, setNewUser] = useState<CreateUserData>({} as CreateUserData);

  const createUserMutation = trpc.userData.createUserData.useMutation();

  const createUser = () => {
    if (!newUser.name || !newUser.email) {
      // Show an error message to the user
      console.error("Name and email are required");
      return;
    }

    console.log("Creating user with data:", newUser);
    createUserMutation.mutate(newUser, {
      onSuccess: (data) => {
        console.log("Success data:", data);
        setNewUser({} as CreateUserData);
      },
      onError: (error) => {
        console.log("Error:", error);
      },
    });
  };

  return (
    <div
      className="flex flex-col items-center text-center bg-slate-800  border border-black m-4 rounded-2xl"
      style={{ minHeight: "calc(85vh - 60px)" }}
    >
      <h1 className="text-3xl">Create User</h1>
      <div className="dark:text-slate-300  dark:bg-slate-900 pt-5 px-4 py-2 border border-slate-950 m-4 rounded-2xl  pb-1 flex-col items-center flex justify-center w-full sm:w-1/2 max-w-[440px] min-w-[440px] sm:min-w-[440px]  ">
        <form className="dark:text-slate-300 dark:bg-slate-700 mb-4 w-full  sm:max-w-[400px] px-4 py-4 rounded-lg gap-4 grid grid-cols ">
          <span className="text-xl"> Enter user details</span>
          <input
            className="dark:text-slate-900 p-2"
            type="text"
            value={newUser.name}
            onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
            placeholder="Name"
            autoComplete="off"
          />

          <input
            className="dark:text-slate-900 p-2"
            type="text"
            value={newUser.username}
            onChange={(e) =>
              setNewUser({ ...newUser, username: e.target.value })
            }
            placeholder="Username"
            autoComplete="off"
          />

          <input
            className="dark:text-slate-900 p-2"
            type="text"
            value={newUser.email}
            onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
            placeholder="Email"
            autoComplete="off"
          />

          <input
            className="dark:text-slate-900 p-2"
            type="text"
            value={newUser.address?.street}
            onChange={(e) =>
              setNewUser({
                ...newUser,
                address: { ...newUser.address, street: e.target.value },
              })
            }
            placeholder="Street"
            autoComplete="off"
          />

          {/* Add more inputs for other fields in a similar way */}

          <input
            className="dark:text-slate-900 p-2"
            type="text"
            value={newUser.avatar}
            onChange={(e) => setNewUser({ ...newUser, avatar: e.target.value })}
            placeholder="Avatar"
            autoComplete="off"
          />

          <button onClick={createUser} className="dark:text-slate-900 p-2">
            Create User
          </button>
        </form>
      </div>
    </div>
  );
}
