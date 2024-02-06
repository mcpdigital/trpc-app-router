import React from "react";
import { ButtonTailblocksBlue } from "../../twstyles/buttons";

const TailBlocks = () => {
  return (
    <div>
      <section className="body-font bg-gray-900 text-gray-400">
        <div className="container mx-auto px-5 py-24">
          <div className="mb-20 flex w-full flex-col text-center">
            <h2 className="title-font mb-1 text-xs font-medium tracking-widest text-indigo-400">
              CLERK IMPLEMENTATION WITH NEXT 14.0.4 T3 STACK
            </h2>
            <h1 className="title-font mb-4 text-2xl font-medium text-white sm:text-3xl">
              Page for Logged In Users
            </h1>
            <p className="mx-auto text-base leading-relaxed lg:w-2/3">
              This is a protected page using SingedIn and SignedOut status.
              Whenever the user is singed out, an informational page will
              appear, while for the signed in user this page will appear.
            </p>
          </div>
          <div className="flex flex-wrap">
            <div className="border-l-2 border-gray-800 px-8 py-6 md:w-full lg:w-1/2 xl:w-1/4">
              <h2 className="title-font mb-2 text-lg font-medium text-white sm:text-xl">
                Clerk Implementation
              </h2>
              <p className="mb-4 text-base leading-relaxed">
                The implementation of Clerk was smooth, with no issues. All the
                state functions and button types have been used and tested. This
                protected page is an example of the flexibility available to
                protect routes.
              </p>
              <a className="inline-flex items-center text-indigo-400">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="ml-2 h-4 w-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
            <div className="border-l-2 border-gray-800 px-8 py-6 md:w-full lg:w-1/2 xl:w-1/4">
              <h2 className="title-font mb-2 text-lg font-medium text-white sm:text-xl">
                UI Components
              </h2>
              <p className="mb-4 text-base leading-relaxed">
                This page shows a component with the text blocks or features. It
                is import on a page after the login is completed. The use of
                components is to facilitate the code reusability and avoid
                confusion with too large number of JSX lines in the code.
              </p>
              <a className="inline-flex items-center text-indigo-400">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="ml-2 h-4 w-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
            <div className="border-l-2 border-gray-800 px-8 py-6 md:w-full lg:w-1/2 xl:w-1/4">
              <h2 className="title-font mb-2 text-lg font-medium text-white sm:text-xl">
                Custom layout.tsx
              </h2>
              <p className="mb-4 text-base leading-relaxed">
                The custom layout for this page will write over the Root layout
                a login button that redirects to this page when logged in. After
                is logged out in it will return for the informational page.
              </p>
              <a className="inline-flex items-center text-indigo-400">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="ml-2 h-4 w-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
            <div className="border-l-2 border-gray-800 px-8 py-6 md:w-full lg:w-1/2 xl:w-1/4">
              <h2 className="title-font mb-2 text-lg font-medium text-white sm:text-xl">
                The project
              </h2>
              <p className="mb-4 text-base leading-relaxed">
                Since the idea is to use the T3 stack, the first thing was to
                migrate to NextJS 14.0.4 and use the latest versions of
                everything. For styles the tailwindcss was used and some tests
                were done with constants having pre-defined tailwind strings to
                be resusable. The button bellow is using one of these tailwind
                strings.{" "}
                <p className="mt-1 text-sm font-semibold">
                  {ButtonTailblocksBlue}
                </p>
              </p>
              <a className="inline-flex items-center text-indigo-400">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="ml-2 h-4 w-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
          <button className={ButtonTailblocksBlue}>Button</button>
        </div>
      </section>
      GitHub
    </div>
  );
};

export default TailBlocks;
