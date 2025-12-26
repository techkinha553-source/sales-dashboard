"use client";

import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
  Legend,
} from "recharts";

type SalesData = {
  month: string;
  sales: number;
};

type Props = {
  data: SalesData[];
  type: "bar" | "line" | "pie";
};

const COLORS = [
  "#2563eb",
  "#16a34a",
  "#dc2626",
  "#f59e0b",
  "#7c3aed",
  "#0ea5e9",
  "#22c55e",
  "#e11d48",
  "#a855f7",
  "#14b8a6",
  "#f97316",
  "#84cc16",
];

export default function SalesChart({ data, type }: Props) {
  return (
    <ResponsiveContainer width="100%" height={400}>
      {type === "bar" && (
        <BarChart data={data}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="sales" fill="#2563eb" />
        </BarChart>
      )}

      {type === "line" && (
        <LineChart data={data}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line dataKey="sales" stroke="#16a34a" strokeWidth={2} />
        </LineChart>
      )}

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
              <Cell
                key={index}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      )}
    </ResponsiveContainer>
  );
}