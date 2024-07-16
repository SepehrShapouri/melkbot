import {
    CalendarRange,
    MessageSquarePlus,
    Home,
    CircleUserRound,
  } from "lucide-react";
export const TABS = [
    {
      id: 1,
      title: "خانه",
      logo: <Home className="w-[40px] h-[30px] " />,
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
      href: "/sign-in",
    },
  ];

  export const MAIN_ROUTES = [
    {
      id:1,
      title:'درخواست',
      href:'/request'
    },
    {
      id:2,
      title:'وقت بازدید',
      href:'/appointment'
    },
    {
      id:3,
      title:'پروفایل',
      href:'/profile'
    },
    {
      id:4,
      title:'ویرایش پروفایل',
      href:'/profile/update'
    },
    {
      id:5,
      title:'تنظیمات',
      href:'/settings'
    },
  ]