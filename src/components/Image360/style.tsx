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

    div:last-child{
        margin-bottom: 100px;
    }

    @media (min-width: 768px) {
        width: 77vw;
        align-items: center;
        justify-content: center;
        margin-top: 50px;
        flex-direction: row;
        flex-wrap: wrap;
        background-color: rebeccapurple;

        :first-of-type div {
            display: flex;
            flex-direction: column;
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

    a {
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
        
        

        .miniature{
            position: relative;
            overflow: hidden;
            max-width: 200;
            max-height: 230px;
            margin-left: 20px;
            padding: 5px;
            border: 1px #fff solid;
           
        }

        iframe{
            min-width: 85%;
            min-height: 85%;
            zoom: 0.2;
            outline: none;
            border:none

        }
        
    }
        
`

export { Image360Container, Image360Box }