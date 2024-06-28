"use client";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

function AuthThemeToggle({ color = null }) {
  const { setTheme, theme } = useTheme();
  function renderIcon(theme) {
    switch (theme) {
      case "light": {
        return (
          <Moon
            className={color ? `text-${color}` : "text-primary"}
            onClick={() => setTheme("dark")}
          />
        );
      }
      case "dark": {
        return (
          <Sun
            className={color ? `text-${color}` : "text-primary"}
            onClick={() => setTheme("light")}
          />
        );
      }
      default: {
        null;
      }
    }
  }
  return <div suppressHydrationWarning>{renderIcon(theme)}</div>;
}

export default AuthThemeToggle;
