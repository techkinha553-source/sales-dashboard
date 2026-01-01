"use client";

import {
  DollarSign,
  ShoppingCart,
  TrendingUp,
  Package,
} from "lucide-react";

const kpis = [
  {
    label: "Total Sales",
    value: "$1,190,400",
    growth: "31.8%",
    icon: DollarSign,
  },
  {
    label: "Total Orders",
    value: "23,463",
    growth: "25.44%",
    icon: ShoppingCart,
  },
  {
    label: "Total Profit",
    value: "$325,400",
    growth: "34.98%",
    icon: TrendingUp,
  },
  {
    label: "Avg Order Value",
    value: "$51",
    growth: "9.54%",
    icon: Package,
  },
];

export default function KpiCards() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
        gap: "24px",
        width: "100%",
        marginTop: "24px",
        marginBottom: "32px",
      }}
    >
      {kpis.map((item) => {
        const Icon = item.icon;

        return (
          <div
              key={item.label}
              style={{
                background: "var(--card-bg)",
                border: "1px solid var(--card-border)",
                borderRadius: "16px",
                padding: "24px",
                color: "var(--card-text)",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
              }}
            >
            {/* LEFT CONTENT */}
            <div>
              <p style={{ color: "var(--muted-text)" }}>
                {item.label}
              </p>

              <p
                style={{
                  fontSize: "36px",
                  fontWeight: "700",
                  marginBottom: "16px",
                }}
              >
                {item.value}
              </p>

              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <span
                  style={{
                    background: "rgba(34,197,94,0.15)",
                    color: "#4ade80",
                    fontSize: "12px",
                    fontWeight: "600",
                    padding: "4px 10px",
                    borderRadius: "999px",
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                  }}
                >
                  <TrendingUp size={14} />
                  {item.growth}
                </span>

                <span style={{ fontSize: "12px", color: "#9ca3af" }}>
                  vs last year
                </span>
              </div>
            </div>

            {/* ICON */}
            <div
              style={{
                background: "var(--icon-bg)",
                padding: "12px",
                borderRadius: "12px",
              }}
            >
              <Icon size={22} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

// "use client";

// const kpis = [
//   { label: "Total Sales", value: "₹1.2M" },
//   { label: "Revenue", value: "₹860K" },
//   { label: "Orders", value: "2,340" },
//   { label: "Growth", value: "+12%" },
// ];

// export default function KpiCards() {
//   return (
//     <div
//       style={{
//         display: "grid",
//         gridTemplateColumns: "repeat(4, 1fr)",
//         gap: "24px",
//         width: "100%",
//         marginBottom: "32px",
//         marginTop: "24px",
//       }}
//     >
//       {kpis.map((item) => (
//         <div
//           key={item.label}
//           style={{
//             background: "rgb(37, 99, 235);",
//             color: "#fff",
//             padding: "24px",
//             borderRadius: "12px",
//             border: "1px solid #444",
//           }}
//         >
//           <p style={{ color: "#000", fontSize: "19px" , fontWeight:"bold" }}>{item.label}</p>
//           <p style={{ fontSize: "28px", fontWeight: "bold" }}>
//             {item.value}
//           </p>
//         </div>
//       ))}
//     </div>
//   );
// }