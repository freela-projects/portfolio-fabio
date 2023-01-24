import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Nav = styled.nav`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    min-height: 80px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
    background-color: black;
    
  @media (min-width: 768px) {
    width: 250px;
    height: 100%;
    right: 80px;
    left: auto;
    padding-top: 20px;
    padding-right: 20px;
    padding-bottom: 80px;
    background-color: #00000029;
    justify-content: center;
    }
`;
const NavLinks = styled.ul`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    list-style: none;
    width: 100%;
    padding: 10px;

    @media (min-width: 768px) {
        align-items: flex-end;
        justify-content: space-evenly;
        flex-direction: column;
        height: 100%;
    }
`;
interface NavLinkProps {
    active?: string; // DOM elements can't have boolean attributes
}
const NavLink = styled(Link)`
    display: flex;
    align-items: center;
    text-decoration: none;
    margin: 5px;
    color: ${(props: NavLinkProps) => props.active === "true" ? "#ffdf0f" : "white"};
    font-weight: ${(props: NavLinkProps) => props.active === "true" ? "900" : "400"};

    :hover {
        color: #ffdf0f;
        transition: all 0.3s ease-in-out;
    }

    @media (min-width: 768px) {
        margin: 0;
        font-size: 1.5rem;
    }
`;
const TextLogo = styled.p`
    width: 250px;
    font-size: 1.5rem;
    font-weight: 900;
    margin: 0;
    padding-right: 30px;
    padding-top: 30px;
    text-align: right;

    @media (min-width: 768px) {
        padding-right: 0;
    }
`;

export { Nav, NavLinks, NavLink, TextLogo };