"use client";

import ChartTabs from "@/components/molecules/ChartTabs";
import { useState } from "react";
import SalesChart from "@/components/organisms/SalesChart";
import { salesData } from "@/data/salesData";

export default function Home() {
  const [year, setYear] = useState(2024);
  const [threshold, setThreshold] = useState(0);
  const [chartType, setChartType] = useState<"bar" | "line" | "pie">("bar");

  const filteredData = salesData[year].filter(
    (item) => item.sales >= threshold
  );

  return (
    <main className="min-h-screen bg-gray-100 dark:bg-gray-950 p-6 sm:p-10 text-black dark:text-white transition-colors">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-4xl font-bold tracking-tight">
            Sales Dashboard
          </h1>
        </header>

        {/* Filters Card */}
        <section className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6 mb-8">
          <div className="flex flex-col sm:flex-row gap-4">
            <select
              className="border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={year}
              onChange={(e) => setYear(Number(e.target.value))}
            >
              <option value={2022}>2022</option>
              <option value={2023}>2023</option>
              <option value={2024}>2024</option>
            </select>

            <input
              type="number"
              placeholder="Minimum Sales"
              className="border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setThreshold(Number(e.target.value))}
            />
          </div>
        </section>

        {/* Chart Tabs */}
        <section className="mb-6 flex justify-center">
          <ChartTabs value={chartType} onChange={setChartType} />
        </section>

        {/* Chart Card */}
        <section className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 transition-all">
          <SalesChart data={filteredData} type={chartType} />
        </section>
      </div>
    </main>
  );
}