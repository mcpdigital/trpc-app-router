"use client";
import Image from "next/image";
import { useState } from "react";
import { GRAD_WITCH, GRAD_OCEANIC, GRAD_MIDNIGHT } from "../../tw_gradients";
import { SignedOut, SignedIn, SignInButton } from "@clerk/nextjs";
import { ButtonGoldS } from "../../twstyles/buttons";

// This code defines a React component called "DallE". It renders a form with a textarea and a submit button. When the form is submitted, it sends a POST request to "/api/OpenAI/dallev3" with the prompt text from the textarea. If the response is successful, it updates the state with the response data. If there is an error, it sets the response to "Failed to fetch response." The component also displays the response if it exists.---------
// app/fetch-db/page.tsx file

export default function DallE() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  interface ResponseData {
    data: string; // Update the type based on the actual response data structure
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await fetch("/api/OpenAI/dallev3", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      });
      if (res.ok) {
        const data: ResponseData = await res.json();
        setResponse(data.data);
        console.log("RESPONSE IS:", data.data);
      } else {
        throw new Error("Network response was not ok.");
      }
    } catch (error) {
      setResponse("Failed to fetch response.");
    }
    setIsLoading(false);
  };

  return (
    <div>
      <SignedOut>
        <div className="flex flex-col items-center justify-center bg-slate-900 pt-24  text-3xl text-slate-200  md:text-3xl">
          Example of a protected page
        </div>
        <div className="flex flex-col items-center justify-center pt-2   text-slate-200">
          <span className="text-2xl text-slate-200">
            Sign in to see protected content:
          </span>{" "}
          <div className=" mt-2 text-center ">
            <div className={ButtonGoldS}>
              <SignInButton afterSignInUrl="/DALL-E" mode="modal">
                Sign in
              </SignInButton>
            </div>
          </div>
        </div>
      </SignedOut>

      <SignedIn>
        <div
          className={
            GRAD_MIDNIGHT +
            "container max-h-[800px] my-4 p-10 shadow-xl mx-6 rounded-xl h-screen text-slate-900 dark:text-white"
          }
        >
          <h1 className="text-2xl ">Ask DALL-E</h1>
          <form
            onSubmit={handleSubmit}
            className="mt-2 flex flex-row justify-around gap-3"
          >
            <textarea
              className=" w-screen rounded border border-gray-300 p-2 text-gray-900 dark:bg-slate-800 dark:text-gray-200"
              placeholder="Enter your prompt for Dall-E"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            ></textarea>
            <button
              type="submit"
              className="w-[170px] rounded bg-gradient-to-r from-blue-500 to-purple-500 p-2 text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600"
              // className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
              disabled={isLoading}
            >
              {isLoading ? "Sending..." : "Send Prompt"}
            </button>
          </form>

          {response && (
            <div className="mt-4 rounded border border-gray-300 p-4">
              <p>{prompt}</p>

              <Image src={response} width={1792} height={1024} alt={response} />
            </div>
          )}
        </div>
      </SignedIn>
    </div>
  );
}
