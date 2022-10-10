import { createContext, ReactNode, useEffect, useState } from "react";

interface ITransactionDTO {
  id: number;
  description: string;
  type: "income" | "outcome";
  category: string;
  price: number;
  createAt: Date;
}

interface TransactionsContextType {
  transactions: ITransactionDTO[];
}

interface TransactionsProviderProps {
  children: ReactNode;
}

export const TransactionsContext = createContext({} as TransactionsContextType);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<ITransactionDTO[]>([]);

  async function loadTransaction() {
    const response = await fetch("http://localhost:3333/transactions");
    const data = await response.json();

    setTransactions(data);
  }

  useEffect(() => {
    loadTransaction();
  }, []);

  return (
    <TransactionsContext.Provider value={{ transactions }}>
      {children}
    </TransactionsContext.Provider>
  );
}
