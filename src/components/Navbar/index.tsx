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
                <NavLink 
                    to="/inicio" 
                    active={isActive("/inicio")}>
                        {translate('home')}
                </NavLink>
                <NavLink 
                    to="/arquitetura" 
                    active={isActive("/arquitetura")}>
                        {translate('architecture')}
                </NavLink>
                <NavLink 
                    to="/tour" 
                    active={isActive("/tour")}>
                        {translate('Tour360')}
                </NavLink>
                <NavLink 
                    to="/arte" 
                    active={isActive("/arte")}>
                        {translate('arts')}
                </NavLink>
                <NavLink 
                    to="/gastronomia" 
                    active={isActive("/gastronomia")}>
                        {translate('cuisine')}
                </NavLink>
                <NavLink 
                    to="/evento" 
                    active={isActive("/evento")}>
                        {translate('events')}
                </NavLink>
                <NavLink 
                    to="/ensaio" 
                    active={isActive("/ensaio")}>
                        {translate('essays')}
                </NavLink>
                <NavLink 
                    to="/restauracao" 
                    active={isActive("/restauracao")}>
                        {translate('restoration')}
                </NavLink>
                <NavLink 
                    to="/cliente" 
                    active={isActive("/cliente")}>
                        {translate('clients')}
                </NavLink>
                <NavLink 
                    to="/sobre" 
                    active={isActive("/sobre")}>
                        {translate('about')}
                </NavLink>
                <NavLink 
                    to="/" 
                    active={isActive("/contato")}>
                        {translate('contact')}
                </NavLink>
            </NavLinks>
        </Nav>
    )
}

export default Navbar