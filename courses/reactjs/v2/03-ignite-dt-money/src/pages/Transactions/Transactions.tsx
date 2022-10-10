import { useContext, useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { TransactionsContext } from "../../contexts/TransactionsContext";
import { SearchForm } from "./components/SearchForm";
import {
  PriceHighligh,
  TransactionsContainer,
  TransactionsTable,
} from "./styles";

function Transactions() {
  const { transactions } = useContext(TransactionsContext);
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
