import styled from "styled-components";

const Image360Container = styled.section`
    display: flex;
    margin-top: 20px;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    z-index: 999;
  

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
            max-width: 800px;
            padding-left: 10px;
            align-items: center;
            justify-content: flex-start;
        }
    
        div:first-of-type {
            width: 100%;
            max-width: 800px;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            
            div:first-of-type{
                width: 100%;
                max-width: 780px;
                max-height: 500px;
                display: flex;
                justify-content: flex-start;
                flex-direction: row;
                margin-top: 0;
                margin-bottom: 20px;
                padding: 0;

                img{
                    width: 100%;
                    height: auto;
                    margin-top: 0;
                }
            }
        }
    }  
`
const Image360Box = styled.div`
    display: flex;
    width: 100vw;
    flex-direction: column;
    margin: 15px 0;
    border-radius: 5px;

    img{
        border-radius: 5px;  
    }
    
    a{
        text-decoration: none;
        color: #fff;
        line-height: 1.3;
        margin-top: 5px;
        margin-left: 5px;
    }

    span{
        text-decoration: underline;
        font-style: italic;
    }

    @media (min-width: 768px) {
        width: 25%;
        max-height: 150px;
        
        padding: 10px;
        margin-bottom: 70px;
        margin-left: 0;
        img{
            min-height: 70%;
            text-decoration: none;
        }
        a{
            min-height: 30%;
        }
    }
    
    @media (min-width: 1020px) {
        width: 25%;
        max-height: 200px;
        max-width: 200px;
        height: auto;
        margin-bottom: 35px;
        padding: 10px;
        
        img{
            min-height: 70%;
            text-decoration: none;
        }
        a{
            min-height: 30%;
            margin-left: 0;
        }
    }        
`
const Vizu = styled.section`
  
    display: flex;
    position: absolute;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    z-index: 999;
    background-color: rgba(255,255,255, 0.8) ;
    @keyframes load-page {
        0%{
            opacity: 0;
        }
        100%{
            opacity: 100;
        }
    } animation: load-page 0.5s;
    iframe{
        width: 100%;
        height: 100%;
        border: 0;
        z-index: 999;
        
    }
    &.disabled{
        display: none;
    }

    svg{
        z-index: 998;
        position: absolute;
    }

    p{
        position: absolute;
        right: 0;
        top: 0;
        padding: 10px 20px;
        margin:20px;
        background-color: rgb(53, 120, 95);
        border-radius: 5px;
        z-index: 999;
    }

`

export { Image360Container, Image360Box, Vizu}