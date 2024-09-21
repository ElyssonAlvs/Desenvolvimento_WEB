import * as N from '../styles/NavLinksStyles.jsx';

const NavLinks = () => {
    return (
        <N.Nav>
            <N.Link href="/">Home</N.Link>
            <N.Link href="/pokedex">Pokedex</N.Link>
            <N.Link href="/about">About</N.Link>
        </N.Nav>
    );
}

export default NavLinks;