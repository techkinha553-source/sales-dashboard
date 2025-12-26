"use client";

type ChartType = "bar" | "line" | "pie";

type ChartTabsProps = {
  value: ChartType;
  onChange: (value: ChartType) => void;
};

export default function ChartTabs({ value, onChange }: ChartTabsProps) {
  const tabs: ChartType[] = ["bar", "line", "pie"];

  return (
    <div className="flex gap-6 bg-gray-100 dark:bg-gray-800 p-2 rounded-lg ">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onChange(tab)}
          className={`px-6 py-3 rounded-full text-base font-semibold transition-all duration-200
            ${
              value === tab
                ? "bg-blue-700 text-white shadow-lg"
                : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600"
            } hover:scale-105 active:scale-95`}
        >
          {tab.toUpperCase()}
        </button>
      ))}
    </div>
  );
}