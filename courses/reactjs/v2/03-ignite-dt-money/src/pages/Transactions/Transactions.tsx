import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import {
  PriceHighligh,
  TransactionsContainer,
  TransactionsTable,
} from "./styles";

interface ITransactionDTO {
  id: number;
  description: string;
  type: "income" | "outcome";
  category: string;
  price: number;
  createAt: Date;
}

function Transactions() {
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
    <>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />
        <TransactionsTable>
          <tbody>
            {transactions.map(
              ({ id, type, description, category, price, createAt }) => (
                <tr key={id}>
                  <td width="50%">{description}</td>
                  <td>
                    <PriceHighligh variant={type}>{price}</PriceHighligh>
                  </td>
                  <td>{category}</td>
                  <td>{createAt}</td>
                </tr>
              )
            )}
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </>
  );
}

export { Transactions };
