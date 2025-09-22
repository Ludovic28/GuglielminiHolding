import { FormValues } from "../Types/Index";

export const defaultForm: FormValues = {
  prixAchat: 200000,
  fraisNotairePct: 7.5,
  travaux: 10000,
  loyerMensuel: 900,
  vacancePct: 5,
  chargesNonRecupMensuelles: 40,
  taxeFonciereAnnuelle: 900,
  assuranceAnnuelle: 120,
  autresChargesAnnuelles: 0,
  mensualiteCredit: 0
};

export const STORAGE_KEY = "immo-roi:form";
