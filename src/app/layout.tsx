"use client";

import { Manrope } from "next/font/google";
import "./globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

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
      <QueryClientProvider client={queryClient}>
        <body className={`${manrope.className} px-3 py-5 h-screen lg:flex lg:items-center lg:justify-center `}>
          {children}
        </body>
      </QueryClientProvider>
    </html>
  );
}
