import styled from "styled-components"

const Button = styled.button`
    background-color: #ffdf0f;
    border: none;
    border-radius: 20px;
    color: #000000;
    cursor: pointer;
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    font-weight: 500;
    margin-bottom: 30px;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    transition: all 0.3s ease-in-out;
    width: 200px;
    position: fixed;
    bottom: 0;
    z-index: 2;
    
    :hover {
        background-color: #000000;
        color: #ffdf0f;
    }
    @media (min-width: 768px) {
        width: auto;
    }
`

export default Button