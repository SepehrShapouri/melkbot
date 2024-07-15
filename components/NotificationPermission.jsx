"use client";
import useFcmToken from "@/hooks/useFcmToken";
import React from "react";
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
  const { token, notificationPermissionStatus ,loadToken} = useFcmToken();
  async function getNotifPermission(){
    if ("Notification" in window) {
      loadToken();
    }
  }
  return (
    <AlertDialog className="max-w-[200px]">
      <AlertDialogTrigger>Open</AlertDialogTrigger>
      <AlertDialogContent className="max-w-[300px]">
        <AlertDialogHeader>
          <AlertDialogTitle>اعلانات</AlertDialogTitle>
          <AlertDialogDescription>
            برای تجربه کاربری بهتر و استفاده از تمامی امکانات ملک بات, ما به شما پیشنهاد میکنیم دسترسی اعلانات را فعال کنید.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>بعدا</AlertDialogCancel>
          <AlertDialogAction onClick={getNotifPermission}>فعال سازی</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default NotificationPermission;
