import styled from "styled-components";

const ClientsContainer = styled.section`
   
    display: flex;
    align-items: center;
    flex-direction: column;
    
    h5{
        width: 95%;
        max-width: 800px;
        margin-bottom: 10px;
        margin-top: 20px;
        font-size: 16.5px;
        display: flex;
        align-items: flex-start;
    }

    div{
        width: 100%;
        line-height: 0;
        margin-bottom:70px;

        img{
            width: 33.333vw;
            
        }
    }

    
    @media (min-width: 768px) {
        
        width: calc(100% - 280px);
        margin-top: 50px;

        h5{
            font-size: 18px;
            margin-bottom: 15px;
        }

        img{
            
            height: 130px;
            max-width: 150px;

        }
        div{
            width: 100% ;
            max-width: 800px;
            display: flex;
            align-items: center;
            justify-content: baseline;
            flex-wrap: wrap;   
        }
    }
`

export { ClientsContainer };


