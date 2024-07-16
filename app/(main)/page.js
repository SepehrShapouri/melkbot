import NotificationPermission from "@/components/NotificationPermission";
import AuthThemeToggle from "@/components/auth/AuthThemeToggle";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import VoiceRecorderDrawer from "@/components/voiceRecorder/VoiceRecorderDrawer";
import useFcmToken from "@/hooks/useFcmToken";
import { Building, Landmark, Settings, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
const offers = [
  {
    title: "زمین ۵۰۰ متری کردان",
    id: 1,
    desc: "محدوده کردان",
    budget: "2_000_000",
    property_type: "land",
  },
  {
    title: "زمین ۸۰۰ متری کردان",
    id: 2,
    desc: "محدوده کردان",
    budget: "2_000_000",
    property_type: "land",
  },
  {
    title: "۱۲۰ متری",
    id: 2,
    desc: "گوهردشت",
    budget: "2_000_000",
    property_type: "flat",
  },
  {
    title: "۱۲۰ متری",
    id: 2,
    desc: "گوهردشت",
    budget: "2_000_000",
    property_type: "flat",
  },
  {
    title: "۱۲۰ متری",
    id: 2,
    desc: "گوهردشت",
    budget: "2_000_000",
    property_type: "flat",
  },
  {
    title: "۱۲۰ متری",
    id: 2,
    desc: "گوهردشت",
    budget: "2_000_000",
    property_type: "flat",
  },
  {
    title: "۱۲۰ متری",
    id: 2,
    desc: "گوهردشت",
    budget: "2_000_000",
    property_type: "flat",
  },
  {
    title: "۱۲۰ متری",
    id: 2,
    desc: "گوهردشت",
    budget: "2_000_000",
    property_type: "flat",
  },
  {
    title: "۱۲۰ متری",
    id: 2,
    desc: "گوهردشت",
    budget: "2_000_000",
    property_type: "flat",
  },
  {
    title: "۱۲۰ متری",
    id: 2,
    desc: "گوهردشت",
    budget: "2_000_000",
    property_type: "flat",
  },
  {
    title: "۱۲۰ متری",
    id: 2,
    desc: "گوهردشت",
    budget: "2_000_000",
    property_type: "flat",
  },
  {
    title: "۱۲۰ متری",
    id: 2,
    desc: "گوهردشت",
    budget: "2_000_000",
    property_type: "flat",
  },
];
function Home() {
  return (
    <section className="bg-white dark:bg-gray-950 ">
      <div className="full-height lg:max-w-[500px] relative mx-auto flex flex-col">
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
                <p class="text-white text-xl">چی میخوای؟</p>
              </div>
              <div class="select-none">
                <Button className="dark:bg-[#1E3A8A] bg-blue-700 w-full h-[48px]"></Button>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col px-6 pb-10 overflow-auto no-scrollbar">
            <div class="flex justify-between items-center gap-4 mb-6">
              <p class="font-bold text-gray-800">درخواست های اخیر</p>
              <a class="text-sm text-gray-500" href="/expenses">
                مشاهده همه
              </a>
            </div>
            <div className="flex flex-col gap-[0.5rem] ">
              {offers.map((offer) => {
                return (
                  <div className="w-full bg-white drop-shadow-xl shadow-md py-[1rem] px-[1rem] rounded-md">
                    <div className="flex items-center gap-[0.5rem]">
                      <div className="aspect-square w-[45px] h-[45px] rounded-lg flex items-center justify-center cursor-pointer bg-blue-200 ">
                        {offer.property_type == "land" ? (
                          <Landmark className="text-blue-600" />
                        ) : (
                          <Building className="text-blue-600" />
                        )}
                      </div>
                      <span>
                        <h2>{offer.title}</h2>
                        <p>{offer.desc}</p>
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      {/* <div className="w-full bg-primary h-[250px] p-[2rem] text-white flex rounded-b-xl flex-col justify-center gap-[2rem]">
        <div>
          <span className="flex items-center justify-between w-full">
            <h1 className="text-2xl font-semibold">خوش اومدی</h1>
            <AuthThemeToggle color="white" />
          </span>
          <h2 className="text-xl">سپهر شاپوری</h2>
          <NotificationPermission />
        </div>
        <div className="flex items-center gap-[1rem]">
          <Input
            id="search"
            type="text"
            placeholder="چی میخوای؟"
            className="pl-10 pr-4 placeholder:text-lg placeholder:text-center h-[50px] text-primary text-lg"
          />
          <VoiceRecorderDrawer />
        </div>
      </div>
      <section className="flex flex-col gap-[1rem] mt-[1rem] px-[2rem]">
        <h1 className="text-xl font-normal">اخرین درخواست ها</h1>
        <div className="flex flex-col gap-[1rem]">
          {offers.map((offer) => {
            return (
              <Card key={offer.id} className="relative">
                <CardHeader>
                  <CardTitle>{offer.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{offer.desc}</CardDescription>
                </CardContent>
                <Button className="absolute -left-[1rem] -bottom-[0.8rem]">
                  مشاهده
                </Button>
              </Card>
            );
          })}
        </div>
      </section> */}
    </section>
  );
}

export default Home;
// function SearchIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <circle cx="11" cy="11" r="8" />
//       <path d="m21 21-4.3-4.3" />
//     </svg>
//   );
// }
