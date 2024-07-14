'use client'
import useFcmToken from "@/hooks/useFcmToken";
import React from "react";

function NotificationPermission() {
  const { token, notificationPermissionStatus } = useFcmToken();
  return <div>{token}</div>;
}

export default NotificationPermission;
