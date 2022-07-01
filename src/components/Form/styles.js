import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 30%;
    border: 1px solid #E9ECEF;
    border-radius: 4px;
    margin-top: 20px;

    form{
        display: flex;
        flex-direction: column;
        padding: 30px 20px;

        input{
            background-color: #e5e5e5;
            border: none;
            border-radius: 8px;
            padding: 12px 15px;
            font-size: 16px;
            :focus{
              border: none;
              outline: 1px solid #868E96;
            }
        }

        label{
            color: #495057;
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

            div{
                display: flex;
                flex-direction: column;
            }

            input{
                max-width: 50%;
            }

            select{
                background-color: #e5e5e5;
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