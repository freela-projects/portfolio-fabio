import styled from 'styled-components'

const Body = styled.div`
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    p{
        font-size: 1.2rem;
        font-weight: 600;
        text-align: center;
        margin-bottom: 20px;
    }
    `

const Button = styled.button`
    background-color: #4fa94d;
    border: none;
    border-radius: 5px;
    color: white;
    cursor: pointer;
    font-size: 1.2rem;
    font-weight: 600;
    padding: 10px 20px;
    transition: all 0.2s ease-in-out;
    `

export { Body, Button }