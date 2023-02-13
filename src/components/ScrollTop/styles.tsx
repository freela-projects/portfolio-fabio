import styled from "styled-components"

const Button = styled.button`
    background-color: rgb(53, 120, 95);
    border: none;
    border-radius: 20px;
    color: #ffffff;
    cursor: pointer;
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    font-weight: 500;
    margin-bottom: 30px;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    transition: all 0.3s ease-in-out;
    width: 300px;
    position: fixed;
    bottom: 0;
    z-index: 2;
    
    @media (min-width: 768px) {
        width: auto;
        
        :hover {
        background-color: #000000;
        color: rgb(53, 120, 95);
    }
    }
`

export default Button