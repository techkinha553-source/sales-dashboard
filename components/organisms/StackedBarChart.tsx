"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

type SalesData = {
  month: string;
  sales: number;
  profit: number; // required for stacked bar
};

interface Props {
  data: SalesData[];
}

export default function StackedBarChart({ data }: Props) {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="sales" stackId="a" fill="#3b82f6" />
        <Bar dataKey="profit" stackId="a" fill="#22c55e" />
      </BarChart>
    </ResponsiveContainer>
  );
}