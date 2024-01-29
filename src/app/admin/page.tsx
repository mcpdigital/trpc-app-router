// Import necessary modules and components
"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Sidebar from "./Sidebar";
//import UsersTable from "./UsersTable";
import AddUserForm from "./AddUserForm";
//import useUsers from "./useUsers";
import Loading from "@/components/Loading";
import { useOrganizationList, useUser } from "@clerk/nextjs";
const Admin = () => {
  // Initialize the useUsers hook to manage user data

  // Organization data
  const { organizationList, isLoaded, setActive } = useOrganizationList();

  // User data
  //const { userList } = useUserList();

  // Next.js router
  const router = useRouter();

  // State to control the loading delay
  const [showLoader, setShowLoader] = useState(true);

  // Simulate a 5-second delay before hiding the loader
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 2000);

    return () => clearTimeout(timer); // Clear the timer on component unmount
  }, []);

  // Wait for organization data to load and check if the user's role is not admin
  useEffect(() => {
    if (isLoaded) {
      // Find the admin organization from the loaded organization list
      const adminOrganization = organizationList.find(
        (org) => org.membership.role === "org:admin"
      );

      // If the user is not an admin, redirect to the homepage
      if (
        !adminOrganization ||
        adminOrganization.membership.role !== "org:admin"
      ) {
        router.push("/"); // Replace '/' with the homepage URL
      }
    }
  }, []);

  // Get the organization details of the admin
  const adminOrganization = isLoaded
    ? organizationList.find((org) => org.membership.role === "org:admin")
    : null;

  // Set the admin details
  const adminName = adminOrganization
    ? adminOrganization.organization.name
    : "N/A";
  const adminRole = adminOrganization
    ? adminOrganization.membership.role
    : "N/A";
  const adminImageUrl = adminOrganization
    ? adminOrganization.organization.imageUrl
    : "/admin.jpeg"; // Replace with the default admin image URL or any other fallback image

  // Render the loader while waiting for organization data to load
  if (showLoader) {
    return <Loading />;
  }

  // Render the admin page if the user's role is "admin"
  return (
    <div className="flex min-h-screen flex-col bg-indigo-100 md:flex-row dark:bg-indigo-950">
      <Sidebar />
      <div className="mt-12 flex w-full flex-col items-center  md:w-5/6">
        <div className="mb-4">
          {/* Organization Name */}
          <h2 className="text-xl font-bold">Organization: {adminName}</h2>
        </div>
        <div className="mb-4">
          {/* Admin Role */}
          <p className="text-lg font-semibold">Role: {adminRole}</p>
        </div>
        {/* Admin Image */}
        <Image width={300} height={300} src={adminImageUrl} alt="Admin" />
        {/* Users Table <UsersTable users={userList} deleteUser={deleteUser} />*/}

        {/* Add User Form */}
        <div className="flex w-1/2 flex-col rounded-lg p-4 dark:bg-slate-800"></div>
      </div>
    </div>
  );
};

export default Admin;
