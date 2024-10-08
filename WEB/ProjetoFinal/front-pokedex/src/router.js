import { createBrowserRouter } from "react-router-dom";

import Link from "./pages/Link";
import Home from "./pages/Home";
import Pokemon from "./pages/Pokemon";
import Pokedex from "./pages/Pokedex";
import Generations from "./pages/Generations";
import PokemonDetails from "./pages/PokemonDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Link />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "pokemons",
                element: <Pokemon />,
            },
            {
                path: "pokedex",
                element: <Pokedex />,
            },
            {
                path: "geracoes",
                element: <Generations />,
            },
            {
                path: "pokedex/:id/pokemon",
                element: <PokemonDetails/>,
            }
        ],
    },
]);

export default router;
