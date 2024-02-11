import "@/styles/globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from ".././components/Navbar";
import { TRPCReactQueryProvider } from "@/components/providers/trpc-provider";
import Footer from ".././components/Footer";
import { shadesOfPurple } from "@clerk/themes";

import Providers from "@/components/providers/theme-provider";
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
      <html lang="en">
        <body
          className={` dark antialiased noisesvg  font-sans text-black bg-slate-300 dark:bg-slate-800 dark:text-white/75 ${inter.variable}`}
        >
          <Providers>
            <main className="app">
              <Navbar />

              <TRPCReactQueryProvider>{children}</TRPCReactQueryProvider>

              <Footer />
            </main>
          </Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}
