interface MovementsDTO {
  id: string;
  payerReceiverName: string;
  transactionValue: number;
  isCashIn: boolean;
  transactionDate: Date;
  balanceAfterTransaction: number;
  transactionType: string;
}

export default MovementsDTO;
