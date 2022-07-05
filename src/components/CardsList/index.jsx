import Card from '../Card'
import {Container} from './styles'
import { useContext } from 'react'
import { TransactionsContext } from '../../providers/Transactions/transactions'

const CardsList = ({balanceType}) => {
    const {transactions, receives, withdraws} = useContext(TransactionsContext)

    const renderCards = () => {
        if(balanceType === 'todos'){
            return(
                transactions.map((transaction, index) => (
                    <Card 
                        key={index}
                        id={transaction.id}
                        className={transaction.valueType === "Entrada" ? 'receive' : 'withdraw'}
                        description={transaction.description}
                        value={transaction.value}
                        valueType={transaction.valueType}
                    />
                ))
            )
        }
        if(balanceType === 'entrada'){
            return(
                receives.map((transaction, index) => (
                    <Card 
                        key={index}
                        id={transaction.id}
                        className={transaction.valueType === "Entrada" ? 'receive' : 'withdraw'}
                        description={transaction.description}
                        value={transaction.value}
                        valueType={transaction.valueType}
                    />
                ))
            )
        }
        if(balanceType === 'despesa'){
            return(
                withdraws.map((transaction, index) => (
                    <Card 
                        key={index}
                        id={transaction.id}
                        className={transaction.valueType === "Entrada" ? 'receive' : 'withdraw'}
                        description={transaction.description}
                        value={transaction.value}
                        valueType={transaction.valueType}
                    />
                ))
            )
        }
    }

    return(
        <Container>
            {renderCards()}
        </Container>
    )
}
export default CardsList