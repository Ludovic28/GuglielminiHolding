export interface FormValues {
  prixAchat: number;
  fraisNotairePct: number;
  travaux: number;

  loyerMensuel: number;
  vacancePct: number;
  chargesNonRecupMensuelles: number;
  taxeFonciereAnnuelle: number;
  assuranceAnnuelle: number;
  autresChargesAnnuelles: number;

  // Crédit
  loanAmount: number;   // montant du prêt
  loanRatePct: number;  // taux annuel
  loanYears: number;    // durée en années

  mensualiteCredit: number; // injecté automatiquement
}


export interface Results {
  fraisNotaire: number;
  coutTotal: number;
  loyersAnnuelsBruts: number;
  loyersAnnuelsNetsVacance: number;
  chargesAnnuelles: number;
  rentabBrute: number;
  rentabNette: number;
  cashflowMensuelAvantImpots: number;
}

export interface CreditResults {
  monthlyPayment: number;
  annualDebtService: number;
  totalInterest: number;
  totalPaid: number;
}
