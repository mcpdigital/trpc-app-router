"use client";

import { SignedIn, SignedOut, SignInButton, auth } from "@clerk/nextjs";
import { useState } from "react";
import { ButtonGoldS } from "../../twstyles/buttons";
// This code snippet is a React functional component called GPT. It sets up a form with a textarea input and a button. When the form is submitted, it sends a POST request to the /api/OpenAI/openaiv4 endpoint with the value of the textarea as the request payload. If the response from the server is successful, it displays the response in a separate section below the form. The component manages the state of the prompt (input value), response (server response), and isLoading (whether the request is in progress) using the useState hook.
export default function GPT() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await fetch("/api/OpenAI/openaiv4", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      });
      if (res.ok) {
        const data = await res.json();
        setResponse((data as { response: string })?.response ?? "");
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
        <div className="mt-10 flex flex-col items-center justify-center bg-slate-800  text-3xl text-slate-200  md:text-3xl">
          Sign in to access the GPT Chat Demo
        </div>
        <div className="mt-4 flex flex-col items-center justify-center   text-slate-200">
          <span className="text-xl text-slate-200"></span>{" "}
          <div className=" mt-2 text-center ">
            <div className={ButtonGoldS}>
              <SignInButton afterSignInUrl="/gpt" mode="modal">
                Sign in
              </SignInButton>
            </div>
          </div>
        </div>
      </SignedOut>

      <SignedIn>
        <div className="container h-[800px] mx-6 my-6 p-12  rounded-xl border border-gray-700 text-black dark:bg-gray-900 shadow-2xl dark:text-white">
          <span className=" p-2 pb-4 text-2xl font-bold ">GPT-4</span>
          <form
            onSubmit={handleSubmit}
            className="mt-4 flex flex-row justify-between gap-3"
          >
            <textarea
              className=" w-screen rounded border dark:bg-gray-700  border-gray-500 p-2 text-gray-700 dark:text-gray-200"
              placeholder="Enter your prompt"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            ></textarea>
            <button
              type="submit"
              className="w-[170px] rounded bg-blue-500 p-2 text-white hover:bg-blue-600"
              disabled={isLoading}
            >
              {isLoading ? "Sending..." : "Send Prompt"}
            </button>
          </form>
          {response && (
            <div className="mt-4 rounded border border-gray-300 p-4">
              <p>{response}</p>
            </div>
          )}
        </div>
      </SignedIn>
    </div>
  );
}
