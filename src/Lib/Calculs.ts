import { CreditResults, FormValues, Results } from "../Types/Index";

export const parseNum = (v: unknown): number => {
  if (v === "" || v === null || v === undefined) return 0;
  const n = Number(v);
  return Number.isFinite(n) ? n : 0;
};

/** Frais de notaire + coût total (prix + notaire + travaux) */
export function computeProjectCost(
  form: Pick<FormValues, "prixAchat" | "fraisNotairePct" | "travaux">
) {
  const prixAchat = parseNum(form.prixAchat);
  const fraisNotairePct = parseNum(form.fraisNotairePct) / 100;
  const travaux = parseNum(form.travaux);
  const fraisNotaire = prixAchat * fraisNotairePct;
  const coutTotal = prixAchat + fraisNotaire + travaux;
  return { fraisNotaire, coutTotal };
}

/** Calculs d'exploitation (NOI, rentas, cashflow mensuel) */
export function computeResults(form: FormValues): Results {
  const { coutTotal, fraisNotaire } = computeProjectCost(form);

  const loyerMensuel = parseNum(form.loyerMensuel);
  const vacancePct = parseNum(form.vacancePct) / 100;
  const chargesNonRecupMensuelles = parseNum(form.chargesNonRecupMensuelles);
  const taxeFonciereAnnuelle = parseNum(form.taxeFonciereAnnuelle);
  const assuranceAnnuelle = parseNum(form.assuranceAnnuelle);
  const autresChargesAnnuelles = parseNum(form.autresChargesAnnuelles);
  const mensualiteCredit = parseNum(form.mensualiteCredit);

  const loyersAnnuelsBruts = loyerMensuel * 12;
  const loyersAnnuelsNetsVacance = loyersAnnuelsBruts * (1 - vacancePct);

  const chargesAnnuelles =
    taxeFonciereAnnuelle +
    assuranceAnnuelle +
    autresChargesAnnuelles +
    chargesNonRecupMensuelles * 12;

  const rentabBrute = (loyersAnnuelsBruts / Math.max(coutTotal, 1)) * 100;
  const rentabNette =
    ((loyersAnnuelsNetsVacance - chargesAnnuelles) / Math.max(coutTotal, 1)) * 100;

  const cashflowMensuelAvantImpots =
    (loyersAnnuelsNetsVacance - chargesAnnuelles) / 12 - mensualiteCredit;

  return {
    fraisNotaire,
    coutTotal,
    loyersAnnuelsBruts,
    loyersAnnuelsNetsVacance,
    chargesAnnuelles,
    rentabBrute,
    rentabNette,
    cashflowMensuelAvantImpots,
  };
}

/** Amortissement (mensualité constante) */
export function computeCredit(
  loanAmount: number,
  loanRatePct: number,
  loanYears: number
): CreditResults {
  const P = Math.max(0, parseNum(loanAmount));
  const r = parseNum(loanRatePct) / 100 / 12; // taux mensuel
  const n = Math.max(1, Math.round(parseNum(loanYears) * 12)); // nb mensualités

  let monthlyPayment: number;
  if (r === 0) {
    monthlyPayment = P / n;
  } else {
    monthlyPayment = (P * r) / (1 - Math.pow(1 + r, -n));
  }

  const totalPaid = monthlyPayment * n;
  const totalInterest = Math.max(0, totalPaid - P);
  const annualDebtService = monthlyPayment * 12;

  return { monthlyPayment, annualDebtService, totalInterest, totalPaid };
}
