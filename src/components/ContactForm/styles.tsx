import styled from "styled-components";

export const ContactFormContainer = styled.div`
    width: 100%;
    margin-top: 30px;

    .social{
        display: flex;
        flex-direction: column;
        margin-top: 15px;

        svg{
            font-size: 25px;
            margin-top: 15px;
        }

        div{
            display: flex;
            flex-direction: row;
            align-items: flex-end;


            p{
                margin-left: 5px;
            }
        }
    }

    form{
        width: 100%;
        margin-top: 15px;      
    }

    .input{
        display: flex;
        flex-direction: column;
    
        input{
            border-radius: 5px;
            border: none;
            height: 35px;
            outline: none;
        }
    }

    .input.message {
        textarea{
            height: 105px;
            width: 100%;
            display: flex;
            justify-content: flex-start ;
            flex-wrap: wrap;
            outline: none;
        }
    }

    .button{
        display: flex;
        align-items: center;
        justify-content: end;
        margin-top: 10px;

        button{
            padding: 2px;
        }
    }

    @media (min-width: 768px) {
        padding-left: 100px;
        form{
           width: 50%;
           border: 1px solid white;
           border-radius: 5px;
           padding: 10px;
        }
    }

`