// src/tabs/Laundry.tsx
import { useEffect, useMemo, useState } from "react";
import Field from "../Components/Field";
import NumberInput from "../Components/NumberInput";
import Card from "../Components/Card";
import { euro, pct } from "../Utils/Format";
import { STORAGE_KEY } from "../State/DefaultForm";
import { LaundryForm } from "../Types/Index";
import { computeCredit } from "../Lib/Calculs";

const STORAGE_KEY_LAUNDRY = STORAGE_KEY + ":laundry";

// Valeurs par défaut réalistes pour un premier test
const defaultLaundryForm: LaundryForm = {
  openDays: 330,

  // Lave-linge
  nbWashers: 6,
  washerPrice: 3.5,
  washerCyclesPerDay: 5,
  washerWaterPerCycleCost: 0.5,
  washerElecPerCycleCost: 0.3,

  // Sèche-linge
  nbDryers: 3,
  dryerPrice: 2.5,
  dryerCyclesPerDay: 6,
  dryerElecPerCycleCost: 0.8,

  // Charges diverses
  otherChargesAnnual: 2000,
  annualRentToSci: 9600, // 800 €/mois

  // Crédit activité (machines, aménagements)
  loanAmount: 50000,
  loanRatePct: 3.5,
  loanYears: 7,
};

export default function Laundry() {
  const [form, setForm] = useState<LaundryForm>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY_LAUNDRY);
      const saved = raw ? (JSON.parse(raw) as Partial<LaundryForm>) : undefined;
      return saved ? { ...defaultLaundryForm, ...saved } : defaultLaundryForm;
    } catch {
      return defaultLaundryForm;
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY_LAUNDRY, JSON.stringify(form));
  }, [form]);

  const update = <K extends keyof LaundryForm>(key: K, value: LaundryForm[K]) =>
    setForm((f) => ({ ...f, [key]: value }));

  // === CALCULS ===
  const washerCyclesYear = form.nbWashers * form.washerCyclesPerDay * form.openDays;
  const dryerCyclesYear = form.nbDryers * form.dryerCyclesPerDay * form.openDays;

  const revenueWashers = washerCyclesYear * form.washerPrice;
  const revenueDryers = dryerCyclesYear * form.dryerPrice;
  const annualRevenue = revenueWashers + revenueDryers;

  const costWater = washerCyclesYear * form.washerWaterPerCycleCost; // uniquement lave-linge
  const costElec =
    washerCyclesYear * form.washerElecPerCycleCost + dryerCyclesYear * form.dryerElecPerCycleCost;

  const annualCharges = costWater + costElec + form.otherChargesAnnual + form.annualRentToSci;

  // Crédit (amortissement standard)
  const credit = useMemo(
    () => computeCredit(form.loanAmount, form.loanRatePct, form.loanYears),
    [form.loanAmount, form.loanRatePct, form.loanYears]
  );

  const ebitda = annualRevenue - annualCharges;
  const netCashflowAnnual = ebitda - credit.annualDebtService;

  // Quelques ratios utiles
  const ebitdaMarginPct = annualRevenue > 0 ? (ebitda / annualRevenue) * 100 : 0;
  const dscr = credit.annualDebtService > 0 ? ebitda / credit.annualDebtService : 0; // Debt Service Coverage Ratio

  const cfPos = netCashflowAnnual >= 0;

  // === UI ===
  return (
    <div className="mx-auto max-w-5xl px-4 py-8">
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Formulaire */}
        <section className="card">
          <h2 className="mb-4 text-center text-lg font-medium">Paramètres — Laverie</h2>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Field label="Jours d’ouverture/an">
              <NumberInput value={form.openDays} onChange={(v) => update("openDays", v)} />
            </Field>

            {/* Lave-linge */}
            <Field label="Nombre de lave-linge">
              <NumberInput value={form.nbWashers} onChange={(v) => update("nbWashers", v)} />
            </Field>
            <Field label="Prix cycle lave-linge (€)">
              <NumberInput value={form.washerPrice} onChange={(v) => update("washerPrice", v)} />
            </Field>
            <Field label="Cycles/jour/lave-linge">
              <NumberInput
                value={form.washerCyclesPerDay}
                onChange={(v) => update("washerCyclesPerDay", v)}
              />
            </Field>
            <Field label="Coût eau par cycle (LL) (€)">
              <NumberInput
                value={form.washerWaterPerCycleCost}
                onChange={(v) => update("washerWaterPerCycleCost", v)}
              />
            </Field>
            <Field label="Coût élec par cycle (LL) (€)">
              <NumberInput
                value={form.washerElecPerCycleCost}
                onChange={(v) => update("washerElecPerCycleCost", v)}
              />
            </Field>

            {/* Sèche-linge */}
            <Field label="Nombre de sèche-linge">
              <NumberInput value={form.nbDryers} onChange={(v) => update("nbDryers", v)} />
            </Field>
            <Field label="Prix cycle sèche-linge (€)">
              <NumberInput value={form.dryerPrice} onChange={(v) => update("dryerPrice", v)} />
            </Field>
            <Field label="Cycles/jour/sèche-linge">
              <NumberInput
                value={form.dryerCyclesPerDay}
                onChange={(v) => update("dryerCyclesPerDay", v)}
              />
            </Field>
            <Field label="Coût élec par cycle (SL) (€)">
              <NumberInput
                value={form.dryerElecPerCycleCost}
                onChange={(v) => update("dryerElecPerCycleCost", v)}
              />
            </Field>

            {/* Charges diverses */}
            <Field label="Autres charges (€/an)">
              <NumberInput
                value={form.otherChargesAnnual}
                onChange={(v) => update("otherChargesAnnual", v)}
              />
            </Field>
            <Field label="Loyer annuel payé à la SCI (€/an)">
              <NumberInput
                value={form.annualRentToSci}
                onChange={(v) => update("annualRentToSci", v)}
              />
            </Field>

            {/* Crédit */}
            <Field label="Montant du prêt (€)">
              <NumberInput value={form.loanAmount} onChange={(v) => update("loanAmount", v)} />
            </Field>
            <Field label="Durée du prêt (années)">
              <NumberInput value={form.loanYears} onChange={(v) => update("loanYears", v)} />
            </Field>
            <Field label="Taux du prêt (%)">
              <NumberInput value={form.loanRatePct} onChange={(v) => update("loanRatePct", v)} />
            </Field>
          </div>
        </section>

        {/* Résultats */}
        <section className="card">
          <h2 className="mb-4 text-center text-lg font-medium">Résultats</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {/* Revenus */}
            <Card title="CA lave-linge (annuel)" value={euro(revenueWashers)} />
            <Card title="CA sèche-linge (annuel)" value={euro(revenueDryers)} />
            <Card title="Chiffre d’affaires total (annuel)" value={euro(annualRevenue)} />

            {/* Charges */}
            <Card title="Coût eau (annuel)" value={euro(costWater)} />
            <Card title="Coût électricité (annuel)" value={euro(costElec)} />
            <Card title="Autres charges (annuel)" value={euro(form.otherChargesAnnual)} />
            <Card title="Loyer SCI (annuel)" value={euro(form.annualRentToSci)} />
            <Card title="Charges totales (annuel)" value={euro(annualCharges)} />

            {/* Exploitation */}
            <Card title="EBITDA (avant crédit)" value={euro(ebitda)} />
            <Card title="Marge EBITDA" value={pct(ebitdaMarginPct)} />

            {/* Crédit */}
            <Card title="Mensualité crédit" value={euro(credit.monthlyPayment)} />
            <Card title="Annuité crédit" value={euro(credit.annualDebtService)} />
            <Card title="Intérêts totaux" value={euro(credit.totalInterest)} />

            {/* Cashflow net */}
            <Card
              title="Cash-flow net (après crédit, annuel)"
              value={euro(netCashflowAnnual)}
              className={
                cfPos
                  ? "border-emerald-200 bg-emerald-50 text-emerald-900"
                  : "border-red-200 bg-red-50 text-red-900"
              }
            />

            {/* Ratio bancaire utile */}
            <Card title="DSCR (EBITDA / Annuité)" value={dscr.toFixed(2)} />
          </div>
        </section>
      </div>
    </div>
  );
}
