"use client";

import {
  ComposedChart,
  Bar,
  Line,
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

export default function ComboChart({ data }: Props) {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <ComposedChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="sales" fill="#6366f1" />
        <Line
          type="monotone"
          dataKey="sales"
          stroke="#ef4444"
          strokeWidth={2}
        />
      </ComposedChart>
    </ResponsiveContainer>
  );
}