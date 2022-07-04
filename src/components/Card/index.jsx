import { Container } from "./styles"
import {FaTrash} from 'react-icons/fa'
import { useContext } from "react"
import { TransactionsContext } from "../../providers/Transactions/transactions"

const Card = ({description, id, value, valueType, className}) => {
    const {deleteTransaction} = useContext(TransactionsContext)

    return(
        <Container>
            <div className={className}>
                <h3>{description}</h3>
                <p>R$ {value},00</p>
                <button onClick={() => deleteTransaction(id)}><FaTrash size={20} /></button>
                <span>{valueType}</span>
            </div>
        </Container>
    )
}
export default Card