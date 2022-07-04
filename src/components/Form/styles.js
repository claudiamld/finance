import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid #E9ECEF;
    border-radius: 4px;
    padding: 30px 20px;

    form{
        display: flex;
        flex-direction: column;
        max-width: 100%;


        input{
            background-color: #e5e5e5;
            padding: 12px 15px;
            font-size: 16px;
            border: none;
            border-radius: 8px;
            :focus{
              border: none;
              outline: 1px solid #868E96;
            }
        }

        label{
            color: #023047;
            font-weight: bold;
            margin-bottom: 5px;
        }

        span{
            color: #868E96;
            font-size: 14px;
            margin-left: 5px;
        }

        .valuebox{
            display: flex;
            margin: 15px 0px 30px 0px;
            max-width: 100%;

            div{
                display: flex;
                flex-direction: column;
                max-width: 50%;
                width: 50%;
            }

            input{
                max-width: 60%;
            }

            select{
                background-color: #e5e5e5;
                width: 80%;
                color: #868E96;
                border: none;
                padding: 12px 15px;
                border-radius: 8px;
                font-size: 16px;
                cursor: pointer;
                :focus{
                  outline: 1px solid #868E96;
                }
            }
        }
    }
`