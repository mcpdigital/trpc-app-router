"use client";
import { useRef } from "react";
import { trpc } from "@/lib/trpc/trpc-client";
import { CreateUserData } from "@/types/types";

export default function CreateUserForm({
  onClose,
  onErr,
}: {
  onClose: () => void;
  onErr: () => void;
}) {
  const formRef = useRef<HTMLFormElement>(null);
  const createUserMutation = trpc.userData.createUserData.useMutation();
  const usersQuery = trpc.userData.getUserData.useQuery();
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
    createUserMutation.mutate(newUser as CreateUserData, {
      onSuccess: () => {
        // Clear the form
        formRef.current?.reset();

        // Show a success toast
        // toast.success("User created successfully!", { autoClose: 2000 });
        usersQuery.refetch();
        onClose();
      },

      onError: () => {
        // Show an error toast
        console.error("Error creating user");
        //usersQuery.refetch();
        onErr();
      },
    });
  };

  return (
    <>
      <div className="dark:bg-slate-900">
        <h1 className="p-4 text-4xl dark:text-slate-200 dark: dark:bg-slate-900">
          Create User
        </h1>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="dark:text-slate-300 dark:bg-slate-700 bg-slate-600 text-slate-200 mt-4 p-4 rounded-lg gap-4  "
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "1em",
          }}
        >
          <div className="flex flex-col mx-auto">
            <div className="space-y-2 space-x-4">
              <h2 className="dark:text-slate-300 ml-4 font-semibold">
                User Information
              </h2>
              <hr />
              <input
                className="dark:text-slate-900 text-slate-900 p-2 w-[48%]"
                type="text"
                name="name"
                placeholder="Name"
                autoComplete="off"
              />
              <input
                className="dark:text-slate-900 text-slate-900 p-2 w-[48%]"
                type="text"
                name="email"
                placeholder="Email"
                autoComplete="off"
              />
              <input
                className="dark:text-slate-900 text-slate-900 p-2 w-[48%]"
                type="text"
                name="username"
                placeholder="Username"
                autoComplete="off"
              />
              <input
                className="dark:text-slate-900 text-slate-900 p-2 w-[48%]"
                type="text"
                name="phone"
                placeholder="Phone"
                autoComplete="off"
              />
              <input
                className="dark:text-slate-900 text-slate-900 p-2 w-[48%]"
                type="text"
                name="avatar"
                placeholder="Avatar"
                autoComplete="off"
              />
            </div>

            <div className="space-y-2 space-x-4">
              <h2 className="dark:text-slate-300 mt-4 ml-4 font-semibold">
                Address Information
              </h2>
              <hr />
              <input
                className="dark:text-slate-900 text-slate-900 p-2 w-[58%]"
                type="text"
                name="address.street"
                placeholder="Street"
                autoComplete="off"
              />
              <input
                className="dark:text-slate-900 text-slate-900 p-2 w-[38%]"
                type="text"
                name="address.suite"
                placeholder="Suite"
                autoComplete="off"
              />
              <input
                className="dark:text-slate-900 text-slate-900 p-2 w-[58%]"
                type="text"
                name="address.city"
                placeholder="City"
                autoComplete="off"
              />
              <input
                className="dark:text-slate-900 text-slate-900 p-2 w-[38%]"
                type="text"
                name="address.zipcode"
                placeholder="Zipcode"
                autoComplete="off"
              />
              <input
                className="dark:text-slate-900 text-slate-900 p-2 w-[48%]"
                type="text"
                name="address.geo.lat"
                placeholder="Latitude"
                autoComplete="off"
              />
              <input
                className="dark:text-slate-900 text-slate-900 p-2 w-[48%]"
                type="text"
                name="address.geo.lng"
                placeholder="Longitude"
                autoComplete="off"
              />
            </div>

            <div className="space-y-2 space-x-4">
              <h2 className="dark:text-slate-300 ml-4 mt-4 font-semibold">
                Company Information
              </h2>
              <hr />
              <input
                className="dark:text-slate-900 text-slate-900 p-2 w-[58%]"
                type="text"
                name="company.name"
                placeholder="Company Name"
                autoComplete="off"
              />
              <input
                className="dark:text-slate-900 text-slate-900 p-2 w-[38%]"
                type="text"
                name="company.bs"
                placeholder="Business Segment"
                autoComplete="off"
              />
              <input
                className="dark:text-slate-900 text-slate-900 p-2 w-[98%]"
                type="text"
                name="company.catchPhrase"
                placeholder="Catch Phrase"
                autoComplete="off"
              />
            </div>

            <div className=" mt-8 justify-center gap-4 flex items-center ">
              <button
                type="submit"
                className="dark:text-slate-900 min-w-24 dark:hover:text-slate-200 dark:active-text-slate-200 text-gray-900 p-2 rounded-2xl bg-slate-200 hover:bg-slate-100 dark:hover:bg-slate-950 active:bg-slate-100  border-2 border-slate-300 dark:border-slate-800 hover:border-slate-200 dark:hover:border-slate-900 active:border-slate-900 dark:active:border-slate-200 ring-blue-600 ring-4"
              >
                Create
              </button>

              <button
                onClick={onErr}
                className=" dark:text-slate-900 min-w-24 dark:hover:text-slate-200 dark:active-text-slate-200 text-gray-900 p-2 rounded-2xl bg-slate-200 hover:bg-slate-100 dark:hover:bg-slate-950 active:bg-slate-100  border-2 border-slate-300 dark:border-slate-800 hover:border-slate-200 dark:hover:border-slate-900 active:border-slate-900 dark:active:border-slate-200  ring-gray-600 ring-4"
              >
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
