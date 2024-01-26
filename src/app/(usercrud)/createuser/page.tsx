"use client";
// src/app/usercrud/createuser/page.tsx
import { useState } from "react";
import { trpc } from "@/lib/trpc/trpc-client";

export default function CreateUserPage() {
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    password: "",
    avatar: "",
  });
  const createUserMutation = trpc.users.createUser.useMutation();

  const createUser = () => {
    createUserMutation.mutate(newUser, {
      onSuccess: () =>
        setNewUser({ name: "", email: "", password: "", avatar: "" }),
    });
  };

  return (
    <div
      className="flex flex-col text-center bg-slate-800  border border-black m-4 rounded-2xl"
      style={{ minHeight: "calc(85vh - 60px)" }}
    >
      <h1 className="text-3xl">Create User</h1>
      <div className="dark:text-slate-300  dark:bg-slate-900 pt-5 px-4 py-2 border border-slate-950 m-4 rounded-2xl  pb-1 flex-row flex justify-center ">
        <form className="dark:text-slate-300 dark:bg-slate-700 mb-4 w-screen px-4 py-4 rounded-lg gap-4 grid grid-cols-4 ">
          <input
            className="dark:text-slate-900 p-2"
            type="text"
            value={newUser.name}
            onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
            placeholder="Name"
          />
          <input
            className="dark:text-slate-900 p-2"
            type="text"
            value={newUser.email}
            onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
            placeholder="Email"
          />
          <input
            className="dark:text-slate-900  "
            type="password"
            value={newUser.password}
            onChange={(e) =>
              setNewUser({ ...newUser, password: e.target.value })
            }
            placeholder="Password"
          />
          <input
            className="dark:text-slate-900   "
            type="text"
            value={newUser.avatar}
            onChange={(e) => setNewUser({ ...newUser, avatar: e.target.value })}
            placeholder="Avatar URL (optional)"
          />
          <button
            className="dark:bg-slate-800 min-w-[84px] rounded-md hover:cursor-pointer hover:bg-slate-900 active:bg-slate-950  text-slate-100 p-2"
            onClick={createUser}
          >
            Create User
          </button>
        </form>
      </div>
    </div>
  );
}
