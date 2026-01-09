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

  const forecast: SalesData[] = [];
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

/**
 * Forecast with confidence range (upper / lower band)
 */
export function generateForecastWithConfidence(
  data: SalesData[],
  months = 3,
  variance = 0.08 // 8% confidence band
) {
  const baseForecast = generateForecast(data, months);

  const upper = baseForecast.map((item) => ({
    ...item,
    sales: Math.round(item.sales * (1 + variance)),
    confidence: "upper" as const,
  }));

  const lower = baseForecast.map((item) => ({
    ...item,
    sales: Math.round(item.sales * (1 - variance)),
    confidence: "lower" as const,
  }));

  return { baseForecast, upper, lower };
}

export function calculateForecastRisk(data: SalesData[]) {
  if (data.length < 3) return "Low";

  const recent = data.slice(-3);
  const changes: number[] = [];

  for (let i = 1; i < recent.length; i++) {
    const change =
      Math.abs(recent[i].sales - recent[i - 1].sales) /
      recent[i - 1].sales;
    changes.push(change);
  }

  const avgVolatility =
    changes.reduce((a, b) => a + b, 0) / changes.length;

  if (avgVolatility > 0.12) return "High";
  if (avgVolatility > 0.05) return "Medium";
  return "Low";
}