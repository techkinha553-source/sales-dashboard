"use client";

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
};

type Props = {
  data: SalesData[];
  type: "bar" | "line" | "pie" | "area" | "stacked" | "combo" | "categoryPie";
};

const COLORS = [
  "#2563eb", // sales - blue
  "#16a34a", // profit - green
  "#dc2626",
  "#f59e0b",
  "#7c3aed",
  "#0ea5e9",
];

export default function SalesChart({ data, type }: Props) {
  return (
    <ResponsiveContainer width="100%" height={400}>

      {/* BAR CHART */}
      {type === "bar" && (
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="sales" fill="#2563eb" />
          <Bar dataKey="profit" fill="#16a34a" />
        </BarChart>
      )}

      {/* LINE CHART */}
      {type === "line" && (
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line dataKey="sales" stroke="#2563eb" strokeWidth={2} />
          <Line dataKey="profit" stroke="#16a34a" strokeWidth={2} />
        </LineChart>
      )}

      {/* PIE CHART (Sales only – correct behavior) */}
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

      {/* AREA CHART */}
      {type === "area" && (
        <AreaChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area
            type="monotone"
            dataKey="sales"
            stroke="#2563eb"
            fill="#93c5fd"
          />
          <Area
            type="monotone"
            dataKey="profit"
            stroke="#16a34a"
            fill="#86efac"
          />
        </AreaChart>
      )}

      {/* STACKED BAR CHART */}
      {type === "stacked" && (
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="sales" stackId="a" fill="#2563eb" />
          <Bar dataKey="profit" stackId="a" fill="#16a34a" />
        </BarChart>
      )}

      {/* COMBO CHART */}
      {type === "combo" && (
        <ComposedChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="sales" fill="#2563eb" />
          <Line
            type="monotone"
            dataKey="profit"
            stroke="#6d23ebff"
            strokeWidth={3}
          />
        </ComposedChart>
      )}

      

    </ResponsiveContainer>
  );
}

// "use client";

// import {
//   BarChart,
//   Bar,
//   LineChart,
//   Line,
//   PieChart,
//   Pie,
//   AreaChart,
//   Area,
//   ComposedChart,
//   XAxis,
//   YAxis,
//   Tooltip,
//   ResponsiveContainer,
//   Cell,
//   Legend,
//   CartesianGrid,
// } from "recharts";

// type SalesData = {
//   month: string;
//   sales: number;
//   profit: number;
// };

// type Props = {
//   data: SalesData[];
//   type: "bar" | "line" | "pie" | "area" | "stacked" | "combo";
// };

// const COLORS = [
//   "#2563eb",
//   "#16a34a",
//   "#dc2626",
//   "#f59e0b",
//   "#7c3aed",
//   "#0ea5e9",
//   "#22c55e",
//   "#e11d48",
//   "#a855f7",
//   "#14b8a6",
//   "#f97316",
//   "#84cc16",
// ];

// export default function SalesChart({ data, type }: Props) {
//   return (
//     <ResponsiveContainer width="100%" height={400}>

//       {/* BAR CHART */}
//       {/* {type === "bar" && (
//         <BarChart data={data}>
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey="month" />
//           <YAxis />
//           <Tooltip />
//           <Bar dataKey="sales" fill="#2563eb" />
//         </BarChart>
//       )} */}
//       {/* BAR CHART */}
//       {type === "bar" && (
//         <BarChart data={data}>
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey="month" />
//           <YAxis />
//           <Tooltip />
//           <Legend />
//           <Bar dataKey="sales" fill="#2563eb" />
//           <Bar dataKey="profit" fill="#16a34a" />
//         </BarChart>
//       )}

//       {/* LINE CHART */}
//       {type === "line" && (
//         <LineChart data={data}>
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey="month" />
//           <YAxis />
//           <Tooltip />
//           <Line
//             type="monotone"
//             dataKey="sales"
//             stroke="#16a34a"
//             strokeWidth={2}
//           />
//         </LineChart>
//       )}

//       {/* PIE CHART */}
//       {type === "pie" && (
//         <PieChart>
//           <Tooltip />
//           <Legend verticalAlign="bottom" />
//           <Pie
//             data={data}
//             dataKey="sales"
//             nameKey="month"
//             cx="50%"
//             cy="45%"
//             outerRadius={140}
//             label
//           >
//             {data.map((_, index) => (
//               <Cell
//                 key={index}
//                 fill={COLORS[index % COLORS.length]}
//               />
//             ))}
//           </Pie>
//         </PieChart>
//       )}

//       {/* AREA CHART */}
//       {type === "area" && (
//         <AreaChart data={data}>
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey="month" />
//           <YAxis />
//           <Tooltip />
//           <Area
//             type="monotone"
//             dataKey="sales"
//             stroke="#2563eb"
//             fill="#93c5fd"
//           />
//         </AreaChart>
//       )}

//       {/* STACKED BAR CHART */}
//       {type === "stacked" && (
//         <BarChart data={data}>
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey="month" />
//           <YAxis />
//           <Tooltip />
//           <Bar dataKey="sales" stackId="a" fill="#2563eb" />
//           <Bar dataKey="sales" stackId="a" fill="#22c55e" />
//         </BarChart>
//       )}

//       {/* COMBO CHART (BAR + LINE) */}
//       {type === "combo" && (
//         <ComposedChart data={data}>
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey="month" />
//           <YAxis />
//           <Tooltip />
//           <Bar dataKey="sales" fill="#6366f1" />
//           <Line
//             type="monotone"
//             dataKey="sales"
//             stroke="#ef4444"
//             strokeWidth={2}
//           />
//         </ComposedChart>
//       )}

//     </ResponsiveContainer>
//   );
// }