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
    <main className="min-h-screen p-8 bg-white text-black">
      <h1 className="text-3xl font-bold mb-6">Sales Dashboard</h1>

      {/* Filters */}
      <div className="flex gap-4 mb-6">
        <select
          className="border p-2"
          value={year}
          onChange={(e) => setYear(Number(e.target.value))}
        >
          <option value={2022}>2022</option>
          <option value={2023}>2023</option>
          <option value={2024}>2024</option>
        </select>

        <input
          type="number"
          placeholder="Min Sales"
          className="border p-2"
          onChange={(e) => setThreshold(Number(e.target.value))}
        />
      </div>

      {/* Chart Tabs */}
      <section className="mb-6 flex gap-6">
        <ChartTabs value={chartType} onChange={setChartType} />
      </section>

      {/* Chart */}
      <SalesChart data={filteredData} type={chartType} />
    </main>
  );
}