import { SignInButton, SignedIn, SignedOut } from "@clerk/nextjs";
import React from "react";
import TailBlocks from "~/components/ui/TailBlocks";
import { ButtonGoldS } from "~/twstyles/buttons";

const pgtailblocks = () => {
  return (
    <div>
      <SignedIn>
        <div>
          <TailBlocks />
        </div>
      </SignedIn>
      <div>
        <SignedOut>
          <div className="  flex flex-col items-center justify-center bg-slate-900 pt-24  text-3xl text-slate-200  md:text-3xl">
            Example of a protected page
          </div>
          <div className="flex flex-col items-center justify-center pt-2   text-slate-200">
            <span className="text-2xl text-slate-200">
              Sign in to see protected content:
            </span>{" "}
            <div className=" mt-2 text-center ">
              <div className={ButtonGoldS}>
                <SignInButton afterSignInUrl="/tailblocks" mode="modal">
                  Sign in
                </SignInButton>
              </div>
            </div>
          </div>
        </SignedOut>
      </div>
    </div>
  );
};
export default pgtailblocks;
