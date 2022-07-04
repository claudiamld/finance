import { useHistory} from 'react-router-dom'
import ImageHome from '../../assets/image.svg'
import { Button } from '../../components/Button'
import { Container, LeftSide, Content, RightSide } from './styles'

const Home = () => {

    const history = useHistory()

    const handleNavigation = (path) => {
        return history.push(path)
    }

    return(
        <Container>
            <Content>
                <LeftSide>
                    <h1>Finance</h1>
                    <h2>Centralize o controle das suas finanças</h2>
                    <p>de forma rápida e segura</p>
                    <Button onClick={() => handleNavigation("/dashboard")} large>Iniciar</Button>
                </LeftSide>
                <RightSide>
                    <img src={ImageHome} alt="home-pic" />
                </RightSide>
            </Content>
        </Container>
    )
}
export default Home