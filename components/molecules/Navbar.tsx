"use client";

import ThemeToggle from "@/components/atoms/ThemeToggle";

export default function Navbar() {
  return (
    <header className="w-full bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* LEFT */}
        <h1 className="text-xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
          Sales Dashboard
        </h1>

        {/* RIGHT */}
        <ThemeToggle />

      </div>
    </header>
  );
}