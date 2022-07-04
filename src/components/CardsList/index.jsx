import Card from '../Card'
import {Container} from './styles'
import { useContext } from 'react'
import { TransactionsContext } from '../../providers/Transactions/transactions'

const CardsList = () => {
    const {transactions} = useContext(TransactionsContext)

    return(
        <Container>
            {transactions.map((transaction, index) => (
                <Card 
                    key={index}
                    id={transaction.id}
                    className={transaction.valueType === "Entrada" ? 'receive' : 'withdraw'}
                    description={transaction.description}
                    value={transaction.value}
                    valueType={transaction.valueType}
                />
            ))}
        </Container>
    )
}
export default CardsList