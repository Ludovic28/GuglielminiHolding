import React from "react";

interface CardProps {
  title: string;
  subtitle?: string;
  value: string | number;
  highlight?: boolean;
}

export default function Card({ title, subtitle, value, highlight = false }: CardProps) {
  return (
    <div className={`card ${highlight ? "card--highlight" : ""}`}>
      <div className="text-sm text-gray-500">{title}</div>
      {subtitle && <div className="text-xs text-gray-400">{subtitle}</div>}
      <div className="text-xl font-semibold">{value}</div>
    </div>
  );
}
