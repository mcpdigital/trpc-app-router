// GradientDivs.js
import React from "react";
import * as allgradients from "../../tw_gradients";
import { GRAD_OCEANIC } from "../../tw_gradients";

//Component to be insered in the layout
// This code snippet defines a React component called "OnlyGrads" that renders a styled div. The div contains a heading, a list of gradients, and their corresponding names. The component uses CSS classes to style the div and the list items. The list of gradients is generated dynamically using the Object.entries method to iterate over the allgradients object. Each gradient is rendered as a div element with a unique key and a combination of CSS classes for styling.
const OnlyGrads = () => (
  <div className="border-wihte rounded-lg  border-slate-500 border-2  mx-[5%] sm:mx-[33%] min-w-[360px] sm:min-w-[400px] sm:max-w-[33%] text-center p-4">
    <div
      className={
        GRAD_OCEANIC + " text-4xl text-transparent bg-clip-text mb-[10px]"
      }
    >
      <h2 className=" text-[1.5rem] border rounded-md">
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
          " shadow-inner min-h-[100px] p-1   text-slate-900 border-slate-800 rounded-lg mb-[8px] outline outline-gray-500 outline-offset-3"
        }
      >
        {key}
        <p className="">{value}</p>
      </div>
    ))}
  </div>
);
export default OnlyGrads;
