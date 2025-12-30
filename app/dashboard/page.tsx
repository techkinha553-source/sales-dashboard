"use client";

import { useState } from "react";
import ChartTabs from "@/components/molecules/ChartTabs";
import ThemeToggle from "@/components/atoms/ThemeToggle";
import KpiCards from "@/components/organisms/KpiCards";

export default function Dashboard() {
  const [chartType, setChartType] = useState<
  "bar" | "line" | "pie" | "area" | "stacked" | "combo"
>("bar");

  return (
    <main className="min-h-screen bg-gray-100 dark:bg-gray-950 p-8 text-black dark:text-white transition-colors">
      {/* Header */}
      <header className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold">Sales Dashboard</h1>
          {/* <p className="text-sm text-gray-600 dark:text-gray-400">
            Visual overview of sales performance
          </p> */}
        </div>
        <ThemeToggle />
      </header>

      {/* KPI Cards */}
        <KpiCards />
      {/* KPI Cards */}
      {/* <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {[
          { label: "Total Sales", value: "₹1.2M", icon: "💰" },
          { label: "Revenue", value: "₹860K", icon: "📈" },
          { label: "Orders", value: "2,340", icon: "🛒" },
          { label: "Growth", value: "+12%", icon: "🚀" },
        ].map((item) => (
          <div
            key={item.label}
            className="bg-white dark:bg-gray-900 rounded-xl p-5 shadow hover:shadow-lg transition-all hover:-translate-y-1"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {item.label}
                </p>
                <p className="text-2xl font-bold mt-1">{item.value}</p>
              </div>
              <span className="text-3xl">{item.icon}</span>
            </div>
          </div>
        ))}
      </section> */}

      {/* Chart Tabs */}
      <section className="mb-6">
        <ChartTabs value={chartType} onChange={setChartType} />
      </section>

      {/* Chart Card */}
      <section className="bg-white dark:bg-gray-900 rounded-xl shadow p-6 transition-all hover:shadow-xl">
        <h2 className="text-xl font-semibold mb-2">
          {chartType.toUpperCase()} Chart
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Sales analytics will appear here based on the selected chart type.
        </p>
      </section>
    </main>
  );
}