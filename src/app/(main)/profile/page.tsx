"use client";

import { Title } from "@/components/shared";
import { getUser } from "@/lib/api/user";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";

const Profile = () => {
  const { data: user } = useQuery({
    queryKey: ["user"],
    queryFn: getUser,
  });

  return (
    <>
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
