"use client";
import React from "react";
import Link from "next/link";
import { SignedOut, UserButton, SignedIn, useSession } from "@clerk/nextjs";
import { checkUserRole, getUserRole } from "../../../utils/userUtils";
import { GRAD_GOTHAN_TB } from "@/tw_gradients";

const UserInfo = () => {
  const { session } = useSession();
  const userRole = checkUserRole(session);
  const userName = getUserRole(session);

  return (
    <div
      className="flex flex-col text-center bg-slate-800  border border-black m-4 rounded-2xl"
      style={{ minHeight: "calc(85vh - 60px)" }}
    >
      <h1 className="text-3xl">TEMPLATE</h1>
      <div className="dark:text-slate-300  dark:bg-slate-900 pt-5 px-4 py-2 border border-slate-950 m-4 rounded-lg  pb-1 flex-row flex justify-center ">
        <p></p>
        <div className="flex flex-col ">{userRole}</div>
      </div>
    </div>
  );
};
export default UserInfo;
