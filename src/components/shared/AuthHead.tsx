"use client";

import { usePathname } from "next/navigation";

export const AuthHead = () => {
  const pathname = usePathname();

  const location = () => {
    switch (pathname) {
      case "/sign-in":
        return "/assets/login-bg.webp";

      case "/sign-up":
        return "/assets/sign-up-bg.webp";

      default:
        return;
    }
  };

  const image = location();

  return (
    <div
      style={{ backgroundImage: `url(${image})` }}
      className="bg-cover bg-center bg-no-repeat flex rounded-3xl h-[455px] px-[10px] py-4 items-end mb-6 lg:w-1/2"
    ></div>
  );
};
