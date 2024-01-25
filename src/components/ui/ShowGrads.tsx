// GradientDivs.js
import React from "react";
import * as allgradients from "../../tw_gradients";
import { GRAD_GOTHAN, GRAD_OCEANIC } from "../../tw_gradients";
//Component to Show the complete page of gradients with extras
/* This code snippet defines a React functional component called ShowGrads. It renders a page displaying gradients and additional information. The component uses Tailwind CSS classes for styling. The page includes a text box that appears only on large screens, a section displaying selected gradients and radials, and some explanatory text. The gradients and radials are rendered dynamically using the Object.entries method to iterate over an object called allgradients. Each gradient is rendered as a div element with a unique key and a combination of Tailwind CSS classes for styling. */
const ShowGrads = () => (
  <div className={GRAD_GOTHAN + " p-4 "}>
    <div className="static grid grid-flow-col  grid-cols-1 ">
      <div className="invisible absolute mt-0 grid max-w-[10%] overflow-hidden rounded-lg border border-slate-400 p-2 text-center text-slate-300 sm:visible sm:max-w-[26%] ">
        <p className=" p-1 font-extrabold">
          This page shows some gradients selected from{" "}
          <a
            href="https://hypercolor.dev"
            className={
              GRAD_OCEANIC +
              " test-center bg-orange-600  bg-clip-text text-transparent underline"
            }
          >
            HYPERCOLOR.DEV
          </a>
        </p>{" "}
        <p className="p-1 text-justify">
          There is an extensive use of tailwindcss gradients and correct
          positioning to keep it as responsive as possible.
        </p>{" "}
        <p className="p-1 text-justify">
          For this textbox, a single column {"grid"} is created, with a father
          div defined as {"static"} and the children as {"absolute"}
          {"."}
        </p>{" "}
        <p className="p-1 text-justify">
          This text div only appears when the display is small or greater:{" "}
          sm:max-w-[400px] sm:min-w-[400px] min-w[360px].
        </p>
        <p className="p-1 text-justify">
          Using a single column grid enabled the gradients div to not be
          bothered by this textbox.
        </p>
        <p className="p-1 text-justify">
          When the screen is too small, this textbox simply disappears using
          inivisble.
        </p>
        <p className="p-1 text-justify">
          It does not matter how many child divs I add it is an ABSOLUTE CHILD !
        </p>
      </div>
    </div>

    <div className="border-wihte mx-[5%]  min-w-[360px] rounded-lg  border-2 border-slate-500 p-4 text-center sm:mx-[33%] sm:min-w-[400px] sm:max-w-[33%]">
      <div
        className={
          GRAD_OCEANIC + " mb-[10px] bg-clip-text text-4xl text-transparent"
        }
      >
        <h2 className=" rounded-md border text-[1.5rem]">
          {" "}
          Selected Gradients and Radials from HYPERCOLOR.DEV
        </h2>
        <h1>GRADIENTS</h1>
      </div>

      {Object.entries(allgradients).map(([key, value]) => (
        <div
          key={key}
          className={
            value +
            " outline-offset-3 mb-[8px] min-h-[100px]   rounded-lg border-slate-800 p-1 text-slate-900 shadow-inner outline outline-gray-500"
          }
        >
          {key}
          <p className="">{value}</p>
        </div>
      ))}
    </div>
  </div>
);
export default ShowGrads;
