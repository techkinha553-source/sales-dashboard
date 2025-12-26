"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="flex items-center gap-2 px-4 py-2 rounded-lg
      bg-gray-200 dark:bg-gray-800
      text-gray-900 dark:text-white
      transition-all hover:scale-105"
    >
      {dark ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}