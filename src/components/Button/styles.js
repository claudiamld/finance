import styled from 'styled-components'

export const Container = styled.button`
    background-color: ${(props) => (props.greySchema ? "#E9ECEF" : "#FD377E")};
    border: none;
    color: ${(props) => (props.greySchema ? "#343A40" : "#FFFFFF")};
    font-size: ${(props) => (props.large ? "16px" : "14px")};
    font-family: 'Nunito', sans-serif;
    font-weight: bold;
    width: ${(props) => (props.large ? "18rem" : "4rem")};
    padding: 10px 0px;
    border-radius: 5px;
`