"use client";
import { MAIN_ROUTES } from "@/lib/constants";
import {
  ArrowRight
} from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
function RootHeader() {
  const pathname = usePathname();
  const router = useRouter()
  if (pathname == "/") return null;
  return (
    <header className="py-[1.7rem] px-[3rem] flex items-center justify-center w-full bg-white border-b  border-b-gray-200 dark:border-b-gray-700  dark:bg-gray-950 relative">
      <ArrowRight className="w-8 h-8 text-blue-700 dark:text-[#93C5FD] right-[1rem] absolute" onClick={()=>router.back()}/>
      <h2 className="text-xl font-[400] text-blue-700 truncate dark:text-[#93C5FD]">
        {MAIN_ROUTES.find((route) => route.href == pathname).title}
      </h2>
    </header>
  );
}

export default RootHeader;
