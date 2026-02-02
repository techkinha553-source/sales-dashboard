"use client";

import GithubIcon from "@/components/atoms/GithubIcon";

export default function Footer() {
  const isAvailable = true;

  return (
    <footer
      className="
        fixed bottom-0 left-0 w-full z-50
        h-14
        backdrop-blur-md
        bg-white/80 dark:bg-gray-900/80
        border-t border-gray-200 dark:border-gray-700
      "
    >
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-2 font-semibold text-gray-900 dark:text-gray-100">
          <GithubIcon />
          <span>Sales Dashboard</span>
        </div>

        {/* Links */}
        <nav className="flex items-center gap-6 text-sm text-gray-700 dark:text-gray-300">
          <span className="cursor-pointer hover:text-blue-500">Home</span>
          <span className="cursor-pointer hover:text-blue-500">Docs</span>
          <span className="cursor-pointer hover:text-blue-500">Knowledge Base</span>
          <span className="cursor-pointer hover:text-blue-500">Academy</span>
          <span className="cursor-pointer hover:text-blue-500">Help</span>
          <span className="cursor-pointer hover:text-blue-500">Contact</span>
        </nav>

        {/* Status */}
        <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
          <span
            className={`h-2 w-2 rounded-full ${
              isAvailable ? "bg-blue-500" : "bg-gray-400"
            }`}
          />
          <span>{isAvailable ? "Available" : "Unavailable"}</span>
        </div>

      </div>
    </footer>
  );
}