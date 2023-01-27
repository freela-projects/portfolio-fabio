import styled from "styled-components"

const Text = styled.text`
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    font-weight: 500;
    text-align: center;
    margin: 0;
    padding: 0;
    width: 100%;

    @media (min-width: 768px) {
        max-width: 500px;
        margin-left: 10px;
        text-align: left;
    }
`

export default Text