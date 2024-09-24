import "bootstrap/dist/css/bootstrap.css";
import "../css/App.css";
import { Link } from "react-router-dom";
import pokemonImage from "../assets/International_Pokémon_logo.svg.png";
import PokemonCard from "../components/PokemonCard";
import axios from "axios";
import { useEffect, useState } from "react";


const Pokemon = () => {

    const [pokemons, setPokemons] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [typeFilter, setTypeFilter] = useState("");
    const [sortBy, setSortBy] = useState("");
    const [filteredPokemons, setFilteredPokemons] = useState([]);

    useEffect(() => {
        getPokemons();
    }, []);


    useEffect(() => {
        let filtered = pokemons;

        // Filtra os pokémons conforme o termo de busca muda
        if (searchTerm === "") {
            setFilteredPokemons(pokemons); // Exibe todos se a busca estiver vazia
        } else {
            const filtered = pokemons.filter((pokemon) =>
                pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredPokemons(filtered);
        }

        if (sortBy === "name") {
            filtered = [...filtered].sort((a, b) => a.name.localeCompare(b.name));
        } else if (sortBy === "life") {
            filtered = [...filtered].sort((a, b) => b.stats[0].base_stat - a.stats[0].base_stat);
        } else if (sortBy === "attack") {
            filtered = [...filtered].sort((a, b) => b.stats[1].base_stat - a.stats[1].base_stat);
        } else if (sortBy === "defense") {
            filtered = [...filtered].sort((a, b) => b.stats[2].base_stat - a.stats[2].base_stat);
        } else if (sortBy === "speed") {
            filtered = [...filtered].sort((a, b) => b.stats[5].base_stat - a.stats[5].base_stat);
        } else if (sortBy === "id") {
            filtered = [...filtered].sort((a, b) => a.id - b.id); // Reseta para o ID
        }

        // Atualiza o estado com a lista filtrada
        setFilteredPokemons(filtered);
    }, [searchTerm, pokemons, typeFilter, sortBy]);

    const getPokemons = () => {
        const endpoints = [];

        for (let i = 1; i < 200; i++) {
            endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
        }

        Promise.all(
            endpoints.map((endpoint) =>
                axios
                    .get(endpoint)
                    .then((res) => res.data)
                    .catch((err) => {
                        console.log(err);
                        return null;
                    })
            )
        ).then((results) => {
            const validPokemons = results.filter((result) => result !== null);
            setPokemons(validPokemons);
            setFilteredPokemons(validPokemons); // Inicializa com todos os pokémons
        });
    };

    return (
        <div
            className="background-container"
            style={{
                overflowY: "auto",
            }}
        >
            <nav
                className="navbar navbar-expand-xxl bg-body-tertiar"
                style={{
                    backgroundColor: "#222",
                    marginLeft: "320px",
                    marginRight: "320px",
                    padding: "10px",
                }}
                data-bs-theme="dark"
            >
                <div
                    className="container-fluid position-relative"
                    style={{
                        maxWidth: "1200px",
                        padding: "0",
                        marginLeft: "40px",
                        marginRight: "40px",
                    }}
                >
                    <a aria-current="page" href="http://localhost:3000">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/640px-International_Pok%C3%A9mon_logo.svg.png"
                            alt="Pokémon"
                            width="112"
                            height="41"
                        />
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link className="nav-link fs-5" to="/">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link fs-5" to="/pokemons">
                                    Pokémons
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link fs-5" to="#">
                                    Gerações
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link fs-5" to="#">
                                    Pokédex
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* ----- */}

            <div
                className="text-center"
                style={{
                    backgroundColor: "#B0B0B0",
                    paddingTop: "120px",
                    marginLeft: "320px",
                    marginRight: "320px",
                    overflow: "auto",
                    height: "93.4%",
                }}
            >
                <img
                    src={pokemonImage}
                    alt="Pokemon Logo"
                    style={{
                        height: "160px",
                    }}
                />
                <div
                    className="text-center form-group"
                    style={{
                        paddingTop: "40px",
                        paddingBottom: "40px",
                        marginLeft: "320px",
                        marginRight: "320px",
                    }}
                >
                    {/* Campo de busca */}
                    <input
                        type="text"
                        className="form-control"
                        id="searchInput"
                        placeholder="Pesquisar"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />

                    {/* Botões de Filtros */}
                    <div className="d-flex justify-content-center mb-3">
                        <div className="btn-group" role="group" aria-label="Filtros">
                            <button
                                type="button"
                                className={`btn btn-secondary ${sortBy === "id" ? "active" : ""}`}
                                onClick={() => setSortBy("id")}
                            >
                                ID
                            </button>
                            <button
                                type="button"
                                className={`btn btn-secondary ${sortBy === "nome" ? "active" : ""}`}
                                onClick={() => setSortBy("name")}
                            >
                                Nome
                            </button>
                            {/* Dropdown para Tipo */}
                            <div className="btn-group ms-2" role="group">
                                <button
                                    id="btnGroupDrop1"
                                    type="button"
                                    className="btn btn-secondary dropdown-toggle"
                                    data-bs-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                >
                                    Tipo: {typeFilter}
                                </button>
                                <div className="dropdown-menu" aria-labelledby="btnGroupDrop1">
                                    <a
                                        className="dropdown-item"
                                        href="#"
                                        onClick={() => setTypeFilter("Todos")}
                                    >
                                        Todos
                                    </a>
                                    <a
                                        className="dropdown-item"
                                        href="#"
                                        onClick={() => setTypeFilter("Normal")}
                                    >
                                        Normal
                                    </a>
                                    <a
                                        className="dropdown-item"
                                        href="#"
                                        onClick={() => setTypeFilter("Fogo")}
                                    >
                                        Fogo
                                    </a>
                                    <a
                                        className="dropdown-item"
                                        href="#"
                                        onClick={() => setTypeFilter("Água")}
                                    >
                                        Água
                                    </a>
                                </div>
                            </div>
                            <button
                                type="button"
                                className={`btn btn-secondary ${sortBy === "life" ? "active" : ""}`}
                                onClick={() => setSortBy("life")}
                            >
                                Vida
                            </button>
                            <button
                                type="button"
                                className={`btn btn-secondary ${sortBy === "attack" ? "active" : ""}`}
                                onClick={() => setSortBy("attack")}
                            >
                                Ataque
                            </button>
                            <button
                                type="button"
                                className={`btn btn-secondary ${sortBy === "speed" ? "active" : ""}`}
                                onClick={() => setSortBy("speed")}
                            >
                                Velocidade
                            </button>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        {filteredPokemons.map((pokemon, index) => (
                            <div className="col mb-3" key={index}>
                                <PokemonCard
                                    id={pokemon.id}
                                    name={pokemon.name}
                                    img={pokemon.sprites.front_default}
                                    life={pokemon.stats[0].base_stat}
                                    atk={pokemon.stats[1].base_stat}
                                    shild={pokemon.stats[2].base_stat}
                                    speed={pokemon.stats[5].base_stat}
                                    type={pokemon.types[0].type.name}
                                    type2={
                                        pokemon.types.length > 1 ? pokemon.types[1].type.name : null
                                    }
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pokemon;
