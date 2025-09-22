// src/App.tsx
import React, { Suspense, useState } from "react";
import Tabs from "./Components/Tabs";
import { TABS, type TabKey, getTabByKey } from "./Tabs/TabsRegistry";

export default function ImmoROIApp() {
  const [active, setActive] = useState<TabKey>("sci");
  const Active = getTabByKey(active).Component;

  return (
    <div className="min-h-screen flex flex-col">
      {/* Onglets centrés */}
      <Tabs
        active={active}
        onChange={(k) => setActive(k as TabKey)}
        items={TABS.map(({ key, label }) => ({ key, label }))}
      />

      {/* Contenu de l’onglet */}
      <main className="flex-1">
        <Suspense fallback={<div className="max-w-5xl mx-auto px-4 py-8">Chargement…</div>}>
          <Active />
        </Suspense>
      </main>
    </div>
  );
}
