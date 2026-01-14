"use client";

// import ChartTabs from "@/components/molecules/ChartTabs";
import { useState } from "react";
import SalesChart from "@/components/organisms/SalesChart";
import { salesData } from "@/data/salesData";
import KpiCards from "@/components/organisms/KpiCards";
import DashboardControls from "@/components/molecules/DashboardControls";
// import CategoryPieChart from "@/components/organisms/CategoryPieChart";
// import { categorySales } from "@/data/categorySales";
import YearlyComparisonSection from "@/components/organisms/YearlyComparisonSection";
// import ImportCustomData from "@/components/ImportCustomData";

export default function Home() {
  const [year, setYear] = useState(2024);
  const [threshold, setThreshold] = useState(0);
  const [chartType, setChartType] = useState<
  "bar" | "line" | "pie" | "area" | "stacked" | "combo">("bar");
  const [mode, setMode] = useState<"actual" | "forecast">("actual");

  const filteredData = salesData[year].filter(
    (item) => item.sales >= threshold
  );

  // Forecast KPI logic
    const forecastMonths = 3;

    const lastActualSale =
      filteredData[filteredData.length - 1]?.sales ?? 0;

    const avgGrowthRate = (() => {
      if (filteredData.length < 3) return 0;

      let sum = 0;
      for (let i = filteredData.length - 3; i < filteredData.length - 1; i++) {
        sum +=
          (filteredData[i + 1].sales - filteredData[i].sales) /
          filteredData[i].sales;
      }
      return sum / 2;
    })();

    const forecastEndValue = Math.round(
      lastActualSale * Math.pow(1 + avgGrowthRate, forecastMonths)
    );

    const forecastGrowthPercent =
      lastActualSale > 0
        ? ((forecastEndValue - lastActualSale) / lastActualSale) * 100
        : 0;

        // Risk calculation based on sales volatility
        const volatility = (() => {
          if (filteredData.length < 4) return 0;

          const changes: number[] = [];
          for (let i = 1; i < filteredData.length; i++) {
            changes.push(
              Math.abs(
                (filteredData[i].sales - filteredData[i - 1].sales) /
                  filteredData[i - 1].sales
              )
            );
          }

          return changes.reduce((a, b) => a + b, 0) / changes.length;
        })();

        const riskLevel =
          volatility < 0.05
            ? "Low"
            : volatility < 0.12
            ? "Medium"
            : "High";

  return (
    <main className="min-h-screen bg-gray-100 dark:bg-gray-950 p-8 text-black dark:text-white">

      {/* Header */}
      {/* <header className="max-w-6xl mx-auto mb-6">
        <h1 className="text-4xl font-bold tracking-tight">
          Sales Dashboard
        </h1>
      </header> */}
      {/* Header */}
        <header className="max-w-6xl mx-auto mb-6 space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">
            Sales Dashboard
          </h1>

          {/* Import Custom Data Button */}
          {/* <ImportCustomData /> */}
        </header>

      {/*  KPI Cards – FULL WIDTH */}
      <KpiCards />

      {mode === "forecast" && (
        <>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow p-5">
              <p className="text-sm text-gray-500">
                Expected Growth (Next 3 Months)
              </p>
              <p
                className={`text-3xl font-bold ${
                  forecastGrowthPercent >= 0
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {forecastGrowthPercent.toFixed(1)}%
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-xl shadow p-5">
              <p className="text-sm text-gray-500">Forecast Insight</p>
              <p className="text-sm mt-2">
                Based on recent sales trends, revenue is expected to{" "}
                <span className="font-semibold">
                  {forecastGrowthPercent >= 0 ? "increase" : "decrease"}
                </span>{" "}
                over the next quarter.
              </p>
            </div>
          </div>

          <div className="mt-4">
            <span
              className={`inline-block px-4 py-1 rounded-full text-sm font-semibold
                ${
                  riskLevel === "Low"
                    ? "bg-green-100 text-green-700"
                    : riskLevel === "Medium"
                    ? "bg-yellow-100 text-yellow-700"
                    : "bg-red-100 text-red-700"
                }`}
            >
              Forecast Risk: {riskLevel}
            </span>
          </div>
        </>
      )}

      {/* Content Wrapper */}
      <div className="mx-auto">

        {/* Filters Card */}
        {/* <section className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6 mb-8">
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
        </section> */}

        {/* Chart Tabs */}
        {/* <section className="mb-6 flex justify-center">
          <ChartTabs value={chartType} onChange={setChartType} />
        </section> */}

        {/* Dashboard Controls */}
        <section className="mb-8">
          <DashboardControls
            year={year}
            onYearChange={setYear}
            chartType={chartType}
            onChartChange={setChartType}
            threshold={threshold}
            onThresholdChange={setThreshold}
            mode={mode}
            onModeChange={setMode}
          />
        </section>

        {/* Chart Card */}
        <section className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6">
          <SalesChart data={filteredData} type={chartType} mode={mode} />
        </section>

          {/* NEW SECTION BELOW DASHBOARD */}
          <YearlyComparisonSection /> 
      </div>
    </main>
  );
}