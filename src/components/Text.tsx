import styled from "styled-components"

const Text = styled.text`
    display: flex;
    flex-direction: column;
    font-family: 'Roboto', sans-serif;
    font-size: medium;
    font-weight: 500;
    text-align: justify;
    text-justify: distribute-all-lines;

    h2{
        margin-top: 20px;
        margin-bottom: 20px;
    }

    p {
        margin-bottom: 20px;
    }

    li{
        margin-left: 20px;
    }

    @media (min-width: 768px) {
        justify-content: flex-start;
        min-width: 40%;
        max-width: 80%;
        height: 345px;

        h2{
            margin-top: 0;
        }
    }
`

export default Text