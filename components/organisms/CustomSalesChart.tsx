import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { SalesRecord } from "@/types/sales";

export default function CustomSalesChart({
  data,
}: {
  data: SalesRecord[];
}) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="sales" />
      </BarChart>
    </ResponsiveContainer>
  );
}