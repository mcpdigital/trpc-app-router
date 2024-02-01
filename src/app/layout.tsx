"use client";

import React from "react";
import Head from "next/head";
import { QueryClient, QueryClientProvider } from "react-query";
import "@/styles/globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import Navbar from ".././components/Navbar";
import { TRPCReactQueryProvider } from "@/components/providers/trpc-provider";
import Footer from ".././components/Footer";
import { shadesOfPurple } from "@clerk/themes";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

// Create a client
const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: shadesOfPurple,
      }}
    >
      <html className="dark" lang="en">
        <Head>
          <title>TRPC App Router Working Example</title>
          <meta
            name="description"
            content="Implement TRPC on the new next 14 with  app router"
          />
        </Head>
        <body
          className={` bg:slate-200 font-sans text-black dark:bg-slate-800 dark:text-white ${inter.variable}`}
        >
          <main className="app">
            <Navbar />
            <QueryClientProvider client={queryClient}>
              <TRPCReactQueryProvider>{children}</TRPCReactQueryProvider>
            </QueryClientProvider>
            <Footer />
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
