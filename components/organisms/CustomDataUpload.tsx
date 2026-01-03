"use client";

import Papa from "papaparse";
import { SalesRecord } from "@/types/sales";

type Props = {
  onDataParsed: (data: SalesRecord[]) => void;
};

export default function CustomDataUpload({ onDataParsed }: Props) {
  const handleFile = (file: File) => {
    Papa.parse<Record<string, string>>(file, {
      header: true,
      skipEmptyLines: true,
      complete: (result) => {
        const parsedData: SalesRecord[] = result.data.map((row) => ({
          month: row.month,
          sales: Number(row.sales),
          orders: Number(row.orders),
          profit: Number(row.profit),
        }));

        onDataParsed(parsedData);
      },
    });
  };

  return (
    <section className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-md mt-6">
      <h2 className="text-xl font-semibold mb-4">
        Import Custom Data
      </h2>

      <input
        type="file"
        accept=".csv,.sql"
        onChange={(e) => {
          if (e.target.files?.[0]) {
            handleFile(e.target.files[0]);
          }
        }}
      />
    </section>
  );
}