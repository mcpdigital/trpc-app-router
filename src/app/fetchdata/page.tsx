"use client";
import { useEffect, useState } from "react";
import { GRAD_GOTHAN_TB } from "../../tw_gradients";

interface Geo {
  lat: string;
  lng: string;
}

interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
  avatar: string;
}
const FetchData = () => {
  const [user, setUser] = useState<User[]>([]); // Add type annotation to data state variable

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const users: User[] = await response.json();
        setUser(users);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    void fetchUserData();
  }, []);

  return (
    <div className={GRAD_GOTHAN_TB + "container  p-4 text-slate-300"}>
      <h1 className="mb-4 text-2xl font-bold">COMPONENT MODE- GitHub Users</h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {user.map((user) => (
          <div key={user.id} className="bg-slate-700 text-white p-4 rounded-md">
            <p>
              <strong>ID:</strong> {user.id}
            </p>
            <p>
              <strong>Name:</strong> {user.name}
            </p>
            <p>
              <strong>Username:</strong> {user.username}
            </p>
            <p>
              <strong>Email:</strong> {user.email}
            </p>
            <p>
              <strong>Phone:</strong> {user.phone}
            </p>
            <p>
              <strong>Website:</strong> {user.website}
            </p>
            <p>
              <strong>Address:</strong> {user.address.street},{" "}
              {user.address.suite}, {user.address.city}, {user.address.zipcode}
            </p>
            <p>
              <strong>Geo:</strong> {user.address.geo.lat},{" "}
              {user.address.geo.lng}
            </p>
            <p>
              <strong>Company:</strong> {user.company.name},{" "}
              {user.company.catchPhrase}, {user.company.bs}
            </p>
            <p>
              <strong>Avatar:</strong> {user.avatar}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FetchData;
