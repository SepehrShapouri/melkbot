import React from "react";
import RootTab from "./RootTab";
import { TABS } from "@/lib/constants";
function RootTabs() {
  return (
    <nav className="w-full lg:max-w-[500px] h-[80px] bg-background dark:bg-gray-900 fixed bottom-0 flex items-center rounded-t-xl drop-shadow-2xl">
      <ul className="flex justify-between w-full px-[2rem]">
        {TABS.map((tab, index) => (
          <RootTab key={index} tab={tab} />
        ))}
      </ul>
    </nav>
  );
}

export default RootTabs;
