"use client";

import { AuthForm } from "@/components/ui/auth-form";
import Link from "next/link";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { loginSchema } from "@/schemas";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Social } from "./social";
import { useTransition } from "react";
import BeatLoader from "react-spinners/BeatLoader";

interface LoginFormProps {
  social?: boolean;
}

export function LoginForm({ social }: LoginFormProps) {
  const [isPending, startTransition] = useTransition();
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof loginSchema>) {
    startTransition(() => {
      console.log(values);
    });
  }
  return (
    <AuthForm
      title="Sign In"
      description="Enter your email below to login to your account"
      backButton={BackButton}
    >
      <div className="max-w-[70vw] flex flex-col justify-center">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 ">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      className="w-full"
                      disabled={isPending}
                      type="email"
                      placeholder="john@example.com"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription></FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isPending}
                      type="password"
                      placeholder="******"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription></FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button disabled={isPending} className="w-full" type="submit">
              {isPending ? <BeatLoader /> : "Submit"}
            </Button>
          </form>
          {social && <Social disabled={isPending} />}
        </Form>
      </div>
    </AuthForm>
  );
}

export const BackButton = () => {
  return (
    <div>
      Do not have an account?{" "}
      <Link className="underline" href="/auth/register">
        Sign up
      </Link>
    </div>
  );
};
