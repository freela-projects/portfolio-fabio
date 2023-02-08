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
    
    @media (min-width: 768px) {
        &::-webkit-scrollbar {
            width: 5px;
            background: #000;
        }
    
        &::-webkit-scrollbar-track {
            background-color:  #000; 
        }
    
        &::-webkit-scrollbar-thumb {
            background-color: rgb(53, 120, 95);
        }
        overflow: scroll;
        overflow-x: hidden;
        
    }
    
`

export default Main