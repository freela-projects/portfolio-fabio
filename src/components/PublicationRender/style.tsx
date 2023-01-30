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
            width: 30vw;   
            height: 39.6vw;
            padding: 5px;
        }
    }
`

export { PublicationContainer }