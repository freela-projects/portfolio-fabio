import styled from "styled-components";

export const ContactFormContainer = styled.div`
   
    width: 100%;
    margin-top: 50px;

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
        }
    }

    .input.message{
           
        textarea{
            height: 105px;
            display: flex;
            justify-content: flex-start ;
            flex-wrap: wrap;
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





`