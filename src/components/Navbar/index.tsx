import { Nav, NavLinks, NavLink, TextLogo} from "./styles"
import { useLocation } from "react-router-dom"
import translate from "../../utils/translate"

function Navbar() {
    const location = useLocation()
    const isActive = (path: string) => {
        const active = location.pathname === path
        return active.toString();
    }
    return (
        <Nav>
            <TextLogo translate="no">Fabio Peixoto <span>{translate("motto")}</span></TextLogo>
            <NavLinks>
                <NavLink to="/" active={isActive("/")}>{translate('home')}</NavLink>
                <NavLink to="/arq" active={isActive("/arq")}>{translate('architecture')}</NavLink>
                <NavLink to="/i360" active={isActive("/i360")}>{translate('Tour360')}</NavLink>
                <NavLink to="/art" active={isActive("/art")}>{translate('arts')}</NavLink>
                <NavLink to="/gas" active={isActive("/gas")}>{translate('cuisine')}</NavLink>
                <NavLink to="/eve" active={isActive("/eve")}>{translate('events')}</NavLink>
                <NavLink to="/ens" active={isActive("/ens")}>{translate('essays')}</NavLink>
                <NavLink to="/res" active={isActive("/res")}>{translate('restoration')}</NavLink>
                <NavLink to="/cli" active={isActive("/cli")}>{translate('clients')}</NavLink>
                <NavLink to="/sob" active={isActive("/sob")}>{translate('about')}</NavLink>
                <NavLink to="/con" active={isActive("/con")}>{translate('contact')}</NavLink>
            </NavLinks>
        </Nav>
    )
}

export default Navbar