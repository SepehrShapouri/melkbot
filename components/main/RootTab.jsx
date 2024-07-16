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
            "flex cursor-pointer flex-col items-center justify-center gap-[0.2rem]",
            pathname == tab.href ? "text-primary" : " text-gray-800 dark:text-white"
          )}
        >
          {tab.logo}
          <p className="text-xs"> {tab.title}</p>
        </div>
      </Link>
    </li>
  );
}

export default RootTab;
