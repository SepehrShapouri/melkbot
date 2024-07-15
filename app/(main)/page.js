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
import VoiceRecorderDrawer from "@/components/voiceRecorder/VoiceRecorderDrawer";
import useFcmToken from "@/hooks/useFcmToken";
const offers = [
  {
    title: "زمین ۵۰۰ متری کردان",
    id: 1,
    desc: "محدوده کردان حداکثر ۲ میلیارد",
  },
  {
    title: "زمین ۸۰۰ متری کردان",
    id: 2,
    desc: "محدوده کردان حداکثر ۲ میلیارد",
  },
];
function Home() {
  return (
    <section className="bg-sky-50 dark:bg-background h-screen">
      <div className="w-full bg-primary h-[250px] p-[2rem] text-white flex rounded-b-xl flex-col justify-center gap-[2rem]">
        <div>
          <span className="flex items-center justify-between w-full">
            <h1 className="text-2xl font-semibold">خوش اومدی</h1>
            <AuthThemeToggle color="white" />
          </span>
          <h2 className="text-xl">سپهر شاپوری</h2>
          <NotificationPermission/>
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
      </section>
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
