"use client";

import React from "react";
import styles from "./DashboardControls.module.css";
import {
  BarChart3,
  LineChart,
  PieChart,
  AreaChart,
  Layers,
  Columns,
  Filter,
} from "lucide-react";

type ChartType =
  | "bar"
  | "line"
  | "pie"
  | "area"
  | "combo"
  | "stacked";

interface Props {
  year: number;
  onYearChange: (year: number) => void;
  chartType: ChartType;
  onChartChange: (type: ChartType) => void;
  threshold: number;
  onThresholdChange: (value: number) => void;
}

export default function DashboardControls({
  year,
  onYearChange,
  chartType,
  onChartChange,
  threshold,
  onThresholdChange,
}: Props) {
return (
//   <div className={styles.dashboard}>

//     {/* YEAR */}
//     <div className={styles.row}>
//       <span className={styles.label}>Year:</span>
//       <div className={styles.yearTabs}>
//         {[2022, 2023, 2024].map((y) => (
//           <button
//             key={y}
//             onClick={() => onYearChange(y)}
//             className={`${styles.yearBtn} ${year === y ? styles.active : ""}`}
//           >
//             <span>{y}</span>
//           </button>
//         ))}
//       </div>
//     </div>

//     {/* CHART */}
//     <div className={styles.row}>
//       <span className={styles.label}>Chart:</span>
//       <div className={styles.chartButtons}>
//         <ChartButton active={chartType === "bar"} onClick={() => onChartChange("bar")} icon={<BarChart3 size={16} />} />
//         <ChartButton active={chartType === "line"} onClick={() => onChartChange("line")} icon={<LineChart size={16} />} />
//         <ChartButton active={chartType === "area"} onClick={() => onChartChange("area")} icon={<AreaChart size={16} />} />
//         <ChartButton active={chartType === "pie"} onClick={() => onChartChange("pie")} icon={<PieChart size={16} />} />
//         <ChartButton active={chartType === "combo"} onClick={() => onChartChange("combo")} icon={<Layers size={16} />} />
//         <ChartButton active={chartType === "stacked"} onClick={() => onChartChange("stacked")} icon={<Columns size={16} />} />
//       </div>
//     </div>

//     {/* MIN SALES */}
//     <div className={styles.row}>
//       <span className={styles.label}>Min Sales:</span>
//       <div className={styles.inputWrapper}>
//         <span className={styles.inputIconLeft}>
//           <Filter size={14} />
//         </span>
//         <input
//           type="number"
//           value={threshold}
//           onChange={(e) => onThresholdChange(Number(e.target.value))}
//         />
//         <span className={styles.inputIconRight}>$</span>
//       </div>
//     </div>

//   </div>
<div className={styles.dashboard}>
  <div className={styles.controlsRow}>

    {/* YEAR */}
    <div className={styles.section}>
      <span className={styles.label}>Year:</span>
      <div className={styles.yearTabs}>
        {[2022, 2023, 2024].map((y) => (
          <button
            key={y}
            onClick={() => onYearChange(y)}
            className={`${styles.yearBtn} ${year === y ? styles.active : ""}`}
          >
            <span>{y}</span>
          </button>
        ))}
      </div>
    </div>

    <div className={styles.divider} />

    {/* CHART */}
    <div className={styles.section}>
      <span className={styles.label}>Chart:</span>
      <div className={styles.chartButtons}>
        <ChartButton active={chartType === "bar"} onClick={() => onChartChange("bar")} icon={<BarChart3 size={16} />} />
        <ChartButton active={chartType === "line"} onClick={() => onChartChange("line")} icon={<LineChart size={16} />} />
        <ChartButton active={chartType === "area"} onClick={() => onChartChange("area")} icon={<AreaChart size={16} />} />
        <ChartButton active={chartType === "pie"} onClick={() => onChartChange("pie")} icon={<PieChart size={16} />} />
        <ChartButton active={chartType === "combo"} onClick={() => onChartChange("combo")} icon={<Layers size={16} />} />
        <ChartButton active={chartType === "stacked"} onClick={() => onChartChange("stacked")} icon={<Columns size={16} />} />
      </div>
    </div>

    <div className={styles.divider} />

    {/* MIN SALES */}
    <div className={styles.section}>
      <span className={styles.label}>Min Sales:</span>
      <div className={styles.inputWrapper}>
        <span className={styles.inputIconLeft}>
          <Filter size={14} />
        </span>
        <input
          type="number"
          value={threshold}
          onChange={(e) => onThresholdChange(Number(e.target.value))}
        />
        <span className={styles.inputIconRight}>$</span>
      </div>
    </div>

  </div>
</div>
);
}

function ChartButton({
  active,
  onClick,
  icon,
}: {
  active: boolean;
  onClick: () => void;
  icon: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`${styles.chartBtn} ${active ? styles.active : ""}`}
    >
      {icon}
    </button>
  );
}