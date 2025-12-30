"use client";

type ChartType =
  | "bar"
  | "line"
  | "pie"
  | "area"
  | "stacked"
  | "combo";

type ChartTabsProps = {
  value: ChartType;
  onChange: (value: ChartType) => void;
};

export default function ChartTabs({ value, onChange }: ChartTabsProps) {
  const tabs: ChartType[] = [
    "bar",
    "line",
    "pie",
    "area",
    "stacked",
    "combo",
  ];

  return (
    <div className="flex flex-wrap justify-center bg-gray-100 dark:bg-gray-800 p-3 rounded-xl gap-4">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onChange(tab)}
          className={`px-6 py-3 rounded-full text-sm font-semibold
            transition-all duration-200
            ${
              value === tab
                ? "bg-blue-700 dark:bg-blue-600 text-white shadow-md"
                : "bg-blue-500 dark:bg-blue-500 text-white hover:bg-blue-600 dark:hover:bg-blue-400"
            }
            hover:scale-105 active:scale-95`}
        >
          {tab.toUpperCase()}
        </button>
      ))}
    </div>
  );
}