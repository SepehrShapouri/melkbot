'use client'
import useFcmToken from "@/hooks/useFcmToken";
import React from "react";

function NotificationPermission() {
  const { token, notificationPermissionStatus } = useFcmToken();
  console.log(token)
  return null;
}

export default NotificationPermission;
