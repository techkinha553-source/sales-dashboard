"use client";

import { signIn } from "next-auth/react";

export default function GithubLoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-950">
      <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg w-[360px] text-center">
        <h1 className="text-2xl font-bold mb-2">
          Welcome to Sales Dashboard
        </h1>
        <p className="text-sm text-gray-500 mb-6">
          Login with GitHub to continue
        </p>

        <button
            onClick={() => signIn("github", {callbackUrl: "/dashboard",})}
          className="w-full bg-black text-white py-4 rounded-lg hover:opacity-90 transition "
        >
          Continue with GitHub
        </button>
      </div>
    </main>
  );
}