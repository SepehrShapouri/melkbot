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
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "../ui/form";
import CustomInput from "../CustomInput";
import complete from "@/public/complete.png"
function CompleteAccountForm() {
  const formSchema = z.object({
    firstname: z
      .string()
      .min(2, { message: "لطفا نام خود را وارد کنید" })
      .max(50),
    lastname: z
      .string()
      .min(2, { message: "لطفا نام خانوادگی خود را وارد کنید" })
      .max(50),
    city: z
      .string()
      .min(2, { message: "لطفا نام شهر خود را وارد کنید" })
      .max(50),
  });
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      city: "",
    },
  });
  function onSubmit(values) {
    console.log(values);
  }
  return (
    <div className="text-center flex flex-col gap-4 max-w-[300px]">
      <div className="flex  justify-center items-center gap-[0.5rem]">
        <h1 className="text-4xl font-extrabold text-sky-600">ملک بات</h1>
        <AuthThemeToggle />
      </div>
      <p className="text-lg">
        به ملک بات خوش اومدی ,برای تکمیل کردن پروفایل , اطلاعات درخواستی رو پر
        کن!
      </p>
      <div className="max-w-[200px] flex items-center justify-center m-auto">
      <Image src={complete} alt="complete profile image" width={2000} height={2000}/>
      </div>
      <h2 className="font-bold text-xl">ورود |‌ ثبت نام</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-[1rem] mb-[2rem]">
            <CustomInput
              control={form.control}
              name="firstname"
              label="نام"
              placeholder="نام خود را وارد کنید"
            />
            <CustomInput
              control={form.control}
              name="lastname"
              label="نام خانوادگی"
              placeholder="نام خانوادگی خود را وارد کنید"
            />{" "}
            <CustomInput
              control={form.control}
              name="city"
              label="شهر"
              placeholder="نام شهر خود را وارد کنید"
            />
          </div>
          <Button type="submit" className="w-full">
            تکمیل پروفایل
          </Button>
        </form>
      </Form>
    </div>
  );
}

export default CompleteAccountForm;
