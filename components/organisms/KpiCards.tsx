"use client";

const kpis = [
  { label: "Total Sales", value: "₹1.2M" },
  { label: "Revenue", value: "₹860K" },
  { label: "Orders", value: "2,340" },
  { label: "Growth", value: "+12%" },
];

export default function KpiCards() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "24px",
        width: "100%",
        marginBottom: "32px",
        marginTop: "24px",
      }}
    >
      {kpis.map((item) => (
        <div
          key={item.label}
          style={{
            background: "rgb(37, 99, 235);",
            color: "#fff",
            padding: "24px",
            borderRadius: "12px",
            border: "1px solid #444",
          }}
        >
          <p style={{ color: "#000", fontSize: "19px" , fontWeight:"bold" }}>{item.label}</p>
          <p style={{ fontSize: "28px", fontWeight: "bold" }}>
            {item.value}
          </p>
        </div>
      ))}
    </div>
  );
}