import { cn } from "@/lib/utils";
import localFont from "next/font/local";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const headingFont = localFont({
  src: "../public/fonts/font.woff2",
});

export const Logo = () => {
  return (
    <Link href={"/"}>
      <div className="hover:opacity-75 transition items-center gap-x-2 hidden md:flex">
        <Image src={"/logo.svg"} alt="Logo" height={30} width={30} />
        <div
          className={cn("text-lg text-neutral-700 pb-1", headingFont.className)}
        >
          Horizon Hub
        </div>
      </div>
    </Link>
  );
};
