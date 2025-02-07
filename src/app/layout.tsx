"use client";

import { Manrope } from "next/font/google";
import "./globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const queryClient = new QueryClient();

  return (
    <html lang="en">
      <body
        className={`${manrope.className} h-screen lg:flex lg:items-center lg:justify-center bg-neutral-backgroud`}
      >
        <QueryClientProvider client={queryClient}>
          {children}
          <ToastContainer newestOnTop />
        </QueryClientProvider>
      </body>
    </html>
  );
}
