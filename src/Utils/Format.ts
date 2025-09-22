export const euro = (n: number): string =>
  Number.isFinite(n) ? n.toLocaleString("fr-FR", { style: "currency", currency: "EUR" }) : "—";

export const pct = (n: number): string => (Number.isFinite(n) ? `${n.toFixed(2)} %` : "—");
