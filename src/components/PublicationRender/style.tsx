import styled from "styled-components";

const PublicationContainer = styled.section`
    
    display: flex;
    align-items: center;
    flex-direction: column;
    
    h5{
        width: 95%;
        max-width: 800px;
        margin-top: 25px;
        margin-bottom: 10px;
        font-size: 16.5px;
        display: flex;
        align-items: flex-start;
    }

    div{
        
        width: 100%;
        line-height: 0;
        
        img{
            width: 33.33vw;   
            height: 38.64vw;
        }
    }

    @media (min-width: 768px) {
        width: calc(100% - 280px);
        margin-top: 15px;

        h5{
            font-size: 18px;
            margin-bottom: 15px;
        }

        img{
            height: 171.6px;
            max-width: 130px;
            max-height: 171.6px;
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

export { PublicationContainer }