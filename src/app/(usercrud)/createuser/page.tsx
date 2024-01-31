"use client";
import { useRef } from "react";
import { trpc } from "@/lib/trpc/trpc-client";
import { CreateUserData } from "@/types/types";

export default function CreateUserPage() {
  const formRef = useRef<HTMLFormElement>(null);
  const createUserMutation = trpc.userData.createUserData.useMutation();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!formRef.current) {
      return;
    }

    const formData = new FormData(formRef.current);
    const newUser: Record<string, any> = {};

    for (let [key, value] of formData.entries()) {
      let keys = key.split(".");
      if (keys.length === 1) {
        newUser[key] = value;
      } else if (keys.length === 2) {
        if (!newUser[keys[0]]) {
          newUser[keys[0]] = {};
        }
        newUser[keys[0]][keys[1]] = value;
      } else if (keys.length === 3) {
        if (!newUser[keys[0]]) {
          newUser[keys[0]] = {};
        }
        if (!newUser[keys[0]][keys[1]]) {
          newUser[keys[0]][keys[1]] = {};
        }
        newUser[keys[0]][keys[1]][keys[2]] = value;
      }
    }

    // Now you can use newUser to make your API call
    createUserMutation.mutate(newUser as CreateUserData);
  };

  return (
    <div className="flex flex-col mx-auto mt-4 p-4 items-center dark:text-slate-200">
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="dark:text-slate-300 dark:bg-slate-700 mt-4 p-4 rounded-lg gap-4  mx-auto flex flex-col "
      >
        <input
          className="dark:text-slate-900 p-2"
          type="text"
          name="name"
          placeholder="Name"
          autoComplete="off"
        />

        <input
          className="dark:text-slate-900 p-2"
          type="text"
          name="email"
          placeholder="Email"
          autoComplete="off"
        />

        <input
          className="dark:text-slate-900 p-2"
          type="text"
          name="username"
          placeholder="Username"
          autoComplete="off"
        />

        <input
          className="dark:text-slate-900 p-2"
          type="text"
          name="website"
          placeholder="Website"
          autoComplete="off"
        />
        <input
          className="dark:text-slate-900 p-2"
          type="text"
          name="phone"
          placeholder="Phone"
          autoComplete="off"
        />

        <input
          className="dark:text-slate-900 p-2"
          type="text"
          name="avatar"
          placeholder="Avatar"
          autoComplete="off"
        />

        <input
          className="dark:text-slate-900 p-2"
          type="text"
          name="address.street"
          placeholder="Street"
          autoComplete="off"
        />

        <input
          className="dark:text-slate-900 p-2"
          type="text"
          name="address.suite"
          placeholder="Suite"
          autoComplete="off"
        />

        <input
          className="dark:text-slate-900 p-2"
          type="text"
          name="address.city"
          placeholder="City"
          autoComplete="off"
        />

        <input
          className="dark:text-slate-900 p-2"
          type="text"
          name="address.zipcode"
          placeholder="Zipcode"
          autoComplete="off"
        />

        <input
          className="dark:text-slate-900 p-2"
          type="text"
          name="address.geo.lat"
          placeholder="Latitude"
          autoComplete="off"
        />

        <input
          className="dark:text-slate-900 p-2"
          type="text"
          name="address.geo.lng"
          placeholder="Longitude"
          autoComplete="off"
        />

        <input
          className="dark:text-slate-900 p-2"
          type="text"
          name="company.catchPhrase"
          placeholder="catchPhrase"
          autoComplete="off"
        />

        <input
          className="dark:text-slate-900 p-2"
          type="text"
          name="company.bs"
          placeholder="bs"
          autoComplete="off"
        />

        <input
          className="dark:text-slate-900 p-2"
          type="text"
          name="company.name"
          placeholder="company-name"
          autoComplete="off"
        />

        <button
          type="submit"
          className="dark:text-slate-300 text-gray-900 p-2 rounded-2xl bg-slate-800 hover:bg-slate-700 active:bg-slate-900"
        >
          Create User
        </button>
      </form>
    </div>
  );
}
