import React, { useEffect, useState } from "react";

function ResendOTP({ resendOTP }) {
  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(30);
  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }

      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(interval);
        } else {
          setSeconds(59);
          setMinutes(minutes - 1);
        }
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [seconds]);
  return (
    <div>
      <button
        className="text-sm  w-full flex"
        disabled={seconds > 0 || minutes > 0}
        onClick={(e) => {
          resendOTP(), setMinutes(1), setSeconds(30);
        }}
      >
        {seconds > 0 || minutes > 0 ? (
          <span className="flex text-gray-400">
            ارسال مجدد کد تا
            {
              <p className="px-1">
                {minutes < 10 ? `0${minutes}` : minutes}:
                {seconds < 10 ? `0${seconds}` : seconds}
              </p>
            }
            ثانیه دیگر
          </span>
        ) : (
          <p className="text-sky-600 hover:text-sky-800">
            ارسال مجدد کد تایید
          </p>
        )}
      </button>
    </div>
  );
}

export default ResendOTP;
