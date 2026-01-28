"use client";

import ThemeToggle from "@/components/atoms/ThemeToggle";
// import { FaGithub } from "react-icons/fa";
import { useRouter } from "next/navigation"; // for Next.js navigation
import GithubIcon from "@/components/atoms/GithubIcon";

export default function Navbar() {
  const router = useRouter();

  return (
    <header className="w-full bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* LEFT: Logo / Title */}
        <h1 className="text-xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
          Sales Dashboard
        </h1>

        {/* RIGHT: Theme Toggle + GitHub (FORCED GAP) */}
        <div className="grid grid-cols-[auto_24px_auto] items-center">
          
          {/* Theme Toggle */}
          <ThemeToggle />

          {/* Spacer column (24px gap) */}
          <div />

          {/* GitHub Button */}
          <button
            onClick={() => router.push("/github-login")}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-900
                        hover:bg-gray-200 dark:hover:bg-gray-700 transition
                        flex items-center justify-center"
            >
            <GithubIcon />
          </button>

        </div>
      </div>
    </header>
  );
}