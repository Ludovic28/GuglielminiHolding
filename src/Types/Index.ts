// --- types existants pour la partie SCI ---
export interface FormValues {
  // Projet
  prixAchat: number;
  fraisNotairePct: number;
  travaux: number;

  // Exploitation
  loyerMensuel: number;
  vacancePct: number;
  chargesNonRecupMensuelles: number;
  taxeFonciereAnnuelle: number;
  assuranceAnnuelle: number;
  autresChargesAnnuelles: number;

  // Crédit (SCI)
  loanAmount: number; // si 0, on peut utiliser coutTotal
  loanRatePct: number; // %
  loanYears: number; // années
  mensualiteCredit: number; // injecté par le calcul
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

// --- NOUVEAU : modèle dédié à la Laverie ---
export interface LaundryForm {
  // Jours d'ouverture
  openDays: number;

  // Lave-linge
  nbWashers: number;
  washerPrice: number; // € / cycle
  washerCyclesPerDay: number; // cycles / jour / machine
  washerWaterPerCycleCost: number; // € / cycle
  washerElecPerCycleCost: number; // € / cycle

  // Sèche-linge
  nbDryers: number;
  dryerPrice: number; // € / cycle
  dryerCyclesPerDay: number; // cycles / jour / machine
  dryerElecPerCycleCost: number; // € / cycle (pas d'eau)

  // Autres charges
  otherChargesAnnual: number; // entretien, assurances, compta, TPE...
  annualRentToSci: number; // loyer payé à la SCI (€/an)

  // Crédit (activité)
  loanAmount: number;
  loanRatePct: number; // %
  loanYears: number; // années
}
