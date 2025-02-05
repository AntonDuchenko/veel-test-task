import { instance } from "./axios.instance";
import { IUser } from "@/types";
import Cookies from "js-cookie";

export const signUp = async (userData: IUser) => {
  try {
    const response = await instance.post("/auth/register", userData);

    return response.data;
  } catch (error) {
    throw new Error("Failed to sign up");
  }
};

export const signIn = async (userData: IUser) => {
  try {
    const response = await instance.post<{
      accessToken: string;
    }>("/auth/login", userData);

    Cookies.set("access-token", response.data.accessToken);

    return response.data;
  } catch (error) {
    throw new Error("Failed to sign in");
  }
};
