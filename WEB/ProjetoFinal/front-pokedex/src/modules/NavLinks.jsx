import * as N from '../styles/NavLinksStyles.jsx';

const NavLinks = () => {
    return (
        <N.Nav>
            <N.Link href="/">Home</N.Link>
            <N.Link href="/pokemons">Pokémons</N.Link>
            <N.Link href="/generations">Gerações</N.Link>
            <N.Link href="/mypokedex">Minha Pokedex</N.Link>
        </N.Nav>
    );
}

export default NavLinks;