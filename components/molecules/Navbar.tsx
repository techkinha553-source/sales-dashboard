"use client";

import ThemeToggle from "@/components/atoms/ThemeToggle";

export default function Navbar() {
  return (
    <header className="w-full bg-white dark:bg-gray-900  border-b border-gray-200 dark:border-gray-700 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* LEFT: TITLE */}
        <h1 className="text-xl font-bold tracking-tight">
          Sales Dashboard
        </h1>

        {/* RIGHT: THEME TOGGLE */}
        <div className="flex items-center">
          <ThemeToggle />
        </div>

      </div>
    </header>
  );
}