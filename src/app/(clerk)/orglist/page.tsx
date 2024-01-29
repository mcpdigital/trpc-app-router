"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Sidebar from "../../admin/Sidebar";
import AddUserForm from "../../admin/AddUserForm";
import Loading from "@/components/Loading";
import { useOrganizationList, useUser } from "@clerk/nextjs";

const Admin = () => {
  const { organizationList, isLoaded, setActive } = useOrganizationList();
  const router = useRouter();
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      const adminOrganization = organizationList.find(
        (org) => org.membership.role === "org:admin"
      );

      if (
        !adminOrganization ||
        adminOrganization.membership.role !== "org:admin"
      ) {
        router.push("/");
      }
    }
  }, []);

  if (showLoader) {
    return <Loading />;
  }

  return (
    <div className="flex min-h-screen flex-col bg-indigo-100 md:flex-row dark:bg-indigo-950">
      <Sidebar />
      <div className="mt-12 flex w-full flex-col items-center  md:w-5/6">
        <div className="mb-4">
          <h2 className="text-xl font-bold">Organizations:</h2>
          {organizationList?.map((org) => (
            <div key={org.organization.id}>
              <h3>{org.organization.name}</h3>
              <p>Role: {org.membership.role}</p>
            </div>
          ))}
        </div>
        <div className="flex w-1/2 flex-col rounded-lg p-4 dark:bg-slate-800"></div>
      </div>
    </div>
  );
};

export default Admin;
