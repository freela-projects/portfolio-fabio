import styled from "styled-components"

interface ImageProps {
    disableMargin?: boolean
}

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
    z-index: 2;
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    user-select: none;

    img{
        transform: scale(0.3);
        @media (min-width: 768px) {
            transform: scale(0.5);
        }
    }
`

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 10%;

  @media only screen and (min-width: 768px) {
      margin: 30px 20px 0 20px;
      width: 95%;
    }
`
const Box = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: space-around;
 
 @media only screen and (min-width: 768px) {
    flex-direction: row;    
    margin-right: 280px;
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

const Images = styled.div`
  display: flex;
  flex-direction: column;
  
  img{
    width: 100%;
    padding: 5px;
    border-radius: 5px;
  }
`

export { Background, Container, Box, HStack, VStack, Images }