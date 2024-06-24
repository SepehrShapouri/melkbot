import React from "react";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";

function AuthOTP() {
  return (
    <InputOTP maxLength={5} >
        <InputOTPGroup>
        <InputOTPSlot index={0}/>
        </InputOTPGroup>
        <InputOTPSeparator/>
        <InputOTPGroup>
        <InputOTPSlot index={1}/>
        </InputOTPGroup>
        <InputOTPGroup>
        <InputOTPSlot index={2}/>
        </InputOTPGroup>
        <InputOTPGroup>
        <InputOTPSlot index={3}/>
        </InputOTPGroup>
        <InputOTPSeparator/>
        <InputOTPGroup>
        <InputOTPSlot index={4}/>
        </InputOTPGroup>
      {/* <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
      </InputOTPGroup>
      <InputOTPSeparator />
      <InputOTPGroup>
      <InputOTPSlot index={3} />
        <InputOTPSlot index={4} />
      </InputOTPGroup> */}
    </InputOTP>
  );
}

export default AuthOTP;
