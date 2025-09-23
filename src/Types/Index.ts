export interface FormValues {
  // Projet
  prixAchat: number;
  fraisNotairePct: number; // %
  travaux: number;

  // Exploitation
  loyerMensuel: number;
  vacancePct: number; // %
  chargesNonRecupMensuelles: number;
  taxeFonciereAnnuelle: number;
  assuranceAnnuelle: number;
  autresChargesAnnuelles: number;

  // Crédit (nouveaux)
  loanAmount: number;     // 0 => auto: prend le coût total du projet
  loanRatePct: number;    // TAEG simplifié (intérêt nominal annuel %)
  loanYears: number;      // Durée en années

  // hérité (utilisé par computeResults pour faire le cashflow) — sera alimenté automatiquement
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

export interface CreditResults {
  monthlyPayment: number;
  annualDebtService: number;
  totalInterest: number;
  totalPaid: number; // intérêts + principal
}
