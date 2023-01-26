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
    padding:  ${(props: MainProps) => props.disablePadding ? "0" : "20px"};;
`

export default Main