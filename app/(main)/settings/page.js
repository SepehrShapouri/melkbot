import ThemeToggler from "@/components/main/ThemeToggler";
import {
  ChevronLeft,
  Lock,
  LogOut,
  SunMoon,
  User,
  User2,
  UserRound,
} from "lucide-react";
import Link from "next/link";
import React from "react";

function page() {
  return (
    <section className="flex-1 w-full bg-white overflow-auto flex flex-col justify-between dark:bg-gray-950 min-h-[85svh]">
      <div className="flex-1 pb-14 overflow-auto no-scrollbar p-6">
        <div class="flex flex-col gap-4 items-center mb-6">
          <div class="w-[100px] h-[100px] rounded-full flex items-center justify-center bg-stone-100 dark:bg-gray-800">
            <User className="h-14 w-14 fill-stone-300 text-stone-300" />
          </div>
          <p class="text-gray-800 dark:text-white text-[24px] font-[800] text-center">
            سپهر شاپوری
          </p>
          <p class="text-sm text-gray-500 dark:text-gray-400">
            تاریخ عضویت 08 تیر 1403
          </p>
        </div>
        <div class="mb-4 last:mb-0">
          <p class="text-[12px] text-gray-500 font-bold mb-3">
            تنظیمات حساب کاربری
          </p>
          <div class="flex flex-col gap-2">
            <Link href="/profile/update">
              <div class="p-4 bg-stone-100 dark:bg-gray-800 rounded-lg flex justify-between items-center">
                <div class="flex items-center gap-4">
                  <User />
                  <p class="text-[12px] font-[700] text-gray-800 dark:text-white">
                    ویرایش حساب کاربری
                  </p>
                </div>
                <ChevronLeft />
              </div>
            </Link>
            <Link href="/change-password">
              <div class="p-4 bg-stone-100 dark:bg-gray-800 rounded-lg flex justify-between items-center">
                <div class="flex items-center gap-4">
                  <Lock />
                  <p class="text-[12px] font-[700] text-gray-800 dark:text-white">
                    تغییر رمز عبور
                  </p>
                </div>
                <ChevronLeft />
              </div>
            </Link>
            <div class="cursor-pointer">
              <div class="p-4 bg-stone-100 dark:bg-gray-800 rounded-lg flex justify-between items-center">
                <div class="flex items-center gap-4">
                  <LogOut />
                  <p class="text-[12px] font-[700] text-gray-800 dark:text-white">
                    خروج حساب کاربری
                  </p>
                </div>
                <ChevronLeft />
              </div>
            </div>
          </div>
        </div>
        <div class="mb-8 last:mb-0">
          <p class="text-[12px] text-gray-500 font-bold mb-3">
            تنظیمات حساب کاربری
          </p>
          <div class="flex flex-col gap-2">
            <div class="cursor-pointer">
              <div class="p-4 bg-stone-100 dark:bg-gray-800 rounded-lg flex justify-between items-center">
                <div class="flex items-center gap-4">
                  <SunMoon/>
                  <p class="text-[12px] font-[700] text-gray-800 dark:text-white">
                   حالت تاریک
                  </p>
                </div>
                <ThemeToggler/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default page;
