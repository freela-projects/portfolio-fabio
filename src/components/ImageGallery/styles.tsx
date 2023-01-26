import styled from "styled-components"

interface ImageProps {
    disableMargin?: boolean
}

interface StackViewProps {
    width?: string
    height?: string
    justifyContent?: "center" | "space-around" | "space-between" | "flex-start" | "flex-end"
    alignItems?: "center" | "flex-start" | "flex-end"
}

const Background = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    height: 100vh;
    width: 100%;
    z-index: 2;
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    user-select: none;

    img{
        transform: scale(0.8);
        @media (min-width: 768px) {
            transform: scale(2);
        }
    }
`

const Container = styled.section`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    
    @media (min-width: 768px) {
        max-width: 70%;
        margin-left: 80px;
        justify-content: flex-start;
    }

    img{
        width: 100%;
        object-fit: cover;
        margin: ${(props: ImageProps) => props.disableMargin ? "0" : "10px"};
     
        @media (min-width: 768px) {
            margin: 5px;
            max-width: 180px;
         }
    }
`
const HStack = styled.div`
    display: flex;
    flex-direction: row;
    width: ${(props: StackViewProps) => props.width ? props.width : "100%"};
    height: ${(props: StackViewProps) => props.height ? props.height : "auto"};
    align-items: ${(props: StackViewProps) => props.alignItems ? props.alignItems : "center"};
    justify-content: ${(props: StackViewProps) => props.justifyContent ? props.justifyContent : "center"};
    padding: 5px;
`

const VStack = styled.div`
    display: flex;
    flex-direction: column;
    width: ${(props: StackViewProps) => props.width ? props.width : "auto"};
    height: ${(props: StackViewProps) => props.height ? props.height : "100%"};
    align-items: ${(props: StackViewProps) => props.alignItems ? props.alignItems : "center"};
    justify-content: ${(props: StackViewProps) => props.justifyContent ? props.justifyContent : "center"};
    padding: 5px;
`

export { Background, Container, HStack, VStack }