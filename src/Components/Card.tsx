interface CardProps {
  title: string;
  subtitle?: string;
  value: string | number;
  highlight?: boolean;
  className?: string; // ⬅️ ajouté
}

export default function Card({ title, subtitle, value, highlight = false, className }: CardProps) {
  return (
    <div className={`card ${highlight ? "card--highlight" : ""} ${className ?? ""}`}>
      <div className="text-sm text-gray-500">{title}</div>
      {subtitle && <div className="text-xs text-gray-400">{subtitle}</div>}
      <div className="text-xl font-semibold">{value}</div>
    </div>
  );
}
