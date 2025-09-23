import { FormValues } from "../Types/Index";

export const defaultForm: FormValues = {
  // Projet
  prixAchat: 200000,
  fraisNotairePct: 7.5,
  travaux: 10000,

  // Exploitation
  loyerMensuel: 900,
  vacancePct: 5,
  chargesNonRecupMensuelles: 40,
  taxeFonciereAnnuelle: 900,
  assuranceAnnuelle: 120,
  autresChargesAnnuelles: 0,

  // Crédit
  loanAmount: 0,     // 0 => utilisera automatiquement le coût total
  loanRatePct: 3.5,  // %
  loanYears: 20,

  // alimenté automatiquement (ne pas éditer à la main)
  mensualiteCredit: 0,
};

export const STORAGE_KEY = "immo-roi:form";
