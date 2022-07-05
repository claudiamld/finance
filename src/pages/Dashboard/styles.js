import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 100vw;

    header{
        display: flex;
        justify-content: space-around;
        width: 100%;
        color: #219ebc;
        border-bottom: 1px solid #c5c5c5;
        box-shadow: 5px 0px 15px 1px rgba(0,0,0,0.52);
        padding: 20px 0px 20px 0px;

        h1{
            margin-right: 45rem;
        }
    }
`

export const Content = styled.div`
    width: 80%;
    display: flex;
    justify-content: space-between;
    margin-top: 3rem;

    .balance{
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin-top: 1rem;
        padding: 20px 0px;
        border: 1px solid #E9ECEF;
        border-radius: 4px;

        h3{
            color: #023047;
            margin-bottom: 5px;
        }

        h4{
            font-size: 1.3rem;
            color: #219ebc;
        }
        span{
            color: #868E96;
        }
    }
`

export const CardsListContent = styled.div`
    width: 60%;
    .emptyList{
        h2{
            margin-bottom: 20px;
            color: #555b6e;
        }
    }
`

export const TransactionNavigation = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40px;

    h3{
        color: #023047;
    }

    div{
        width: 40%;
        display: flex;
        justify-content: space-between;
    }
`