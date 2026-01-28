"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // ✅ Correct hydration-safe pattern
  useEffect(() => {
    setMounted(true);
  }, []);

  // ✅ Server & first client render match
  if (!mounted) return null;

  return (
    <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-900 p-1 rounded-lg">
      <button
        onClick={() => setTheme("system")}
        className={`w-9 h-9 rounded-md transition ${
          theme === "system"
            ? "bg-gray-300 dark:bg-gray-700"
            : "hover:bg-gray-200 dark:hover:bg-gray-800"
        }`}
      >
        🖥️
      </button>

      <button
        onClick={() => setTheme("light")}
        className={`w-9 h-9 rounded-md transition ${
          theme === "light"
            ? "bg-gray-300 dark:bg-gray-700"
            : "hover:bg-gray-200 dark:hover:bg-gray-800"
        }`}
      >
        ☀️
      </button>

      <button
        onClick={() => setTheme("dark")}
        className={`w-9 h-9 rounded-md transition ${
          theme === "dark"
            ? "bg-gray-300 dark:bg-gray-700"
            : "hover:bg-gray-200 dark:hover:bg-gray-800"
        }`}
      >
        🌙
      </button>
    </div>
  );
}


// "use client";

// import { useTheme } from "next-themes";
// import { useEffect, useState } from "react";

// export default function ThemeToggle() {
//   const { theme, setTheme } = useTheme();
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => setMounted(true), 0);
//     return () => clearTimeout(timer);
//   }, []);

//   if (!mounted) return null;

//   const base =
//     "flex items-center justify-center w-9 h-9 rounded-md transition-colors text-lg font-medium";
//   const active = "bg-gray-200 dark:bg-gray-700 text-black dark:text-white";
//   const inactive = "text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800";

//   return (
//     <div className="flex items-center gap-1 bg-gray-100 dark:bg-gray-900 p-1 rounded-lg">
//       {/* System */}
//       <button
//         onClick={() => setTheme("system")}
//         className={`${base} ${theme === "system" ? active : inactive}`}
//         aria-label="System theme"
//       >
//         🖥️
//       </button>

//       {/* Light */}
//       <button
//         onClick={() => setTheme("light")}
//         className={`${base} ${theme === "light" ? active : inactive}`}
//         aria-label="Light theme"
//       >
//         ☀️
//       </button>

//       {/* Dark */}
//       <button
//         onClick={() => setTheme("dark")}
//         className={`${base} ${theme === "dark" ? active : inactive}`}
//         aria-label="Dark theme"
//       >
//         🌙
//       </button>
//     </div>
//   );
// }

