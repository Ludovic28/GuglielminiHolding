import { FormValues, Results } from "../Types/Index";

export const parseNum = (v: unknown): number => {
  if (v === "" || v === null || v === undefined) return 0;
  const n = Number(v);
  return Number.isFinite(n) ? n : 0;
};

export function computeResults(form: FormValues): Results {
  const prixAchat = parseNum(form.prixAchat);
  const fraisNotairePct = parseNum(form.fraisNotairePct) / 100;
  const travaux = parseNum(form.travaux);
  const loyerMensuel = parseNum(form.loyerMensuel);
  const vacancePct = parseNum(form.vacancePct) / 100;
  const chargesNonRecupMensuelles = parseNum(form.chargesNonRecupMensuelles);
  const taxeFonciereAnnuelle = parseNum(form.taxeFonciereAnnuelle);
  const assuranceAnnuelle = parseNum(form.assuranceAnnuelle);
  const autresChargesAnnuelles = parseNum(form.autresChargesAnnuelles);
  const mensualiteCredit = parseNum(form.mensualiteCredit);

  const fraisNotaire = prixAchat * fraisNotairePct;
  const coutTotal = prixAchat + fraisNotaire + travaux;

  const loyersAnnuelsBruts = loyerMensuel * 12;
  const loyersAnnuelsNetsVacance = loyersAnnuelsBruts * (1 - vacancePct);

  const chargesAnnuelles =
    taxeFonciereAnnuelle + assuranceAnnuelle + autresChargesAnnuelles + chargesNonRecupMensuelles * 12;

  const rentabBrute = (loyersAnnuelsBruts / Math.max(coutTotal, 1)) * 100;
  const rentabNette = ((loyersAnnuelsNetsVacance - chargesAnnuelles) / Math.max(coutTotal, 1)) * 100;

  const cashflowMensuelAvantImpots = (loyersAnnuelsNetsVacance - chargesAnnuelles) / 12 - mensualiteCredit;

  return {
    fraisNotaire,
    coutTotal,
    loyersAnnuelsBruts,
    loyersAnnuelsNetsVacance,
    chargesAnnuelles,
    rentabBrute,
    rentabNette,
    cashflowMensuelAvantImpots
  };
}
