// src/tabs/SciTab.tsx
import React, { useEffect, useMemo, useState } from "react";
import Field from "../Components/Field";
import NumberInput from "../Components/NumberInput";
import Card from "../Components/Card";
import { computeResults } from "../Lib/Calculs";
import { euro, pct } from "../Utils/Format";
import { defaultForm, STORAGE_KEY } from "../State/DefaultForm";
import type { FormValues } from "../Types/Index";

export default function SciTab() {
  const [form, setForm] = useState<FormValues>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      const saved = raw ? (JSON.parse(raw) as Partial<FormValues>) : undefined;
      return saved ? { ...defaultForm, ...saved } : defaultForm;
    } catch {
      return defaultForm;
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(form));
  }, [form]);

  const update = <K extends keyof FormValues>(key: K, value: FormValues[K]) =>
    setForm((f) => ({ ...f, [key]: value }));

  const results = useMemo(() => computeResults(form), [form]);

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Formulaire */}
        <section className="card">
          <h2 className="text-lg font-medium mb-4 text-center">Paramètres — SCI</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field label="Prix d'achat (€)">
              <NumberInput value={form.prixAchat} onChange={(v) => update("prixAchat", v)} />
            </Field>

            <Field label="Frais de notaire (%)">
              <NumberInput value={form.fraisNotairePct} onChange={(v) => update("fraisNotairePct", v)} />
            </Field>

            <Field label="Travaux (€)">
              <NumberInput value={form.travaux} onChange={(v) => update("travaux", v)} />
            </Field>

            <Field label="Loyer mensuel brut (€)">
              <NumberInput value={form.loyerMensuel} onChange={(v) => update("loyerMensuel", v)} />
            </Field>

            <Field label="Vacance locative (%)">
              <NumberInput value={form.vacancePct} onChange={(v) => update("vacancePct", v)} />
            </Field>

            <Field label="Charges non récupérables (€/mois)">
              <NumberInput
                value={form.chargesNonRecupMensuelles}
                onChange={(v) => update("chargesNonRecupMensuelles", v)}
              />
            </Field>

            <Field label="Taxe foncière (€/an)">
              <NumberInput value={form.taxeFonciereAnnuelle} onChange={(v) => update("taxeFonciereAnnuelle", v)} />
            </Field>

            <Field label="Assurance PNO (€/an)">
              <NumberInput value={form.assuranceAnnuelle} onChange={(v) => update("assuranceAnnuelle", v)} />
            </Field>

            <Field label="Autres charges (€/an)">
              <NumberInput value={form.autresChargesAnnuelles} onChange={(v) => update("autresChargesAnnuelles", v)} />
            </Field>

            <Field label="Mensualité crédit (€/mois)">
              <NumberInput value={form.mensualiteCredit} onChange={(v) => update("mensualiteCredit", v)} />
            </Field>
          </div>

          <div className="mt-4 flex gap-2 justify-center">
            <button className="btn" onClick={() => setForm(defaultForm)} title="Réinitialiser">Réinitialiser</button>
            <button
              className="btn"
              onClick={() => navigator.clipboard.writeText(JSON.stringify(form, null, 2))}
              title="Copier les paramètres"
            >
              Copier
            </button>
          </div>
        </section>

        {/* Résultats */}
        <section className="card">
          <h2 className="text-lg font-medium mb-4 text-center">Résultats</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Card title="Coût total du projet" subtitle="Prix + notaire + travaux" value={euro(results.coutTotal)} />
            <Card title="Frais de notaire" subtitle="Estimation" value={euro(results.fraisNotaire)} />
            <Card title="Loyers annuels (bruts)" value={euro(results.loyersAnnuelsBruts)} />
            <Card title="Loyers annuels (après vacance)" value={euro(results.loyersAnnuelsNetsVacance)} />
            <Card title="Charges annuelles" value={euro(results.chargesAnnuelles)} />
            <Card title="Cash-flow mensuel (avant impôts)" value={euro(results.cashflowMensuelAvantImpots)} highlight />
            <Card title="Rentabilité brute" value={pct(results.rentabBrute)} />
            <Card title="Rentabilité nette (avant impôts)" value={pct(results.rentabNette)} />
          </div>

          <div className="mt-6 text-sm text-gray-600 space-y-1">
            <p><strong>Formules :</strong></p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Rentabilité brute = (Loyer mensuel × 12) / (Prix + frais de notaire + travaux) × 100</li>
              <li>Nette (avant impôts) = (Loyers annuels × (1 − vacance) − charges annuelles) / Coût total × 100</li>
              <li>Cash-flow mensuel (avant impôts) = (Loyers après vacance − charges) / 12 − mensualité crédit</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
