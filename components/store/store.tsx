"use client";
import {
  DropdownMenu,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";
import { Skeleton } from "../ui/skeleton";
import { signOut } from "next-auth/react";

interface AddStoreProps {
  email: string;
  name: string;
  image: string;
  store: boolean;
}

export const StoreForm = ({ email, image, name, store }: AddStoreProps) => {
  return (
    <Card className="flex flex-col gap-2 dark:bg-black">
      <CardHeader>
        <div className="flex items-center justify-between">
          <Link href="/">
            <CardTitle className="text-[16px] font-bold">BookEase</CardTitle>
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                className="rounded-full border border-gray-200 w-8 h-8 dark:border-gray-800"
                size="icon"
                variant="ghost"
              >
                <Image
                  alt="Avatar"
                  className="rounded-full"
                  height="32"
                  src={image !== "" ? image : "/placeholder.svg"}
                  style={{
                    aspectRatio: "32/32",
                    objectFit: "cover",
                  }}
                  width="32"
                />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[200px]" align="end">
              <div className="px-2 flex flex-col space-y-1 mt-2 mb-2">
                <h1 className="font-semibold text-[14px]">{name}</h1>
                <p className="text-[12px] opacity-60">{email}</p>
              </div>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="cursor-pointer">
                Settings
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                Support
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                className="cursor-pointer"
                onClick={() => {
                  signOut();
                }}
              >
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="text-center flex items-center justify-center pt-10"></div>
        <CardTitle className="text-[14px] font-regular text-center pt-5">
          Create your first online Business
        </CardTitle>
        <CardDescription className="text-center px-4 text-[12px]">
          Experiment with different designs and products until you learn what
          works
        </CardDescription>
      </CardHeader>
      <CardContent className="text-center">
        <Link href="/store/add-store">
          <Button size="sm">Create Business</Button>
        </Link>
      </CardContent>
      <CardFooter className="flex flex-col gap-3 justify-center items-center">
        <CardTitle className="text-[14px] font-regular text-center pt-5">
          Your businesses
        </CardTitle>
        <div className="border-[1px] border-slate-200/80 rounded-lg  px-5 py-3">
          <div className="flex items-center space-x-4">
            <Skeleton className="h-12 w-12 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[250px]" />
              <Skeleton className="h-4 w-[200px]" />
            </div>
          </div>
        </div>
        <div className="border-[1px] border-slate-200/80 rounded-lg  px-5 py-3">
          <div className="flex items-center space-x-4">
            <Skeleton className="h-12 w-12 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[250px]" />
              <Skeleton className="h-4 w-[200px]" />
            </div>
          </div>
        </div>
        <div className="border-[1px] border-slate-200/80 rounded-lg  px-5 py-3">
          <div className="flex items-center space-x-4">
            <Skeleton className="h-12 w-12 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[250px]" />
              <Skeleton className="h-4 w-[200px]" />
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};
