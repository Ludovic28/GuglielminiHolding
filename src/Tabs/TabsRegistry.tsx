// src/tabs/TabRegistry.tsx
import SciTab from "./SCITab";
import LaundryTab from "./Laundry";

export type TabKey = "sci" | "laundry";

export interface TabItem {
  key: TabKey;
  label: string;
  Component: () => JSX.Element;
}

export const TABS: TabItem[] = [
  { key: "sci", label: "SCI", Component: SciTab },
  { key: "laundry", label: "Laverie", Component: LaundryTab },
];

// Helper
export const getTabByKey = (key: TabKey) => TABS.find((t) => t.key === key) ?? TABS[0];
