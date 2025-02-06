"use client";

import { Title } from "@/components/shared";
import { Button, Label } from "@/components/ui";
import { getUser } from "@/lib/api/user";
import { IUser } from "@/types";
import { useQuery } from "@tanstack/react-query";
import Cookies from "js-cookie";
import { ShipWheel } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Profile = () => {
  const { data: user } = useQuery({
    queryKey: ["user"],
    queryFn: getUser,
  });
  const router = useRouter();

  const handleLogout = () => {
    Cookies.remove("access-token");

    router.push("/sign-in");
  };

  return (
    <>
      <div className="flex items-center h-20 border-b gap-2 p-3">
        <ShipWheel size={50} />
        <Title title="Veel" type="3xl" />

        <Button className="ml-auto h-12 max-w-24 w-full" onClick={handleLogout}>
          Logout
        </Button>
      </div>
      <div className="p-3">
        <Title title="Profile" type="2xl" className="mb-5" />
        <div className="flex flex-col items-center gap-5 sm:flex-row sm:items-start">
          <Image
            className="rounded-[50%]"
            src="/assets/icons/empty-avatar.svg"
            alt="Avatar"
            width={200}
            height={200}
          />
          <div className="w-full">
            <Title title="Username" type="xl" />
            <div className="border border-neutral-stroke rounded-2xl p-4 max-w-80">
              {user?.username}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
