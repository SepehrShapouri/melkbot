"use client";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

function AuthThemeToggle({ color = null }) {
  const { setTheme, theme, systemTheme } = useTheme();
  console.log(systemTheme);
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
        return systemTheme == "light" ? (
          <Moon
            className={color ? `text-${color}` : "text-primary"}
            onClick={() => setTheme("dark")}
          />
        ) : (
          <Sun
            className={color ? `text-${color}` : "text-primary"}
            onClick={() => setTheme("light")}
          />
        );
      }
    }
  }
  return <div suppressHydrationWarning>{renderIcon(theme)}</div>;
}

export default AuthThemeToggle;
