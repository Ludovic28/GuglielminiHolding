import React from "react";

interface TabsProps {
  active: string;
  onChange?: (key: string) => void;
  items: { key: string; label: string }[];
}

export default function Tabs({ active, onChange, items }: TabsProps) {
  return (
    <nav className="tabs">
      <ul className="flex gap-6">
        {items.map((it) => (
          <li key={it.key}>
            <button
              className={`tab ${active === it.key ? "tab--active" : ""}`}
              onClick={() => onChange?.(it.key)}
              aria-current={active === it.key ? "page" : undefined}
            >
              {it.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
