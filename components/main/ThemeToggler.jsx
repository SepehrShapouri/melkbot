"use client";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { Switch } from "../ui/switch";

function ThemeToggler() {
  const { setTheme, theme } = useTheme();
  const [isChecked, setIsChecked] = useState();
  function toggleTheme() {
    setTheme(isChecked ? "dark" : "light");
  }
  useEffect(() => {
    setIsChecked(theme == "dark" ? true : false);
  }, []);
  useEffect(() => {
    toggleTheme();
  }, [isChecked]);
  return (
    <Switch
      defaultChecked={isChecked}
      checked={isChecked}
      onCheckedChange={setIsChecked}
    />
  );
}

export default ThemeToggler;
