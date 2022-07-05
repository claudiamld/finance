import { createContext, useEffect, useState } from "react";

export const TransactionsContext = createContext([])

export const TransactionsProvider = ({children}) => {
    const [transactions, setTransactions] = useState([])
    const [receives, setReceives] = useState([])
    const [withdraws, setWithdraws] = useState([])
    const [total, setTotal] = useState(0)
    
    const addTransaction = (newTransaction) => {
        setTransactions([...transactions, newTransaction])

        if (newTransaction.valueType === 'Entrada'){
            setReceives([...receives, newTransaction])
        } else if(newTransaction.valueType === "Despesa"){
            setWithdraws([...withdraws, newTransaction])
        }
    }

    const deleteTransaction = (value) => {
        const newList = transactions.filter((transaction) => transaction.id !== value);
        setTransactions(newList)
    }

    const calculateTotal = () => {
        const positiveBalance = transactions.filter(transaction => transaction.valueType === 'Entrada').reduce((acc, currValue) => currValue.value + acc, 0)
        const negativeBalance = transactions.filter(transaction => transaction.valueType === 'Despesa').reduce((acc, currValue) => currValue.value + acc, 0)
        const result = positiveBalance - negativeBalance
        setTotal(result)
    }

    useEffect(() => {
        calculateTotal()
    }, [transactions])

    return(
        <TransactionsContext.Provider value={{addTransaction, calculateTotal, deleteTransaction, withdraws, receives, transactions, total}}>
            {children}
        </TransactionsContext.Provider>
    )
}