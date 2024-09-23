import * as N from '../styles/NavLinksStyles.jsx';

const NavLinks = () => {
    return (
        <N.Nav>
            <N.Link href="/">Home</N.Link>
            <N.Link href="/pokedex">Pokemons</N.Link>
            <N.Link href="/about">Gerações</N.Link>
            <N.Link href="/about">Minha Pokedex</N.Link>
        </N.Nav>
    );
}

export default NavLinks;