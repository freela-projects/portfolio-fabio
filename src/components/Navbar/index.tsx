import { Nav, NavLinks, NavLink, TextLogo} from "./styles"
import { useLocation } from "react-router-dom"

function Navbar() {
    const location = useLocation()
    const isActive = (path: string) => {
        const active = location.pathname === path
        return active.toString();
    }
    return (
        <Nav>
            <TextLogo translate="no">Fabio Peixoto <span>Fotografia</span></TextLogo>
            <NavLinks>
                <NavLink to="/" active={isActive("/")}>Início</NavLink>
                <NavLink to="/arq" active={isActive("/arq")}>Arquitetura</NavLink>
                <NavLink to="/i360" active={isActive("/i360")}>Tour 360 graus</NavLink>
                <NavLink to="/art" active={isActive("/art")}>Obras de Arte</NavLink>
                <NavLink to="/gas" active={isActive("/gas")}>Gastronomia</NavLink>
                <NavLink to="/eve" active={isActive("/eve")}>Eventos</NavLink>
                <NavLink to="/ens" active={isActive("/ens")}>Ensaios</NavLink>
                <NavLink to="/res" active={isActive("/res")}>Restaurações</NavLink>
                <NavLink to="/cli" active={isActive("/cli")}>Clientes</NavLink>
                <NavLink to="/sob" active={isActive("/sob")}>Sobre</NavLink>
                <NavLink to="/con" active={isActive("/con")}>Contato</NavLink>
            </NavLinks>
        </Nav>
    )
}

export default Navbar