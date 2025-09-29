import { useEffect, useMemo, useState } from "react";
import Field from "../Components/Field";
import NumberInput from "../Components/NumberInput";
import Card from "../Components/Card";
import { computeCredit, computeProjectCost, computeResults } from "../Lib/Calculs";
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

  const { coutTotal } = useMemo(
    () => computeProjectCost(form),
    [form.prixAchat, form.fraisNotairePct, form.travaux]
  );
  // Crédit calculé sur loanAmount (si 0 → coutTotal), durée variable
  const credit = useMemo(() => {
    const amount = form.loanAmount > 0 ? form.loanAmount : coutTotal;
    return computeCredit(amount, form.loanRatePct, form.loanYears);
  }, [form.loanAmount, form.loanRatePct, form.loanYears, coutTotal]);

  // On injecte la mensualité
  const results = useMemo(() => {
    const withCredit: FormValues = { ...form, mensualiteCredit: credit.monthlyPayment };
    return computeResults(withCredit);
  }, [form, credit.monthlyPayment]);

  const cashflowAnnuelApresCredit = results.cashflowMensuelAvantImpots * 12;
  const cfMensuelPos = results.cashflowMensuelAvantImpots >= 0;
  const cfAnnuelPos = cashflowAnnuelApresCredit >= 0;

  return (
    <div className="mx-auto max-w-5xl px-4 py-8">
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Formulaire */}
        <section className="card">
          <h2 className="mb-4 text-center text-lg font-medium">Paramètres — SCI</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {/* Projet */}
            <Field label="Prix d'achat (€)">
              <NumberInput value={form.prixAchat} onChange={(v) => update("prixAchat", v)} />
            </Field>
            <Field label="Frais de notaire (%)">
              <NumberInput
                value={form.fraisNotairePct}
                onChange={(v) => update("fraisNotairePct", v)}
              />
            </Field>
            <Field label="Travaux (€)">
              <NumberInput value={form.travaux} onChange={(v) => update("travaux", v)} />
            </Field>

            {/* Exploitation */}
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
              <NumberInput
                value={form.taxeFonciereAnnuelle}
                onChange={(v) => update("taxeFonciereAnnuelle", v)}
              />
            </Field>
            <Field label="Assurance PNO (€/an)">
              <div className="flex items-center gap-2">
                <NumberInput
                  value={form.assuranceAnnuelle}
                  onChange={(v) => update("assuranceAnnuelle", v)}
                />
                <span
                  className="cursor-help text-xs text-gray-500"
                  title="Assurance Propriétaire Non Occupant : obligatoire pour un bien loué, couvre les dégâts (eau, incendie) même si le logement est vide ou si le locataire est mal assuré."
                >
                  ℹ️
                </span>
              </div>
            </Field>

            <Field label="Autres charges (€/an)">
              <NumberInput
                value={form.autresChargesAnnuelles}
                onChange={(v) => update("autresChargesAnnuelles", v)}
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

          <div className="mt-4 flex justify-center gap-2">
            <button className="btn" onClick={() => setForm(defaultForm)} title="Réinitialiser">
              Réinitialiser
            </button>
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
          <h2 className="mb-4 text-center text-lg font-medium">Résultats</h2>

          {/** helpers pour couleurs */}
          {(() => {
            const cashflowAnnuelApresCredit = results.cashflowMensuelAvantImpots * 12;
            const cfMensuelPos = results.cashflowMensuelAvantImpots >= 0;
            const cfAnnuelPos = cashflowAnnuelApresCredit >= 0;

            return (
              <div className="grid gap-4 sm:grid-cols-2">
                {/* Projet */}
                <Card
                  title="Coût total du projet"
                  subtitle="Prix + notaire + travaux"
                  value={euro(results.coutTotal)}
                />

                {/* Crédit */}
                <Card
                  title="Montant emprunté"
                  value={euro(
                    form.loanAmount && form.loanAmount > 0 ? form.loanAmount : results.coutTotal
                  )}
                />
                <Card
                  title={`Mensualité (${form.loanYears} ans)`}
                  value={euro(credit.monthlyPayment)}
                />
                <Card title="Annuité (12 × mensualité)" value={euro(credit.annualDebtService)} />
                <Card
                  title={`Intérêts totaux (${form.loanYears} ans)`}
                  value={euro(credit.totalInterest)}
                />
                <Card
                  title="Coût total du crédit"
                  subtitle="Intérêts + principal"
                  value={euro(credit.totalPaid)}
                />

                {/* Exploitation */}
                <Card title="Loyers annuels (bruts)" value={euro(results.loyersAnnuelsBruts)} />
                <Card
                  title="Loyers annuels (après vacance)"
                  value={euro(results.loyersAnnuelsNetsVacance)}
                />
                <Card title="Charges annuelles" value={euro(results.chargesAnnuelles)} />

                {/* Cash-flows colorés */}
                <Card
                  title="Cash-flow mensuel (après crédit)"
                  value={euro(results.cashflowMensuelAvantImpots)}
                  className={
                    cfMensuelPos
                      ? "border-emerald-200 bg-emerald-50 text-emerald-900"
                      : "border-red-200 bg-red-50 text-red-900"
                  }
                />
                <Card
                  title="Cash-flow annuel (après crédit)"
                  value={euro(cashflowAnnuelApresCredit)}
                  className={
                    cfAnnuelPos
                      ? "border-emerald-200 bg-emerald-50 text-emerald-900"
                      : "border-red-200 bg-red-50 text-red-900"
                  }
                />

                <Card title="Rentabilité brute" value={pct(results.rentabBrute)} />
                <Card title="Rentabilité nette (avant impôts)" value={pct(results.rentabNette)} />
              </div>
            );
          })()}

          <div className="mt-6 space-y-1 text-sm text-gray-600">
            <p>
              <strong>Formules clés :</strong>
            </p>
            <ul className="list-disc space-y-1 pl-5">
              <li>
                Mensualité = P × r / (1 − (1 + r)<sup>−n</sup>) (r = taux mensuel, n = nb
                mensualités)
              </li>
              <li>Annuité = 12 × mensualité</li>
              <li>Intérêts totaux = (mensualité × n) − P</li>
              <li>Cash-flow annuel = NOI − Annuité</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
