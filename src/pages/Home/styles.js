// font-family: 'Nunito', sans-serif;
// font-family: 'Poppins', sans-serif;
// font-family: 'Tiro Devanagari Sanskrit', serif;

import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    justify-content: center;
    align-items: center;
    background-color: #212529;
`

export const Content = styled.div`
    display: flex;
    max-width: 90vw;
`

export const LeftSide = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 50%;

    h1{
        color: #FD377E;
        font-size: 26px;
        font-weight: bold;
    }
    h2{
        color: #ffffff;
        font-size: 40px;
        margin-top: 20px;
    }
    p{
        color: #ffffff;
        font-size: 18px;
        margin-bottom: 50px;
    }

    @media screen and (max-width: 1023px){
        width: 100vw;
        max-width: 100%;
        align-items: center;

        h2{
            text-align: center;
        }
    }
`

export const RightSide = styled.div`
    
    @media screen and (max-width: 1023px){
        display: none;
    }
`