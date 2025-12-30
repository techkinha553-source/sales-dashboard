"use client";

import {
  AreaChart as ReAreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

type SalesData = {
  month: string;
  sales: number;
};

interface Props {
  data: SalesData[];
}

export default function AreaChart({ data }: Props) {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <ReAreaChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="sales"
          stroke="#2563eb"
          fill="#93c5fd"
        />
      </ReAreaChart>
    </ResponsiveContainer>
  );
}