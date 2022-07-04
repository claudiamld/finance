import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import {Button} from '../Button'
import { Container } from "./styles"
import { useContext } from 'react';
import { TransactionsContext } from '../../providers/Transactions/transactions';

const Form = () => {
    const {addTransaction, withdraws, receives, transactions} = useContext(TransactionsContext)

    const formSchema = yup.object().shape({
        description: yup.string().required("Campo obrigatório!"),
        value: yup.number().positive().integer().required("Campo obrigatório!"),
    })

    const {register, handleSubmit, formState: {errors}} = useForm({resolver: yupResolver(formSchema)})

    const createTransaction = ({description, value, valueType}) => {
        let id;
        transactions.length < 1 ? id = 1 : id = transactions.length + 1

        const transaction = {description, id, value, valueType}
        addTransaction(transaction)
        console.log(transaction);
    }

    return(
        <Container>
            <form onSubmit={handleSubmit(createTransaction)}>
                <label>Descrição</label>
                <input placeholder='Digite aqui sua descrição' {...register("description")} />
                <span>Ex.:Compra de roupas</span>
                <div className='valuebox'>
                    <div>
                        <label>Valor</label>
                        <input placeholder='R$' {...register("value")} />
                    </div>
                    <div>
                        <label>Tipo de valor</label>
                        <select {...register("valueType")}>
                            <option value="Entrada">Entrada</option>
                            <option value="Despesa">Despesa</option>
                        </select>
                    </div>
                </div>
                <Button type="submit" large>Inserir valor</Button>
            </form>
        </Container>
    )
}
export default Form