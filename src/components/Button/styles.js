import styled from 'styled-components'

export const Container = styled.button`
    background-color: ${(props) => (props.greySchema ? "#E9ECEF" : "#219ebc")};
    border: none;
    color: ${(props) => (props.greySchema ? "#343A40" : "#FFFFFF")};
    font-size: ${(props) => (props.large ? "18px" : "16px")};
    width: ${(props) => (props.large ? "20rem" : "5rem")};
    padding: 10px 0px;
    border-radius: 5px;
    :hover{
        background-color: ${(props) => (props.greySchema ? "#868E96" : "#457b9d")};
        color: ${(props) => (props.greySchema ? "#212529" : "#ffffff")};
    }
`