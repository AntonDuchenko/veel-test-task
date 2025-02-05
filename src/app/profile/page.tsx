"use client";

import { getUser } from "@/lib/api/user";
import { useEffect } from "react";

const Profile = () => {
  useEffect(() => {
    const fetch = async () => {
      await getUser();
    };

    fetch();
  }, []);

  return <div className="">Profile</div>;
};

export default Profile;
