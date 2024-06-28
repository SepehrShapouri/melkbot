import {
    CalendarRange,
    MessageSquarePlus,
    Home,
    CircleUserRound,
  } from "lucide-react";
export const tabs = [
    {
      id: 1,
      title: "خانه",
      logo: <Home className="w-[40px] h-[30px]" />,
      href: "/",
    },
    {
      id: 1,
      title: "درخواست",
      logo: <MessageSquarePlus className="w-[40px] h-[30px]" />,
      href: "/request",
    },
    {
      id: 1,
      title: "وقت بازدید",
      logo: <CalendarRange className="w-[40px] h-[30px]" />,
      href: "/appointment",
    },
    {
      id: 1,
      title: "پروفایل",
      logo: <CircleUserRound className="w-[40px] h-[30px]" />,
      href: "/profile",
    },
  ];