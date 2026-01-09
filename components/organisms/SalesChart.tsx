"use client";

import {
  generateForecast,
  generateForecastWithConfidence,
} from "@/data/forecast";

import { calculateForecastRisk } from "@/data/forecast";

import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  AreaChart,
  Area,
  ComposedChart,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
  Legend,
  CartesianGrid,
} from "recharts";

type SalesData = {
  month: string;
  sales: number;
  profit: number;
  isForecast?: boolean;
};

type Props = {
  data: SalesData[];
  type: "bar" | "line" | "pie" | "area" | "stacked" | "combo" | "categoryPie";
  mode: "actual" | "forecast";
};

const COLORS = [
  "#2563eb",
  "#16a34a",
  "#dc2626",
  "#f59e0b",
  "#7c3aed",
  "#0ea5e9",
];

type TooltipPayload = {
  payload?: {
    isForecast?: boolean;
  };
};


const tooltipFormatter = (
  value: number | string | undefined,
  name: string | undefined,
  item: TooltipPayload
): [number | string, string] | null => {
  if (value === undefined) return null;
  if (!name) return null;

  const isForecast = item?.payload?.isForecast;

  const label = isForecast
    ? `${name} (Forecast – based on last 3 months trend)`
    : name;

  return [value, label];
};

export default function SalesChart({ data, type, mode }: Props) {
  const forecastData =
    mode === "forecast" ? generateForecast(data, 3) : [];

  const chartData =
    mode === "forecast" ? [...data, ...forecastData] : data;

  const confidence =
    mode === "forecast"
      ? generateForecastWithConfidence(data, 3)
      : null;

  const upperBand = confidence?.upper ?? [];
  const lowerBand = confidence?.lower ?? [];

  return (
    <ResponsiveContainer width="100%" height={400}>
      {/* BAR CHART */}
      {type === "bar" && (
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip formatter={tooltipFormatter} />
          <Legend />
          <Bar dataKey="sales" fill="#2563eb" fillOpacity={mode === "forecast" ? 0.6 : 1} />
          <Bar dataKey="profit" fill="#16a34a" fillOpacity={mode === "forecast" ? 0.6 : 1} />
        </BarChart>
      )}

      {/* LINE CHART */}
      {type === "line" && (
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip formatter={tooltipFormatter} />
          <Legend />

          {/* CONFIDENCE BOUNDS */}
          {mode === "forecast" && (
            <>
              <Line
                data={upperBand}
                dataKey="sales"
                stroke="#93c5fd"
                strokeDasharray="4 4"
                dot={false}
              />
              <Line
                data={lowerBand}
                dataKey="sales"
                stroke="#93c5fd"
                strokeDasharray="4 4"
                dot={false}
              />
            </>
          )}

          <Line
            dataKey="sales"
            stroke="#2563eb"
            strokeWidth={2}
            strokeDasharray={mode === "forecast" ? "5 5" : undefined}
          />
          <Line dataKey="profit" stroke="#16a34a" strokeWidth={2} />
        </LineChart>
      )}

      {/* PIE CHART */}
      {type === "pie" && (
        <PieChart>
          <Tooltip />
          <Legend verticalAlign="bottom" />
          <Pie
            data={data}
            dataKey="sales"
            nameKey="month"
            cx="50%"
            cy="45%"
            outerRadius={140}
            label
          >
            {data.map((_, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      )}

      {/* AREA CHART */}
      {type === "area" && (
        <AreaChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip formatter={tooltipFormatter} />
          <Legend />

          {/* CONFIDENCE BAND */}
          {mode === "forecast" && (
            <>
              <Area
                type="monotone"
                data={upperBand}
                dataKey="sales"
                stroke="none"
                fill="#93c5fd"
                fillOpacity={0.2}
                isAnimationActive={false}
              />
              <Area
                type="monotone"
                data={lowerBand}
                dataKey="sales"
                stroke="none"
                fill="#93c5fd"
                fillOpacity={0.2}
                isAnimationActive={false}
              />
            </>
          )}

          <Area
            type="monotone"
            dataKey="sales"
            stroke="#2563eb"
            fill="#93c5fd"
            fillOpacity={mode === "forecast" ? 0.4 : 0.8}
          />
          <Area
            type="monotone"
            dataKey="profit"
            stroke="#16a34a"
            fill="#86efac"
            fillOpacity={mode === "forecast" ? 0.4 : 0.8}
          />
        </AreaChart>
      )}

      {/* STACKED BAR CHART */}
      {type === "stacked" && (
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip formatter={tooltipFormatter} />
          <Legend />
          <Bar dataKey="sales" stackId="a" fill="#2563eb" />
          <Bar dataKey="profit" stackId="a" fill="#16a34a" />
        </BarChart>
      )}

      {/* COMBO CHART */}
      {type === "combo" && (
        <ComposedChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip formatter={tooltipFormatter} />
          <Legend />
          <Bar dataKey="sales" fill="#2563eb" />
          <Line
            type="monotone"
            dataKey="profit"
            stroke="#6d23ebff"
            strokeWidth={3}
            strokeDasharray={mode === "forecast" ? "5 5" : undefined}
          />
        </ComposedChart>
      )}
    </ResponsiveContainer>
  );
}