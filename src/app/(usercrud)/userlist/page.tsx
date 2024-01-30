"use client";
// src/app/[userscrud]/updateuser/page.tsx
import { useEffect, useState } from "react";
import { trpc } from "@/lib/trpc/trpc-client";

interface UserData {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
  avatar: string;
}

export default function UsersList() {
  const [users, setUsers] = useState<UserData[]>([]);
  const getUsers = trpc.userData.getUserData.useQuery();

  useEffect(() => {
    if (getUsers.data) {
      setUsers(getUsers.data);
    }
  }, [getUsers.data]);

  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
          {/* Display other user data as needed */}
        </div>
      ))}
    </div>
  );
}
