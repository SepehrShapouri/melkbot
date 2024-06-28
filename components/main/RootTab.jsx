"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function RootTab({ tab }) {
  const pathname = usePathname();
  return (
    <li>
      <Link href={tab.href}>
        <div
          className={clsx(
            "flex cursor-pointer flex-col items-center justify-center rounded-full w-[70px] h-[70px] gap-[0.2rem]",
            pathname == tab.href
              ? "bg-white text-sky-600"
              : "bg-none text-white"
          )}
        >
          {tab.logo}
          {tab.title}
        </div>
      </Link>
    </li>
  );
}

export default RootTab;
