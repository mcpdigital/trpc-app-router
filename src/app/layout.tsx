import "@/styles/globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from ".././components/Navbar";
import { TRPCReactQueryProvider } from "@/components/providers/trpc-provider";
import Footer from ".././components/Footer";
import { shadesOfPurple } from "@clerk/themes";
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "TRPC App Router Working Example",
  description: "Implement TRPC on the new next 14 with  app router",
};

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
        <body
          className={` bg:slate-200 font-sans text-black dark:bg-slate-800 dark:text-white ${inter.variable}`}
        >
          <main className="app">
            <Navbar />
            <TRPCReactQueryProvider>{children}</TRPCReactQueryProvider>
            <Footer />
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
