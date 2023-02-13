import styled from "styled-components"

interface StackViewProps {
    width?: string
    height?: string
    justifyContent?: "center" | "space-around" | "space-between" | "flex-start" | "flex-end"
    alignItems?: "center" | "flex-start" | "flex-end"
    flexWrap?: "wrap" | "nowrap"
    margin?: string | number

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
    z-index: 1;
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    user-select: none;

 

    img{
       max-height: 70vh;
       max-width: 70vw; 
       object-fit: scale-down;
    }

    button {
        background: none;
        border: none;
        outline: none;
        cursor: pointer;
        color: white;
        font-size: 30px;
        margin: 10px;
    }
`
const Container = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;

  
  @media only screen and (min-width: 768px) {
      margin-top: 30px;
      margin-left: calc(5%);
      margin-right: calc(250px + 5%);
      width: calc(100% - (250px + 10%));
      max-width: 90%;
    }
`
const HStack = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: ${(props: StackViewProps) => props.flexWrap ? props.flexWrap : "nowrap"};
    width: ${(props: StackViewProps) => props.width ? props.width : "100%"};
    height: ${(props: StackViewProps) => props.height ? props.height : "auto"};
    align-items: ${(props: StackViewProps) => props.alignItems ? props.alignItems : "center"};
    justify-content: ${(props: StackViewProps) => props.justifyContent ? props.justifyContent : "center"};
    padding: 5px;
    margin: ${(props: StackViewProps) => props.margin ? props.margin : "0"};

`
const VStack = styled.div`
    display: flex;
    flex-direction: column;
    width: ${(props: StackViewProps) => props.width ? props.width : "auto"};
    height: ${(props: StackViewProps) => props.height ? props.height : "100%"};
    align-items: ${(props: StackViewProps) => props.alignItems ? props.alignItems : "center"};
    justify-content: ${(props: StackViewProps) => props.justifyContent ? props.justifyContent : "center"};
    padding: 5px;
    margin: ${(props: StackViewProps) => props.margin ? props.margin : "0"};
   
`
export { Background, Container, HStack, VStack }