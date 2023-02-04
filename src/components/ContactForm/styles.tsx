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
        width: calc(100% - 300px);
        display: flex;
        align-items: center;
        justify-content: center;
        

        form{
           width: 75%;
           border-top: 1px solid white;
           border-bottom: 1px solid white;

           padding: 10px;
        }
        
        .input.message{
            textarea{
                height: 200px;
            }
        }
        div:first-of-type{
            width: 100%;
            max-width: 800px;
            display: flex;
            flex-direction: column;
        }

        .social{
            display: flex;
            flex-wrap: wrap;

            div{
                flex-direction: row;
            }
        }
    }

`