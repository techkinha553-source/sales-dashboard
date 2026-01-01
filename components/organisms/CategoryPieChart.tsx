// "use client";

// import {
//   PieChart,
//   Pie,
//   Cell,
//   ResponsiveContainer,
//   Tooltip,
//   Legend,
// } from "recharts";

// type DataItem = {
//   name: string;
//   value: number;
// };

// interface Props {
//   data: DataItem[];
// }

// const COLORS = [
//   "#2563eb", // blue
//   "#10b981", // green
//   "#f59e0b", // orange
//   "#a855f7", // purple
//   "#dc2626", // red
// ];

// // label with percentage outside
// const renderLabel = ({
//   cx,
//   cy,
//   midAngle,
//   outerRadius,
//   percent,
//   name,
//   fill,
// }: any) => {
//   const RADIAN = Math.PI / 180;
//   const radius = outerRadius + 18;
//   const x = cx + radius * Math.cos(-midAngle * RADIAN);
//   const y = cy + radius * Math.sin(-midAngle * RADIAN);

//   return (
//     <text
//       x={x}
//       y={y}
//       fill={fill}
//       textAnchor={x > cx ? "start" : "end"}
//       dominantBaseline="central"
//       fontSize={14}
//       fontWeight={500}
//     >
//       {`${name} ${(percent * 100).toFixed(0)}%`}
//     </text>
//   );
// };

// export default function CategoryPieChart({ data }: Props) {
//   return (
//     <ResponsiveContainer width="100%" height={420}>
//       <PieChart>
//         <Tooltip />
//         <Legend verticalAlign="bottom" />

//         <Pie
//           data={data}
//           dataKey="value"
//           nameKey="name"
//           cx="50%"
//           cy="50%"
//           innerRadius={90}     // 👈 donut hole
//           outerRadius={140}
//           paddingAngle={3}
//           label={renderLabel}
//         >
//           {data.map((_, index) => (
//             <Cell
//               key={index}
//               fill={COLORS[index % COLORS.length]}
//             />
//           ))}
//         </Pie>
//       </PieChart>
//     </ResponsiveContainer>
//   );
// }