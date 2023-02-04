import styled from "styled-components";

const Image360Container = styled.section`
    display: flex;
    margin-top: 20px;
    flex-direction: column;
    align-items: center;

    h5{
        display: flex;
        align-items:center;
        justify-content: center;
        text-align: center;
    }

    @media (max-width: 768px){
        div:last-child{
            margin-bottom: 100px;
        }
    }

    @media (min-width: 768px) {
        width: calc(100% - 300px);
        align-items: center;
        justify-content: center;
        margin-top: 50px;
        flex-direction: row;
        flex-wrap: wrap;
        align-content:start;


        h5{
            width: 100%;
        }
    
        div:first-of-type {
            width: 78%;
            height: 60vh;
            outline: none;
            border: none;  
        }
    }  
`
const Image360Box = styled.div`
    display: flex;
    width: 90%;
    flex-direction: column;
    margin: 15px 0 15px 0;
    border-radius: 5px;
   
    iframe{
        border-radius: 5px;  
        height: 65vw ;
    }

    a{
        text-decoration: none;
        color: #fff;
        line-height: 1.3;
        margin-top: 5px;
    }

    span{
        text-decoration: underline;
        font-style: italic;
    }
    
    @media (min-width: 768px) {
        width: 20vw;
        height: 20vw;
        padding: 10px;
        
        iframe{
            width: 100%;
            height: 100%;
            text-decoration: none;
        }
    }        
`

export { Image360Container, Image360Box }