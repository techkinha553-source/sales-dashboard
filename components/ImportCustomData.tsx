"use client";

import { useState, useRef } from "react";

export default function ImportCustomData() {
  const [open, setOpen] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="border rounded-lg overflow-hidden max-w-6xl mx-auto my-4">
      {/* TOP BUTTON */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full p-4 flex items-center justify-between hover:bg-muted/50 transition-colors"
      >
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-primary/10">
            {/* database icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-primary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <ellipse cx="12" cy="5" rx="9" ry="3" />
              <path d="M3 5V19A9 3 0 0 0 21 19V5" />
              <path d="M3 12A9 3 0 0 0 21 12" />
            </svg>
          </div>

          <div className="text-left">
            <h3 className="font-semibold text-foreground">
              Import Custom Data
            </h3>
            <p className="text-sm text-muted-foreground">
              Enter data manually or upload CSV/SQL files
            </p>
          </div>
        </div>

        {/* chevron */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`w-5 h-5 text-muted-foreground transition-transform ${
            open ? "rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path d="m18 15-6-6-6 6" />
        </svg>
      </button>

      {/* COLLAPSIBLE CONTENT */}
      {open && (
        <div className="border-t border-border">
          <div className="p-4 space-y-6">
            {/* Upload Section */}
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                ref={fileInputRef}
                type="file"
                accept=".csv,.sql,.txt"
                className="hidden"
              />

              <button
                onClick={() => fileInputRef.current?.click()}
                className="flex-1 h-20 border-dashed border-2 rounded-md hover:border-primary hover:bg-primary/5 flex items-center justify-center"
              >
                <div className="flex flex-col items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-muted-foreground"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="17 8 12 3 7 8" />
                    <line x1="12" y1="3" x2="12" y2="15" />
                  </svg>
                  <span className="text-sm">Upload CSV/SQL File</span>
                </div>
              </button>

              <div className="flex-1 p-4 rounded-lg bg-muted/50 text-sm text-muted-foreground">
                <p className="font-medium text-foreground mb-1">
                  Supported Formats:
                </p>
                <ul className="list-disc list-inside space-y-1">
                  <li>CSV: month, sales, orders, profit</li>
                  <li>SQL INSERT statements</li>
                  <li>Tab / comma separated values</li>
                </ul>
              </div>
            </div>

            {/* Divider */}
            <div className="flex items-center gap-4">
              <div className="flex-1 h-px bg-border" />
              <span className="text-sm text-muted-foreground">OR</span>
              <div className="flex-1 h-px bg-border" />
            </div>

            {/* Manual Entry (UI only – logic later) */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium">
                  Manual Data Entry
                </label>
                <button className="h-9 px-3 rounded-md hover:bg-accent flex items-center gap-1">
                  +
                  <span>Add Row</span>
                </button>
              </div>

              <div className="grid grid-cols-[1fr_1fr_1fr_1fr_40px] gap-2 text-xs uppercase text-muted-foreground">
                <span>Month</span>
                <span>Sales ($)</span>
                <span>Orders</span>
                <span>Profit ($)</span>
                <span />
              </div>

              <div className="grid grid-cols-[1fr_1fr_1fr_1fr_40px] gap-2">
                <input className="h-9 border rounded px-2" placeholder="Jan" />
                <input
                  type="number"
                  className="h-9 border rounded px-2"
                  placeholder="50000"
                />
                <input
                  type="number"
                  className="h-9 border rounded px-2"
                  placeholder="1000"
                />
                <input
                  type="number"
                  className="h-9 border rounded px-2"
                  placeholder="15000"
                />
                <button className="h-9 w-9 text-muted-foreground">🗑</button>
              </div>

              <button
                className="
                  w-full
                  h-11
                  px-4
                  rounded-xl
                  bg-blue-500
                  hover:bg-blue-600
                  text-white
                  flex
                  items-center
                  justify-center
                  gap-2
                  text-sm
                  font-medium
                  transition-colors
                "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                  <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                </svg>
                Import Data & Generate Charts
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}