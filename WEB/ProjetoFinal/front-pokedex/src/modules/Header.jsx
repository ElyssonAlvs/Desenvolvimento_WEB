import * as C from '../styles/HeaderStyle.jsx';
import Logo from '../assets/image_2.webp';
import NavLinks from './NavLinks.jsx';

const Header = () => {
    return (
        <>
            <C.Header>
                <a href="/"><C.Img src={Logo} alt="Logo Pokemon" /></a>          
                <NavLinks />
            </C.Header>
        </>
    );
}

export default Header;