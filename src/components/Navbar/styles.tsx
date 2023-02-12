import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Nav = styled.nav`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    align-items: center;
    position: relative;
    width: 100%;
    height: 200px;
    background-color: #000000ad;
    z-index: 2;

  @media (min-width: 768px) {
      position: fixed;
      top: 0;
      left: auto;
      right: 80px;
      z-index: 1;
      width: 250px;
      height: 100%;
      padding-top: 20px;
      padding-right: 10px;
      padding-bottom: 80px;
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
    color: ${(props: NavLinkProps) => props.active === "true" ? "rgb(53, 120, 95)" : "white"};
    
    @media (min-width: 768px) {
        margin: 0;
        font-size: 1.2rem;
        font-weight: ${(props: NavLinkProps) => props.active === "true" ? "600" : "400"};
        :hover {
            color: "rgb(53, 120, 95)";
            transition: all 0.3s ease-in-out;
        }
    }
`;
const TextLogo = styled.p`
    width: 250px;
    font-size: 1.7rem;
    margin: 0;
    padding-right: 30px;
    padding-top: 30px;
    text-align: right;

    span{
        font-weight: 700;
        font-size: 1.2rem;
    }

    @media (min-width: 768px) {
        padding-right: 0;
        font-size: 2rem;
    }
`;

export { Nav, NavLinks, NavLink, TextLogo };