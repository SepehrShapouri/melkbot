import React from "react";
import SignInForm from "@/components/auth/SignInForm";
function page() {
  return (
    <div className="w-full min-h-screen bg-background flex items-center justify-center">
      <SignInForm/>
    </div>
  );
}

export default page;
