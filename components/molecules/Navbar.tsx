"use client";

import ThemeToggle from "@/components/atoms/ThemeToggle";
import { useRouter } from "next/navigation";
import GithubIcon from "@/components/atoms/GithubIcon";
import { useState } from "react";
// import Link from "next/link";
import { signIn } from "next-auth/react";

export default function Navbar() {
  const router = useRouter();
  const [search, setSearch] = useState("");

  return (
    <header className="w-full bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* LEFT: Logo / Title */}
        <h1 className="text-xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
          Sales Dashboard
        </h1>
        
        {/* RIGHT: Search + Theme Toggle + GitHub */}
        <div className="grid grid-cols-[auto_1fr_auto] items-center w-[375px]">

          {/* SEARCH (LEFT) */}
          <div className="flex items-center gap-2 justify-self-start">
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="
                w-50 px-6 py-3 rounded-full text-md
                bg-white dark:bg-gray-900 
                border-2 border-gray-300 dark:border-gray-700
                text-gray-800 dark:text-gray-100
                placeholder-gray-400 dark:placeholder-gray-500
                focus:outline-none focus:ring-2 focus:ring-blue-500
                transition-all
              "
            />
            <span className="text-gray-500 dark:text-gray-400">🔍</span>
          </div>

          {/* THEME (CENTER) */}
          <div className="justify-self-center">
            <ThemeToggle />
          </div>

          {/* GITHUB (RIGHT) */}
          <button
            onClick={() => signIn("github", { callbackUrl: "/dashboard" })}
            className="relative p-2 rounded-lg 
                      bg-gray-100 dark:bg-gray-900
                      hover:bg-gray-200 dark:hover:bg-gray-700
                      transition flex items-center justify-center"
          >
            <GithubIcon />
          </button>

        </div>
      </div>
    </header>
  );
}



// "use client";

// import ThemeToggle from "@/components/atoms/ThemeToggle";
// // import { FaGithub } from "react-icons/fa";
// import { useRouter } from "next/navigation"; // for Next.js navigation
// import GithubIcon from "@/components/atoms/GithubIcon";
// // import { useState } from "react";

// export default function Navbar() {
//   const router = useRouter();
//   // const [search, setSearch] = useState("");

//   return (
//     <header className="w-full bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 shadow-sm">
//       <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
//         {/* LEFT: Logo / Title */}
//         <h1 className="text-xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
//           Sales Dashboard
//         </h1>

//         {/* RIGHT: Theme Toggle + GitHub (FORCED GAP) */}
//         <div className="grid grid-cols-[auto_24px_auto] items-center">
          
//           {/* Search Bar */}
//           {/* <div className="absolute">
//             <input
//               type="text"
//               placeholder="Search..."
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               className="
//                 w-40 sm:w-56 md:w-64 px-4 py-2 rounded-lg text-sm
//                 bg-white dark:bg-gray-900
//                 border border-gray-300 dark:border-gray-700
//                 text-gray-800 dark:text-gray-100
//                 placeholder-gray-400 dark:placeholder-gray-500
//                 focus:outline-none focus:ring-2 focus:ring-blue-500
//                 transition-all
//               "
//             />
//             <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
//               🔍
//             </span>
//           </div> */}

//           {/* Theme Toggle */}
//           <ThemeToggle />

//           {/* Spacer column (24px gap) */}
//           <div />

//           {/* GitHub Button */}
//           <button
//             onClick={() => router.push("/github-login")}
//             className="p-2 rounded-lg bg-gray-100 dark:bg-gray-900
//                         hover:bg-gray-200 dark:hover:bg-gray-700 transition
//                         flex items-center justify-center"
//             >
//             <GithubIcon />
//           </button>

//         </div>
//       </div>
//     </header>
//   );
// }