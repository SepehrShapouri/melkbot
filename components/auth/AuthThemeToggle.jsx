"use client";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

function AuthThemeToggle() {
  const { setTheme, theme } = useTheme();
  function renderIcon(theme) {
    switch (theme) {
      case "light": {
        return (
          <Moon className="text-primary" onClick={() => setTheme("dark")} />
        );
      }
      case "dark": {
        return (
          <Sun className="text-primary" onClick={() => setTheme("light")} />
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
