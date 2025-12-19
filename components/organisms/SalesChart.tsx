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
} from "recharts";

type Props = {
  data: any[];
  type: "bar" | "line" | "pie";
};

export default function SalesChart({ data, type }: Props) {
  return (
    <ResponsiveContainer width="100%" height={400}>
      {type === "bar" && (
        <BarChart data={data}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="sales" />
        </BarChart>
      )}

      {type === "line" && (
        <LineChart data={data}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line dataKey="sales" />
        </LineChart>
      )}

      {type === "pie" && (
        <PieChart>
          <Tooltip />
          <Pie
            data={data}
            dataKey="sales"
            nameKey="month"
            cx="50%"
            cy="50%"
            outerRadius={150}
          >
            {data.map((_, index) => (
              <Cell key={index} />
            ))}
          </Pie>
        </PieChart>
      )}
    </ResponsiveContainer>
  );
}