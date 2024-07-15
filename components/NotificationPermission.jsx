"use client";
import useFcmToken from "@/hooks/useFcmToken";
import React, { useEffect, useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

function NotificationPermission() {
  const [open, setOpen] = useState(false);
  const { token, notificationPermissionStatus, loadToken } = useFcmToken();
  
  async function getNotifPermission() {
    if ("Notification" in window) {
      loadToken();
    }
    setOpen(false);
  }
  useEffect(() => {
    if (!window.matchMedia("(display-mode: standalone)").matches) return;
    if (Notification.permission === "default") {
      setOpen(true);
      return;
    }
    if (Notification.permission === "granted") {
      setOpen(false);
      return;
    }
    if (Notification.permission === "denied") {
      setOpen(false);
      return;
    }
  }, []);
  return (
    <><p className="max-w-[300px]  overflow-scroll">{token}</p>
        <AlertDialog open={open}>
      <AlertDialogContent className="max-w-[300px]">
        <AlertDialogHeader>
          <AlertDialogTitle>اعلانات</AlertDialogTitle>
          <AlertDialogDescription>
            برای تجربه کاربری بهتر و استفاده از تمامی امکانات ملک بات, ما به شما
            پیشنهاد میکنیم دسترسی اعلانات را فعال کنید.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>بعدا</AlertDialogCancel>
          <AlertDialogAction onClick={getNotifPermission}>
            فعال سازی
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog></>
  );
}

export default NotificationPermission;
