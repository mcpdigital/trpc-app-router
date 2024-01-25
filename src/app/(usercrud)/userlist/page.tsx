"use client";
// src/app/usercrud/userlist/page.tsx

import { useEffect } from "react";
import { trpc } from "@/lib/trpc/trpc-client";

export default function UserListPage() {
  const usersQuery = trpc.users.getUsers.useQuery();

  useEffect(() => {
    usersQuery.refetch();
  }, [usersQuery]); // include usersQuery in the dependency array

  if (usersQuery.isLoading) {
    return <div>Loading...</div>;
  }

  if (usersQuery.isError) {
    return <div>Error: {usersQuery.error.message}</div>;
  }

  return (
    <div className=" flex flex-col text-center">
      <h1 className="p-4 text-4xl">All Users</h1>
      {usersQuery.data.map((user) => (
        <div key={user.id}>
          <p>{user.name}</p>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
}
