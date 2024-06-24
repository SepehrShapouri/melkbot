import React from "react";
import { FormControl, FormField, FormLabel, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { Control, FieldPath, Form } from "react-hook-form";
import { authFormSchema } from "@/lib/utils";
import { z } from "zod";
function CustomInput({ control, label, name, placeholder, type = "text" }) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <div className="flex flex-col gap-[0.6rem] text-start">
          <FormLabel className="text-14 font-medium w-full max-w-[280px]">
            {label}
          </FormLabel>
          <div className="flex w-full flex-col">
            <FormControl>
              <Input
                placeholder={placeholder}
                className="text-16 placeholder:text-16 rounded-lg border border-gray-300 placeholder:text-gray-500"
                {...field}
                type={type}
              />
            </FormControl>
            <FormMessage className="form-message mt-2" />
          </div>
        </div>
      )}
    />
  );
}

export default CustomInput;
