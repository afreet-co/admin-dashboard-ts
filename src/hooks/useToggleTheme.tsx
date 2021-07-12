import { useEffect, useState } from "react";

export const useToggleTheme = () => {
  const [theme, setTheme] = useState<ThemeType>("light");
  const nextTheme: ThemeType = theme === "dark" ? "light" : "dark";

  useEffect(() => {
    setTheme(localStorage.getItem("application-theme") as ThemeType);
  }, []);
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(nextTheme);
    root.classList.add(theme);
    localStorage.setItem("application-theme", theme);
  }, [theme, nextTheme]);
  const toggleTheme = () => setTheme(nextTheme);
  return { nextTheme, toggleTheme };
};
