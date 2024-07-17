import RecentOffers from "@/components/main/RecentOffers";
import { Button } from "@/components/ui/button";
import { PlusCircle, Settings, User } from "lucide-react";
import Link from "next/link";

function Home() {
  return (
    <section className="bg-white dark:bg-gray-950 h-[calc(100dvh-60px)] lg:max-w-[500px] relative mx-auto flex flex-col">
      <div
        className="h-[190px] bg-blue-700 dark:bg-[#1E3A8A] absolute top-0 w-full"
        id="header-background"
      ></div>
      <div className="w-full z-10 p-6">
        <div className="flex item-center gap-4 justify-between">
          <Link className="flex items-center gap-3" href="/settings">
            <div className="aspect-square w-[38px] h-[38px] rounded-lg flex items-center justify-center cursor-pointer bg-blue-800 dark:bg-[#172554]">
              <User className="text-white" />
            </div>
            <div class="text-white">
              <p class="text-[12px] mb-1">سپهر شاپوری</p>
              <p class="text-[10px]">09907270226</p>
            </div>
          </Link>
          <Link href="/settings">
            <div className="aspect-square w-[38px] h-[38px] rounded-lg flex items-center justify-center cursor-pointer bg-blue-800 dark:bg-[#172554]">
              <Settings className="text-white" />
            </div>
          </Link>
        </div>
      </div>

      <div className="flex-1 w-full bg-white dark:bg-gray-950 overflow-auto flex flex-col justify-between">
        <div className="px-6">
          <div class="h-[220px] p-4 bg-blue-800 dark:bg-[#172554] rounded-xl relative drop-shadow-xl mb-6 flex flex-col justify-between">
            <div class="flex gap-4 justify-between relative">
              <p class="text-white text-xl font-semibold">چی میخوای؟</p>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="text-white font-extrabold text-5xl">0</h3>
              <div className="h-px w-[50px] bg-white my-1" />
              <p className="text-sm text-white">کل درخواست های شما</p>
            </div>
            <div class="select-none">
              <Button className="dark:bg-[#1E3A8A] text-white bg-blue-700 w-full h-[48px] flex items-center gap-[0.5rem] ">
                <PlusCircle className="h-5 w-5" />
                درخواست جدید{" "}
              </Button>
            </div>
          </div>
        </div>
        <div
          className="flex-1 flex flex-col px-6 pb-10 overflow-auto "
          id="no-scrollbar"
        >
          <div class="flex justify-between items-center gap-4 mb-6">
            <p class="font-bold text-gray-800 dark:text-white">
              درخواست های اخیر
            </p>
            <a
              class="text-sm text-gray-500 dark:text-gray-200"
              href="/expenses"
            >
              مشاهده همه
            </a>
          </div>
          <RecentOffers />
        </div>
      </div>
    </section>
  );
}

export default Home;
