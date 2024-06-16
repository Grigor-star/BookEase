"use client";
/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/0VQeVw6FFw6
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

/** Add fonts into your Next.js project:



To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import {
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenu,
} from "@/components/ui/dropdown-menu";
import { signOut } from "next-auth/react";
import Image from "next/image";
import { ModeToggle } from "./mode-toggle";
import { usePathname } from "next/navigation";

interface DashboardProps {
  children: React.ReactNode;
  name: string;
  email: string;
  image: string;
}

export function Dashboard({ children, name, email, image }: DashboardProps) {
  const pathname = usePathname();

  return (
    <div className="grid min-h-screen w-full grid-cols-1 overflow-hidden lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r w-[18vw] bg-gray-100/40 lg:block dark:bg-gray-800/40">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-[60px] items-center border-b px-6 fixed w-[18vw]">
            <Link className="flex items-center gap-2 font-semibold" href="/">
              <Package2Icon className="h-6 w-6" />
              <span className="">BookEase</span>
            </Link>
            <Button className="ml-auto h-8 w-8" size="icon" variant="outline">
              <BellIcon className="h-4 w-4" />
              <span className="sr-only">Toggle notifications</span>
            </Button>
          </div>
          <div className="flex-1 overflow-auto py-2 mt-[70px] fixed w-[18vw]">
            <nav className="grid items-start px-4 text-sm font-medium">
              <Link
                className={`flex items-center gap-3 rounded-lg ${
                  pathname === "/dashboard"
                    ? "bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-50"
                    : "text-gray-500"
                } px-3 py-2  transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50`}
                href="/dashboard"
              >
                <HomeIcon className="h-4 w-4" />
                Dashboard
              </Link>
              <Link
                className={`flex items-center gap-3 rounded-lg ${
                  pathname === "/invoices"
                    ? "bg-gray-100 text-gray-900 dark:bg-gray-800  dark:text-gray-50"
                    : "text-gray-500"
                } px-3 py-2 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50`}
                href="/invoices"
              >
                <ShoppingCartIcon className="h-4 w-4" />
                Invoices
              </Link>
              <Link
                className={`flex items-center gap-3 rounded-lg ${
                  pathname === "/services"
                    ? "bg-gray-100 text-gray-900 dark:bg-gray-800  dark:text-gray-50"
                    : "text-gray-500"
                } px-3 py-2 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50`}
                href="/services"
              >
                <PackageIcon className="h-4 w-4" />
                Services
              </Link>
              <Link
                className={`flex items-center gap-3 rounded-lg ${
                  pathname === "/products"
                    ? "bg-gray-100 text-gray-900 dark:bg-gray-800  dark:text-gray-50"
                    : "text-gray-500"
                } px-3 py-2 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50`}
                href="/products"
              >
                <BoxIcon className="h-4 w-4" />
                Products
              </Link>
              <Link
                className={`flex items-center gap-3 rounded-lg ${
                  pathname === "/team"
                    ? "bg-gray-100 text-gray-900 dark:bg-gray-800  dark:text-gray-50"
                    : "text-gray-500"
                } px-3 py-2 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50`}
                href="/team"
              >
                <UsersIcon className="h-4 w-4" />
                Team
              </Link>
            </nav>
          </div>
        </div>
      </div>
      <div className="flex flex-col right-0">
        <header className="flex h-14 lg:h-[60px] items-center gap-4 z-10 lg:w-[82vw] top-0 lg:left-[18vw] w-[100vw] fixed border-b backdrop-blur-[5px] bg-[#f9f9f9] px-6 dark:bg-gray-800/40">
          <Sheet>
            <SheetTrigger className="lg:hidden">
              <Package2Icon className="h-6 w-6" />
              <span className="sr-only">Home</span>
            </SheetTrigger>
            <SheetContent side="left" className="lg:hidden">
              <SheetTitle className="mt-5">Navigation</SheetTitle>
              <nav className="grid items-start mt-3 text-sm font-medium">
                <Link
                  className={`flex items-center gap-3 rounded-lg ${
                    pathname === "/dashboard"
                      ? "bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-50"
                      : "text-gray-500"
                  } px-3 py-2  transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50`}
                  href="/dashboard"
                >
                  <HomeIcon className="h-4 w-4" />
                  Dashboard
                </Link>
                <Link
                  className={`flex items-center gap-3 rounded-lg ${
                    pathname === "/invoices"
                      ? "bg-gray-100 text-gray-900 dark:bg-gray-800  dark:text-gray-50"
                      : "text-gray-500"
                  } px-3 py-2 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50`}
                  href="/invoices"
                >
                  <ShoppingCartIcon className="h-4 w-4" />
                  Invoices
                </Link>
                <Link
                  className={`flex items-center gap-3 rounded-lg ${
                    pathname === "/services"
                      ? "bg-gray-100 text-gray-900 dark:bg-gray-800  dark:text-gray-50"
                      : "text-gray-500"
                  } px-3 py-2 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50`}
                  href="/services"
                >
                  <PackageIcon className="h-4 w-4" />
                  Services
                </Link>
                <Link
                  className={`flex items-center gap-3 rounded-lg ${
                    pathname === "/products"
                      ? "bg-gray-100 text-gray-900 dark:bg-gray-800  dark:text-gray-50"
                      : "text-gray-500"
                  } px-3 py-2 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50`}
                  href="/products"
                >
                  <BoxIcon className="h-4 w-4" />
                  Products
                </Link>
                <Link
                  className={`flex items-center gap-3 rounded-lg ${
                    pathname === "/team"
                      ? "bg-gray-100 text-gray-900 dark:bg-gray-800  dark:text-gray-50"
                      : "text-gray-500"
                  } px-3 py-2 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50`}
                  href="/team"
                >
                  <UsersIcon className="h-4 w-4" />
                  Team
                </Link>
              </nav>
            </SheetContent>
          </Sheet>

          <div className="w-full flex-1">
            <form>
              <div className="relative">
                <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
                <Input
                  className="w-full bg-white shadow-none appearance-none pl-8 md:w-2/3 lg:w-1/3 dark:bg-gray-950"
                  placeholder="Search"
                  type="search"
                />
              </div>
            </form>
          </div>
          <ModeToggle />
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
                  src={image}
                  style={{
                    aspectRatio: "32/32",
                    objectFit: "cover",
                  }}
                  width="32"
                />
                <img />
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
        </header>
        {children}
      </div>
    </div>
  );
}

function BellIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  );
}

function BoxIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <path d="m3.3 7 8.7 5 8.7-5" />
      <path d="M12 22V12" />
    </svg>
  );
}

function HomeIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function Package2Icon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
      <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
      <path d="M12 3v6" />
    </svg>
  );
}

function PackageIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m7.5 4.27 9 5.15" />
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <path d="m3.3 7 8.7 5 8.7-5" />
      <path d="M12 22V12" />
    </svg>
  );
}

function SearchIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function ShoppingCartIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  );
}

function UsersIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}
