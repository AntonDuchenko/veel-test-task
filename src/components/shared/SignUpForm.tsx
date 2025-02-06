"use client";

import Image from "next/image";
import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
} from "../ui";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import classNames from "classnames";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { signUp } from "@/lib/api/auth";
import { IUser } from "@/types";
import { useRouter } from "next/navigation";

export const SignUpForm = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);

  const router = useRouter();

  const { mutate } = useMutation({
    mutationKey: ["signUp"],
    mutationFn: (data: IUser) => signUp(data),
  });

  const FormSchema = z.object({
    username: z.string().min(4, {
      message: "Username must be at least 4 characters.",
    }),
    password: z.string().min(6, {
      message: "Password must be at least 6 characters.",
    }),
    name: z.string().min(4, {
      message: "Name must be at least 4 characters.",
    }),
  });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
      password: "",
      name: "",
    },
  });

  const { errors, isValid } = form.formState;

  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    mutate(data, {
      onSuccess: () => {
        form.reset();
        router.push("/sign-in");
      },
    });
  };

  const onToggleShowPassword = () => {
    setIsShowPassword((prev) => !prev);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="mb-[37px] w-full">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem className="mb-8">
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input
                  placeholder="Input your username here"
                  {...field}
                  className={classNames({ "border-red-600": errors.username })}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="mb-8">
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input
                  placeholder="Input your name here"
                  {...field}
                  className={classNames({ "border-red-600": errors.name })}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className="mb-6">
              <FormLabel>Password</FormLabel>
              <FormControl>
                <div className="relative">
                  <Input
                    type={isShowPassword ? "text" : "password"}
                    placeholder="Input password here"
                    {...field}
                    className={classNames({
                      "border-red-600": errors.password,
                    })}
                  />
                  {field.value && (
                    <Button
                      type="button"
                      onClick={onToggleShowPassword}
                      size="icon"
                      variant="ghost"
                      className="absolute top-1/2 right-4 -translate-y-1/2"
                    >
                      {isShowPassword ? <EyeOffIcon /> : <EyeIcon />}
                    </Button>
                  )}
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex gap-4">
          <Button type="submit">Sign up</Button>
        </div>
      </form>
      <span className="text-lg font-normal">
        Have an account?{" "}
        <Link href="/sign-in" className="font-bold">
          Login Now
        </Link>
      </span>
    </Form>
  );
};
