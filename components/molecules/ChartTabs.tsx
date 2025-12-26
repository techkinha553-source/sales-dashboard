"use client";

type ChartType = "bar" | "line" | "pie";

type ChartTabsProps = {
  value: ChartType;
  onChange: (value: ChartType) => void;
};

export default function ChartTabs({ value, onChange }: ChartTabsProps) {
  const tabs: ChartType[] = ["bar", "line", "pie"];

  return (
    <div className="flex gap-4 bg-gray-100 dark:bg-gray-800 p-1 rounded-lg">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onChange(tab)}
          className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200
            ${
              value === tab
                ? "bg-blue-700 text-white shadow"
                : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600"
            } hover:scale-105 active:scale-95`}
        >
          {tab.toUpperCase()}
        </button>
      ))}
    </div>
  );
}