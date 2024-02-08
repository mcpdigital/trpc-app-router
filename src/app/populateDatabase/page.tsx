// src/app/populateDatabase.tsx
"use client";
import { useEffect } from "react";
import { trpc } from "@/lib/trpc/trpc-client";
import { UpdateUserData } from "@/types/types";

export default function PopulateDatabase() {
  const createUserDataMutation = trpc.userData.createUserData.useMutation();

  useEffect(() => {
    const populateDatabase = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const users: UpdateUserData[] =
          (await response.json()) as UpdateUserData[];

        users.forEach((user: UpdateUserData) => {
          createUserDataMutation.mutate({
            name: user.name ?? "",
            username: user.username ?? "",
            email: user.email ?? "",
            phone: user.phone ?? "",
            website: user.website ?? "",
            avatar: user.avatar ?? "",
            address: {
              street: user.address?.street ?? "",
              suite: user.address?.suite ?? "",
              city: user.address?.city ?? "",
              zipcode: user.address?.zipcode ?? "",
              geo: {
                lat: user.address?.geo?.lat ?? "",
                lng: user.address?.geo?.lng ?? "",
              },
            },
            company: {
              name: user.company?.name ?? "",
              catchPhrase: user.company?.catchPhrase ?? "",
              bs: user.company?.bs ?? "",
            },
          });
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    void populateDatabase();
  }, []);

  return <div>Database populated OK</div>;
}
