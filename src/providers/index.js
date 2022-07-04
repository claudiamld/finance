import {TransactionsProvider} from './Transactions/transactions'

const Providers = ({children}) => {
    return(
        <TransactionsProvider>
            {children}
        </TransactionsProvider>
    )
}
export default Providers