import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import {Button} from '../Button'
import { Container } from "./styles"

const Form = () => {
    const formSchema = yup.object().shape({
        description: yup.string().required("Campo obrigatório!"),
        value: yup.number().positive().integer().required("Campo obrigatório!"),
    })

    const {register, handleSubmit, formState: {errors}} = useForm({resolver: yupResolver(formSchema)})

    return(
        <Container>
            <form>
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
                            <option value="receive">Entrada</option>
                            <option value="withdraw">Saída</option>
                        </select>
                    </div>
                </div>
                <Button large>Inserir valor</Button>
            </form>
        </Container>
    )
}
export default Form