"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Legend,
} from "recharts";

import "./YearlyComparisonSection.css";

const yoyData = [
  { month: "Jan", y2022: 45000, y2023: 52000, y2024: 61000 },
  { month: "Feb", y2022: 50000, y2023: 56000, y2024: 68000 },
  { month: "Mar", y2022: 48000, y2023: 54000, y2024: 72100 },
  { month: "Apr", y2022: 60000, y2023: 65000, y2024: 78900 },
  { month: "May", y2022: 58000, y2023: 70000, y2024: 85600 },
  { month: "Jun", y2022: 70000, y2023: 85000, y2024: 98200 },
  { month: "Jul", y2022: 68000, y2023: 80000, y2024: 92400 },
  { month: "Aug", y2022: 72000, y2023: 88000, y2024: 105800 },
  { month: "Sep", y2022: 69000, y2023: 82000, y2024: 98700 },
  { month: "Oct", y2022: 85000, y2023: 95000, y2024: 120000 },
  { month: "Nov", y2022: 95000, y2023: 115000, y2024: 150000 },
  { month: "Dec", y2022: 110000, y2023: 135000, y2024: 175000 },
];

const tableData = [
  { month: "Jan", sales: "$61,200", orders: 1203, profit: "$16,700", margin: "27.3%" },
  { month: "Feb", sales: "$68,400", orders: 1345, profit: "$18,700", margin: "27.3%" },
  { month: "Mar", sales: "$72,100", orders: 1418, profit: "$19,700", margin: "27.3%" },
  { month: "Apr", sales: "$78,900", orders: 1553, profit: "$21,600", margin: "27.4%" },
  { month: "May", sales: "$85,600", orders: 1684, profit: "$23,400", margin: "27.3%" },
  { month: "Jun", sales: "$98,200", orders: 1934, profit: "$26,800", margin: "27.3%" },
  { month: "Jul", sales: "$92,400", orders: 1823, profit: "$25,300", margin: "27.4%" },
  { month: "Aug", sales: "$105,800", orders: 2089, profit: "$28,900", margin: "27.3%" },
  { month: "Sep", sales: "$98,700", orders: 1945, profit: "$27,000", margin: "27.4%" },
  { month: "Oct", sales: "$112,300", orders: 2210, profit: "$30,800", margin: "27.4%" },
  { month: "Nov", sales: "$128,900", orders: 2498, profit: "$35,300", margin: "27.4%" },
  { month: "Dec", sales: "$145,600", orders: 2712, profit: "$39,900", margin: "27.4%" },
];

export default function YearlyComparisonSection() {
  return (
    <section className="comparison-wrapper">

      {/* LEFT */}
      <div className="comparison-card">
        <h2>Year-over-Year Comparison</h2>

        <div className="chart-container">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={yoyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis tickFormatter={(v) => `$${v / 1000}K`} />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="y2022" stroke="#2563eb" strokeWidth={2} />
              <Line type="monotone" dataKey="y2023" stroke="#10b981" strokeWidth={2} />
              <Line type="monotone" dataKey="y2024" stroke="#f59e0b" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* RIGHT */}
      <div className="comparison-card">
        <h2>Monthly Breakdown</h2>

        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Month</th>
                <th>Sales</th>
                <th>Orders</th>
                <th>Profit</th>
                <th>Margin</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row) => (
                <tr key={row.month}>
                  <td>{row.month}</td>
                  <td>{row.sales}</td>
                  <td>{row.orders}</td>
                  <td>{row.profit}</td>
                  <td className="green">↑ {row.margin}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </section>
  );
}