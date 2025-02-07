"use client";

import { ShipWheel } from "lucide-react";
import { Title } from "./Title";
import { Button } from "../ui";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { toastSuccess } from "@/lib/toastSuccess";

export const Header = () => {
  const router = useRouter();

  const handleLogout = () => {
    Cookies.remove("access-token");
    toastSuccess("Logout success");

    router.push("/sign-in");
  };

  return (
    <div className="flex items-center h-20 border-b gap-2 p-3">
      <ShipWheel size={50} />
      <Title title="Veel" type="3xl" />

      <Button className="ml-auto h-12 max-w-24 w-full" onClick={handleLogout}>
        Logout
      </Button>
    </div>
  );
};
