"use client";
// src/app/usercrud/userlist/page.tsx

import { useEffect } from "react";
import { trpc } from "@/lib/trpc/trpc-client";
import Loading from "@/components/Loading";

export default function UserListPage() {
  const usersQuery = trpc.users.getUsers.useQuery();

  useEffect(() => {
    usersQuery.refetch();
  }, [usersQuery]); // include usersQuery in the dependency array

  if (usersQuery.isLoading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  if (usersQuery.isError) {
    return <div>Error: {usersQuery.error.message}</div>;
  }

  return (
    <div
      className="flex flex-col border border-black m-4 rounded-2xl "
      style={{ minHeight: "calc(85vh - 60px)" }}
    >
      <h1 className="p-4 text-4xl text-center">All Users</h1>
      <div className="flex flex-row p-2 mx-4 justify-around">
        <p className="">NAME</p>
        <p className="">EMAIL</p>
      </div>

      {usersQuery.data.map((user) => (
        <div
          className="p-2 border border-gray-700  mx-4 flex flex-row gap-4 justify-between text-left "
          key={user.id}
        >
          <p className="font-semibold">{user.name}</p>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
}
