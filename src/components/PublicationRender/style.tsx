import styled from "styled-components";

const PublicationContainer = styled.section`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    
    h5{
        margin-top: 35px;
        margin-bottom: 10px;
        font-size: 16.5px;
        width: 90%;
        display: flex;
        align-items: flex-start;
    }

    div{
        width: 90%;
        img{
            width: 27vw;   
            height: 35.64vw;
            margin: 5px;
            border: 1px solid #fff;
        }
    }

    @media (min-width: 768px) {
        width: calc(100% - 300px);
        margin-top: 15px;

        h5{
            font-size: 18px;
            margin-bottom: 15px;
        }

        img{
            max-width: 200px;
            max-height: 264px;
            border: 1px solid #fff;
        }
    }

`

export { PublicationContainer }