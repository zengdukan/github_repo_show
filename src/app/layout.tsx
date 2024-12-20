"use client"
import type { Metadata } from "next";
import localFont from "next/font/local";
import { Toaster } from "@/components/ui/toaster"
import "./globals.css";
import { GitContext } from "@/lib/context";
import { useState } from "react";
import { Account, Repo } from "@/lib/data-struct";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [account, setAccount] = useState<Account>();
  const [repos, setRepos] = useState<Repo[]>([]);
  const [mock, setMock] = useState(false);

  return (
    <html lang="en">
      <head>
        <title>Github repository showcase</title>
        <meta name="description" content="show github org/user repository" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <GitContext.Provider value={{account, setAccount, repos, setRepos, mock, setMock}}>
          {children}
        </GitContext.Provider>
        <Toaster />
      </body>
    </html>
  );
}
