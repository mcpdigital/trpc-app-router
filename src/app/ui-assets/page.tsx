// import Link from "next/link";
import React from "react";
import Image from "next/image";
import {
  ButtonTeal,
  ButtonBlue,
  ButtonRed,
  ButtonGold,
  ButtonTealS,
  ButtonBlueS,
  ButtonRedS,
  ButtonGoldS,
} from "../../twstyles/buttons";

import MyGithub from "../../components/MyGithub";

const uiassets = () => {
  return (
    <div className=" h-screen bg-gray-700 pt-4">
      <div className="mx-auto flex max-w-sm justify-center rounded-md border border-slate-900 bg-gray-800 p-0.5 text-center  text-2xl text-gray-200 shadow-xl">
        <div className=" shadow-innder w-full rounded-md bg-slate-900 p-1 text-2xl text-gray-200">
          UI-ASSETS
        </div>
      </div>
      <div>
        <nav className="fixed ml-0 mt-4 flex w-full justify-between bg-gray-800 p-2">
          <div className="flex gap-2">
            <button
              type="button"
              className={ButtonTeal + " first-of-type:ml-2"}
            >
              Approve
            </button>

            <button type="button" className={ButtonBlue}>
              Button Blue
            </button>

            <button type="button" className={ButtonGold + " "}>
              Button Gold
            </button>
          </div>

          <button type="button" className={ButtonRed + " "}>
            Button Red
          </button>
        </nav>
      </div>
      <div className="fixed mt-20 flex w-full justify-between bg-gray-800 p-2">
        <div className="flex gap-2">
          <button type="button" className={ButtonTealS + " first-of-type:ml-2"}>
            Button Teal
          </button>

          <button type="button" className={ButtonBlueS}>
            Button Blue
          </button>

          <button
            type="button"
            className={
              ButtonGoldS +
              " group flex items-center justify-between gap-2 p-0.5 "
            }
          >
            <p>Gold</p>
            <span className="  group-hover:green-500 rounded-full border border-black bg-yellow-200 p-0.5 opacity-0 transition duration-300 group-hover:animate-spin group-hover:bg-yellow-300 group-hover:opacity-100 ">
              <Image
                src="/black-hole-3-svgrepo-com.svg"
                alt="Black Hole 3 SVG Repo"
                width={15}
                height={15}
                priority
              />
            </span>
          </button>
        </div>

        <button
          type="button"
          className={
            ButtonRedS +
            " group flex items-center justify-center gap-2 hover:opacity-100"
          }
        >
          <h1>Red Button</h1>
          <span className="  rounded-full bg-yellow-200 p-0.5 transition duration-300 group-hover:rotate-90 group-hover:bg-green-500">
            <Image
              src="/arrow-up-svgrepo-com.svg"
              alt="Logo"
              width={15}
              height={15}
              priority
            />
          </span>
        </button>
      </div>
      <div className="fixed mt-40 flex flex-col gap-2  text-center text-2xl text-slate-200">
        My Github Card
        <MyGithub />
      </div>
    </div>
  );
};

export default uiassets;
