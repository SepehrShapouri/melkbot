import React from "react";
import RootTab from "./RootTab";
import { tabs } from "@/lib/constants";
function RootTabs() {
  return (
    <nav className="w-full h-[90px] bg-sky-600 fixed bottom-0 flex items-center rounded-t-xl">
      <ul className="flex justify-between w-full px-[1rem]">
        {tabs.map((tab) => (
          <RootTab tab={tab} />
        ))}
      </ul>
    </nav>
  );
}

export default RootTabs;
