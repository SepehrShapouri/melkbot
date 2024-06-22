"use client";
import React, { useState } from "react";
import auth from "@/public/auth.png";
import otp from "@/public/otp.png";
import Image from "next/image";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import AuthThemeToggle from "./AuthThemeToggle";
import ResendOTP from "./resendOtp";
import AuthOTP from "./AuthOTP";
function SignInForm() {
  const [step, setStep] = useState(1);
  const [number, setNumber] = useState();
  function sendOtp() {
    console.log(number);
    setStep(2);
  }
  function editNumber() {
    setStep(1);
  }
  return (
    <div className="text-center flex flex-col gap-4 max-w-[300px]">
      <div className="flex  justify-center items-center gap-[0.5rem]">
        <h1 className="text-4xl font-extrabold text-sky-600">ملک بات</h1>
        <AuthThemeToggle />
      </div>
      {step === 1 && (
        <>
          <Image quality={75} priority src={auth} width={2000} height={2000} />
          <h2 className="font-bold text-xl">ورود |‌ ثبت نام</h2>
          <p>برای شروع شماره موبایل خود را وارد کنید</p>
          <Input
            placeholder=""
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
          <Button onClick={sendOtp}>ورود</Button>
        </>
      )}
      {step === 2 && (
        <>
          <Image quality={75} priority src={otp} width={2000} height={2000} />
          <h2 className="font-bold text-xl">ورود |‌ ثبت نام</h2>
          <p>
            کد تایید به شماره موبایل{" "}
            <span className="text-sky-600">{number}</span> ارسال شد.{" "}
            <span className="text-sky-600 cursor-pointer" onClick={editNumber}>
              ویرایش؟
            </span>
          </p>
          <div dir="ltr" className="flex items-center justify-center">
            <AuthOTP />
          </div>
          <ResendOTP />
          <Button>ورود</Button>
        </>
      )}
    </div>
  );
}

export default SignInForm;
