"use client";

import { MenuIcon } from "lucide-react";
import Link from "next/link";
// import { UserButton, currentUser } from '@clerk/nextjs'
import { useAuth } from "@clerk/nextjs";
import Image from "next/image";

type Props = {};

const Navbar = (props: Props) => {
  const { isSignedIn } = useAuth();
  const user = isSignedIn;
  return (
    <header className="container mx-auto fixed right-0 left-0 top-2 py-4 px-4  bg-transparent backdrop-blur-lg z-[100] flex items-center  justify-between rounded-full">
      <Link href="/">
        <aside className="flex items-center gap-[2px]">
          <span className="text-3xl font-bold">DAF</span>
          <Image
            src="/fuzzieLogo.png"
            width={15}
            height={15}
            alt="fuzzie logo"
            className="shadow-sm"
          />
          <span className="text-3xl font-medium">THINK</span>
        </aside>
      </Link>
      <nav className="absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%] hidden md:block">
        <ul className="flex items-center gap-4 list-none">
          <li>
            <Link href="#products">Products</Link>
          </li>
          <li>
            <Link href="#pricing">Pricing</Link>
          </li>

          <li>
            <Link href="#resources">Resources</Link>
          </li>
          <li>
            <Link href="#documentation">Documentation</Link>
          </li>
          <li>
            {/* Contact github link  */}
            <Link href="https://f4faysal.vercel.app/" passHref>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <aside className="flex items-center gap-4">
        <Link
          href={isSignedIn ? "/dashboard" : "/sign-up"}
          className="relative inline-flex h-10 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
        >
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
            {user ? "Explore DaffThink" : "Get Started for Daffodil Students"}
          </span>
        </Link>
        {/* {user ? <UserButton afterSignOutUrl="/" /> : null} */}

        <MenuIcon className="md:hidden" />
      </aside>
    </header>
  );
};

export default Navbar;
