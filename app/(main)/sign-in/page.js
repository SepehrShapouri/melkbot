import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";
import auth from '@/public/auth.png'
import Image from "next/image";
import AuthThemeToggle from "@/components/auth/AuthThemeToggle";
import SignInForm from "@/components/auth/SignInForm";
function page() {
  return (
    <div className="w-full min-h-screen bg-background flex items-center justify-center">
      <SignInForm/>
    </div>
  );
}

export default page;
