import { createContext, useEffect, useState } from "react";

export const TransactionsContext = createContext([])

export const TransactionsProvider = ({children}) => {
    const [transactions, setTransactions] = useState([])
    const [receives, setReceives] = useState([])
    const [withdraws, setWithdraws] = useState([])
    const [total, setTotal] = useState(0)
    
    const addTransaction = (newTransaction) => {
        setTransactions([...transactions, newTransaction])

        if (newTransaction.valueType === 'receive'){
            setReceives([...receives, newTransaction])
        } else if(newTransaction.valueType === "withdraw"){
            setWithdraws([...withdraws, newTransaction])
        }
    }

    const deleteTransaction = (value) => {
        const newArr = transactions.filter((transaction) => transaction.id !== value);
        setTransactions(newArr)
    }


    const calculateTotal = () => {
        const positive = transactions.filter(transaction => transaction.valueType === 'Entrada').reduce((acc, currValue) => currValue.value + acc, 0)
        const negative = transactions.filter(transaction => transaction.valueType === 'Despesa').reduce((acc, currValue) => currValue.value + acc, 0)
        const result = positive - negative
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





//STATES: 
    //1 - Entradas 
    //2 - Saídas
    //3 - Saldo