import styled from "styled-components";

const ClientsContainer = styled.section`
   
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 30px;
    
    h5{
        width: 90%;
    }

    div{
        display: flex;
        align-items: center;
        justify-content: center;
        
        div:first-child{
            width: 90%;
            display: flex;
            align-items: center;
            justify-content: start;
            flex-wrap: wrap;
        }
    }

    img{
        width: 30vw;
    }
    
    @media (min-width: 768px) {
        width: calc(100% - 300px);
        margin-top: 50px;

        h5{
            font-size: 18px;
            margin-bottom: 15px;

        }

        img{
            max-width: 150px;
        }
    }
`

export { ClientsContainer };


