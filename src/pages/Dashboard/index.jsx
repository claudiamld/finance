import Form from "../../components/Form"
import CardsList from '../../components/CardsList'
import EmptyList from '../../assets/NoCard.png'
import { CardsListContent, Container, Content, TransactionNavigation } from "./styles"
import { Button } from "../../components/Button"
import { useHistory } from "react-router-dom"
import { useContext } from "react"
import { TransactionsContext } from "../../providers/Transactions/transactions"

const Dashboard = () => {
    const {transactions, total} = useContext(TransactionsContext)

    const history = useHistory()

    const handleNavigation = (path) => {
        return history.push(path)
    }

    return(
        <Container>
            <header>
                <h1>Finance</h1>
                <Button greySchema onClick={() => handleNavigation("/")}>Início</Button>
            </header>
            <Content>
              <div>
                <Form />
                <div className="balance">
                  <div>
                    <h3>Valor total:</h3>
                    <span>O valor se refere ao saldo</span>
                  </div>
                  <h4>R$ {total},00</h4>
                </div>
              </div>
                <CardsListContent>
                    <TransactionNavigation>
                      <h3>Resumo financeiro</h3>
                      <div>
                        <Button>Todos</Button>
                        <Button>Entradas</Button>
                        <Button>Despesas</Button>
                      </div>
                    </TransactionNavigation>
                    {transactions.length > 0 ? <CardsList /> : (
                      <div className="emptyList">
                        <h2>Você ainda não possui nenhum lançamento</h2>
                        <img src={EmptyList} alt="empty-list" />
                      </div>
                    )}
                </CardsListContent>
            </Content>
        </Container>
    )
}
export default Dashboard