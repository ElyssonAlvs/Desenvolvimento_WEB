import * as C from '../styles/HeaderStyle.jsx';
import Logo from '../assets/pokemon-symbol-logo-png-31.png';
import NavLinks from './NavLinks.jsx';

const Header = () => {
    return (
        <>
            <C.Header>
                <a href="/"><C.Img src={Logo} alt="Logo" /></a>          
                <NavLinks />
            </C.Header>
        </>
    );
}

export default Header;