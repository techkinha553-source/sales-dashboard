import { SalesData } from "@/data/salesData";

/**
 * Simple trend-based forecast
 * Uses last 3 months average growth
 */
export function generateForecast(data: SalesData[], months = 3) {
  if (data.length < 3) return [];

  const lastThree = data.slice(-3);

  // Calculate average growth rate
  let growthSum = 0;
  for (let i = 1; i < lastThree.length; i++) {
    growthSum +=
      (lastThree[i].sales - lastThree[i - 1].sales) /
      lastThree[i - 1].sales;
  }

  const avgGrowth = growthSum / (lastThree.length - 1);

  const forecast = [];
  let lastValue = lastThree[lastThree.length - 1].sales;

  for (let i = 1; i <= months; i++) {
    lastValue = Math.round(lastValue * (1 + avgGrowth));

    forecast.push({
      month: `F${i}`,
      sales: lastValue,
      profit: Math.round(lastValue * 0.25),
      isForecast: true,
    });
  }

  return forecast;
}