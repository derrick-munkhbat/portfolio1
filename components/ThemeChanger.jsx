import { MdOutlineWbSunny } from "react-icons/md";
import { LuMoonStar } from "react-icons/lu";
import { useEffect, useState } from "react";

export function ThemeChanger() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    if (localTheme) {
      setTheme(localTheme);
      if (localTheme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  }, []);

  function changeTheme() {
    if (theme === "light") {
      setTheme("dark");
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }

  return (
    <button onClick={changeTheme}>
      {theme === "light" && <MdOutlineWbSunny />}
      {theme === "dark" && <LuMoonStar />}
    </button>
  );
}
