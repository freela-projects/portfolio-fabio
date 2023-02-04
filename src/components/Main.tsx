import styled from "styled-components"

interface MainProps {
    disablePadding?: boolean
}

const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
    height: 100vh;
    padding:  ${(props: MainProps) => props.disablePadding ? "0" : "20px"};
    

    
    ::-webkit-scrollbar {
    width: 5px;               /* width of the entire scrollbar */
    }

    ::-webkit-scrollbar-track {
    background: #000;        /* color of the tracking area */
    }

    ::-webkit-scrollbar-thumb {
    background-color: rgb(53, 120, 95);    /* color of the scroll thumb */
       /* roundness of the scroll thumb */
   
    }
    overflow-x: hidden;
    
`

export default Main