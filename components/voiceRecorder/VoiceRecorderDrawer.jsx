"use client";
import React from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "../ui/button";
import { Mic } from "lucide-react";
import  { AudioRecorderWithVisualizer } from "./VoiceRecorder";
function VoiceRecorderDrawer() {
  return (
    <Drawer>
      <DrawerTrigger>
        {" "}
        <Mic className="w-12 h-12" />
      </DrawerTrigger>
      <DrawerContent className="h-[300px]">
        <DrawerHeader>
          <DrawerTitle>چی میخوای؟ به ملک بات بگو!</DrawerTitle>
          <DrawerDescription>
            ملک بات بهت این قابلیت رو میده که با ظبط صدا, اطلاعات ملک مورد نظرت
            رو بهمون بگی!
          </DrawerDescription>
        </DrawerHeader>
        <AudioRecorderWithVisualizer/>
        <DrawerFooter>
          {/* <Button>Submit</Button>
          <DrawerClose>
            <Button variant="outline">Cancel</Button>
          </DrawerClose> */}
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

export default VoiceRecorderDrawer;
