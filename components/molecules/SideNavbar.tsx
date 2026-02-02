"use client";

import { X } from "lucide-react";
import Link from "next/link";

export default function SideNavbar({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  return (
    <>
      {/* OVERLAY */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-black/40 z-40"
        />
      )}

      {/* SIDEBAR */}
      <aside
        className={`
          fixed top-0 left-0 h-full w-64 z-50
          bg-white dark:bg-gray-900
          border-r border-gray-200 dark:border-gray-700
          transform transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* HEADER */}
        <div className="h-16 flex items-center justify-between px-4 border-b dark:border-gray-700">
          <h2 className="font-semibold text-gray-900 dark:text-gray-100">
            Menu
          </h2>
          <button onClick={onClose}>
            <X className="text-gray-700 dark:text-gray-300" />
          </button>
        </div>

        {/* LINKS */}
        <nav className="p-4 space-y-3 text-gray-700 dark:text-gray-300">
          <Link href="/" className="block hover:text-blue-500">Home</Link>
          <Link href="/docs" className="block hover:text-blue-500">Docs</Link>
          <Link href="/knowledge-base" className="block hover:text-blue-500">
            Knowledge Base
          </Link>
          <Link href="/academy" className="block hover:text-blue-500">Academy</Link>
          <Link href="/help" className="block hover:text-blue-500">Help</Link>
          <Link href="/contact" className="block hover:text-blue-500">Contact</Link>
        </nav>
      </aside>
    </>
  );
}