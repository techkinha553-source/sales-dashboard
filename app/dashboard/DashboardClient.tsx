"use client";

import Navbar from "@/components/molecules/Navbar";
import { useState } from "react";
import SalesChart from "@/components/organisms/SalesChart";
import { salesData } from "@/data/salesData";
import KpiCards from "@/components/organisms/KpiCards";
import DashboardControls from "@/components/molecules/DashboardControls";
// import YearlyComparisonSection from "@/components/organisms/YearlyComparisonSection";

export default function DashboardClient() {
  const [year, setYear] = useState(2024);
  const [threshold, setThreshold] = useState(0);
  const [chartType, setChartType] = useState<
    "bar" | "line" | "pie" | "area" | "stacked" | "combo"
  >("bar");
  const [mode, setMode] = useState<"actual" | "forecast">("actual");

  const [showRiskInfo, setShowRiskInfo] = useState(false);

  const filteredData = salesData[year].filter(
    (item) => item.sales >= threshold
  );

  /* ---------------- FORECAST LOGIC ---------------- */

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

  /* ---------------- RISK CALCULATION ---------------- */

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
    volatility < 0.05 ? "Low" : volatility < 0.12 ? "Medium" : "High";

  const riskMeta = {
    Low: {
      color: "bg-green-100 text-green-700",
      confidence: 90,
      description:
        "Sales are stable with minimal fluctuations. Forecast is highly reliable.",
    },
    Medium: {
      color: "bg-yellow-100 text-yellow-700",
      confidence: 65,
      description:
        "Moderate variation detected. Monitor trends before making decisions.",
    },
    High: {
      color: "bg-red-100 text-red-700",
      confidence: 40,
      description:
        "High volatility in sales data. Forecast accuracy is lower.",
    },
  } as const;

  return (
    <main className="min-h-screen bg-gray-100 dark:bg-gray-950 p-8 text-black dark:text-white">
      {/* HEADER */}
      {/* <header className="max-w-6xl mx-auto mb-6 space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">
          Sales Dashboard
        </h1>
      </header> */}
      <Navbar />

        {/* <div className="p-8"></div> */}
      {/* KPI */}
      <KpiCards />

      {/* FORECAST SECTION */}
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

          {/* -------- RISK BOXES -------- */}
          <div className="mt-6 flex items-center gap-4 ">
            {(["Low", "Medium", "High"] as const).map((level) => {
              const active = riskLevel === level;
              return (
                <div
                  key={level}
                  onClick={() => setShowRiskInfo((p) => !p)}
                  className={`cursor-pointer px-4 py-3 rounded-xl border text-sm font-semibold
                    transition-all duration-300 ease-in-out
                    ${riskMeta[level].color}
                    ${active ? "scale-105 border-gray-400" : "opacity-50"}
                  `}
                >
                  {level} Risk

                  {/* Confidence Bar */}
                  <div className="mt-2 h-1 w-full bg-white/50 rounded">
                    <div
                      className="h-1 rounded bg-current"
                      style={{
                        width: `${riskMeta[level].confidence}%`,
                      }}
                    />
                  </div>

                  <p className="mt-1 text-xs font-normal">
                    {riskMeta[level].confidence}% confidence
                  </p>
                </div>
              );
            })}
          </div>

          {/* RISK EXPLANATION */}
          {showRiskInfo && (
            <div className="mt-3 max-w-2xl text-sm text-gray-600 dark:text-gray-400">
              <strong>{riskLevel} Risk:</strong>{" "}
              {riskMeta[riskLevel].description}
            </div>
          )}
        </>
      )}

      {/* CONTENT */}
      <div className="w-full mt-8 flex flex-col gap-8">
      {/* DASHBOARD CONTROLS */}
        <section className="w-full">
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

        {/* MAIN SALES CHART */}
        <section className="w-full bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6">
          <SalesChart data={filteredData} type={chartType} mode={mode} />
        </section>
        {/* YEARLY COMPARISON */}
        {/* <YearlyComparisonSection /> */}
      </div>
    </main>
  );
}