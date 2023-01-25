import styled from "styled-components"

const Container = styled.section`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    
    @media (min-width: 768px) {
    justify-content: flex-start;
    }
`

export default Container