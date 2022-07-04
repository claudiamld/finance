import styled from "styled-components";

export const Container = styled.div`

    div{
      background-color: #F8F9FA;
      /* background-color: #c4c4c4; */
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      padding: 20px;
      border-radius: 4px;
      margin-bottom: 15px;
      :hover{
        background-color: #E9ECEF;
      }
    }

    h3{
        width: 60%;
        color: #023047;
    }
    p{
        width: 30%;
    }
    button{
      display: flex;
      justify-content: center;
      align-items: center;
      width: 2rem;
      height: 2rem;
      border: none;
      border-radius: 3px;
      background-color: #E9ECEF;
      :hover{
        background-color: #868E96;
      }
    }
    span{
        margin-top: 10px;
        color: #868E96;
    }
    .receive{
      border-left: 5px solid #03B898;
    }
    .withdraw{
      border-left: 5px solid #E9ECEF;
    }
`