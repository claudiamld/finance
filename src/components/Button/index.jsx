import { Container } from "./styles"

export const Button = ({children, type, onClick, large = false, greySchema = false, ...rest}) => {
    return(
        <Container large={large} greySchema={greySchema}>
            {children}
        </Container>
    )
}