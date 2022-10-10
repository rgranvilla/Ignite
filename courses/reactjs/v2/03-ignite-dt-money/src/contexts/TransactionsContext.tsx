import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../lib/axios";

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
  fetchTransactions: (query?: string) => Promise<void>;
}

interface TransactionsProviderProps {
  children: ReactNode;
}

export const TransactionsContext = createContext({} as TransactionsContextType);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<ITransactionDTO[]>([]);

  async function fetchTransactions(query?: string) {
    const response = await api.get("transactions", {
      params: {
        q: query,
      },
    });

    setTransactions(response.data);
  }

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <TransactionsContext.Provider value={{ transactions, fetchTransactions }}>
      {children}
    </TransactionsContext.Provider>
  );
}
