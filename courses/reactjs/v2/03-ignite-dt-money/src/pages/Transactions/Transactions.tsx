import { useContextSelector } from 'use-context-selector'
import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'
import { TransactionsContext } from '../../contexts/TransactionsContext'
import { dateFormatter, priceFormatter } from '../../utils/formatter'
import { SearchForm } from './components/SearchForm'
import {
  PriceHighligh,
  TransactionsContainer,
  TransactionsTable,
} from './styles'

function Transactions() {
  const transactions = useContextSelector(TransactionsContext, (context) => {
    return context.transactions
  })
  return (
    <>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />
        <TransactionsTable>
          <tbody>
            {transactions.map(
              ({ id, type, description, category, price, createdAt }) => (
                <tr key={id}>
                  <td width="50%">{description}</td>
                  <td>
                    <PriceHighligh variant={type}>
                      {type === 'outcome' && `- `}
                      {priceFormatter.format(price)}
                    </PriceHighligh>
                  </td>
                  <td>{category}</td>
                  <td>{dateFormatter.format(new Date(createdAt))}</td>
                </tr>
              ),
            )}
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </>
  )
}

export { Transactions }
