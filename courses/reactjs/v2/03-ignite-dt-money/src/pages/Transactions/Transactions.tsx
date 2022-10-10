import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import {
  PriceHighligh,
  TransactionsContainer,
  TransactionsTable,
} from "./styles";

function Transactions() {
  return (
    <>
      <Header />
      <Summary />

      <TransactionsContainer>
        <TransactionsTable>
          <tbody>
            <tr>
              <td width="50%">Desenvolvimento de site</td>
              <td>
                <PriceHighligh variant="income">R$ 12.000,00</PriceHighligh>
              </td>
              <td>Venda</td>
              <td>10/10/2022</td>
            </tr>
            <tr>
              <td width="50%">Hamburguer</td>
              <td>
                <PriceHighligh variant="outcome">- R$ 59,00</PriceHighligh>
              </td>
              <td>Alimentação</td>
              <td>10/10/2022</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </>
  );
}

export { Transactions };
