export interface FormValues {
  prixAchat: number;
  fraisNotairePct: number; // %
  travaux: number;
  loyerMensuel: number;
  vacancePct: number; // %
  chargesNonRecupMensuelles: number;
  taxeFonciereAnnuelle: number;
  assuranceAnnuelle: number;
  autresChargesAnnuelles: number;
  mensualiteCredit: number;
}

export interface Results {
  fraisNotaire: number;
  coutTotal: number;
  loyersAnnuelsBruts: number;
  loyersAnnuelsNetsVacance: number;
  chargesAnnuelles: number;
  rentabBrute: number; // %
  rentabNette: number; // %
  cashflowMensuelAvantImpots: number;
}
