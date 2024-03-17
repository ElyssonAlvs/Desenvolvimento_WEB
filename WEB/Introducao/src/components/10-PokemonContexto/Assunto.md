# Aplicativo React Pokémon

React simples que permite visualizar imagens de Pokémon e alterar o Pokémon exibido através de botões de incrementar e decrementar o ID do Pokémon.

## Estrutura do Projeto

O projeto é dividido em vários componentes:

- **PokemonPrincipal**: O componente principal que envolve todo o aplicativo. Ele fornece o contexto `PokemonContexto` para seus componentes filhos e define o estado inicial do ID do Pokémon.

- **PokemonContexto**: Define um contexto React chamado `PokemonContexto`, que é usado para passar informações do ID do Pokémon e funções para alterar esse ID para componentes filhos.

- **PokemonImagem**: Um componente que exibe a imagem do Pokémon com o ID atual, bem como botões para incrementar e decrementar o ID.

- **PokemonIncrementar**: Um componente de botão React que incrementa o ID do Pokémon quando clicado.

- **PokemonDecrementar**: Um componente de botão React que decrementa o ID do Pokémon quando clicado.

A seguir, os códigos e seus comentários:

### PokemonContext.js

```javascript
import { createContext } from "react";

// Cria o contexto para armazenar o ID do Pokémon e a função para alterá-lo
export const PokemonContexto = createContext(0);
```

### PokemonPrincipal.js

```javascript
import { useState } from "react";
import PokemonImagem from "./PokemonImagem";
import { PokemonContexto } from "./PokemonContext";

const PokemonPrincipal = () => {
    // Define o estado inicial do ID do Pokémon
    const [id, setId] = useState(250);

    return (
        <div>
           <h3>Pokemon!</h3>
           {/* Fornece o contexto com o ID do Pokémon e a função para alterá-lo */}
           <PokemonContexto.Provider value={ {id, setId} }>
                <PokemonImagem />
           </PokemonContexto.Provider>
        </div>
    );
}

export default PokemonPrincipal;
```

### PokemonImagem.js

```javascript
import { useContext } from "react";
import { PokemonContexto } from "./PokemonContext";
import PokemonDecrementar from "./PokemonDecrementar";
import PokemonIncrementar from "./PokemonIncrementar";

const PokemonImagem = () => {
    // Obtém o ID do Pokémon do contexto
    const {id} = useContext(PokemonContexto);
    const url = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

    return (
        <div>
            {/* Exibe a imagem do Pokémon com o ID atual */}
            <img 
                src={url + id + ".png"}
                alt="Pokemon"
                width={150}
            />
            {/* Componentes para incrementar e decrementar o ID do Pokémon */}
            <PokemonIncrementar />
            <PokemonDecrementar />
        </div>
    );
}

export default PokemonImagem;
```

### PokemonIncrementar.js e PokemonDecrementar.js

```javascript
import { useContext } from "react";
import { PokemonContexto } from "./PokemonContext";

// Componente de botão para incrementar o ID do Pokémon
const PokemonIncrementar = () => {
    const {setId} = useContext(PokemonContexto);

    return (
        <div>
            <button
                onClick={() => {
                    setId((anterior) => anterior + 1);
                }}
            >
                Incrementar
            </button>
        </div>
    );
}

export default PokemonIncrementar;
```

```javascript
import { useContext } from "react";
import { PokemonContexto } from "./PokemonContext";

// Componente de botão para decrementar o ID do Pokémon
const PokemonDecrementar = () => {
    const {setId} = useContext(PokemonContexto);

    return (
        <div>
            <button
                onClick={() => setId(a => a - 1)}
            >
                Decrementar
            </button>
        </div>
    );
}

export default PokemonDecrementar;
```
