# Explicação

Na questão, é explorado como usar o contexto em React para passar dados entre componentes em uma árvore de componentes, usando como exemplo a exibição de imagens de Pokémons.

## **1. MyContext.js**

```javascript
import { createContext } from "react";

const PokemonContexto = createContext("");

export default PokemonContexto;
```

- Neste arquivo, estamos criando um contexto React chamado `PokemonContexto`, usando a função `createContext()`. O valor inicial do contexto é uma string vazia.

## **2. ComponenteAvo.js**

```javascript
import React from 'react';
import ComponenteNeto from "./ComponenteNeto";
import PokemonContexto from "./MyContext";

const ComponenteAvo = () => {
    const numero = 1;

    return (
        <PokemonContexto.Provider value={numero}>
            <div>
                <h1>Componente Avô</h1>
                <img 
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numero}.png`}
                    width="480px"
                    alt={`Pokemon número ${numero}`}
                />
                <ComponenteNeto/>
            </div>
        </PokemonContexto.Provider>
    );
};

export default ComponenteAvo;
```

- Este componente é o componente mais alto na árvore de componentes e ele define o contexto `PokemonContexto.Provider`. Ele fornece o valor `numero` como contexto para seus componentes filhos.

## **3. ComponenteNeto.js**

```javascript
import React, { useContext } from 'react';
import ComponenteFilho from "./ComponenteFilho";
import PokemonContexto from "./MyContext";

const ComponenteNeto = () => {
    const numero = useContext(PokemonContexto);

    return (
        <div>
            <h1>Componente Neto</h1>
            <img 
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numero+1}.png`}
                width="480px"
                alt={`Pokemon número ${numero}`}
            />
            <ComponenteFilho />
        </div>
    );
};

export default ComponenteNeto;
```

- Este componente utiliza o hook `useContext` para consumir o contexto `PokemonContexto`. Ele exibe uma imagem de Pokémon com base no número fornecido pelo contexto e renderiza o componente filho `ComponenteFilho`.

## **4. ComponenteFilho.js**

```javascript
import React, { useContext } from 'react';
import PokemonContexto from "./MyContext";

const ComponenteFilho = () => {
    const numero = useContext(PokemonContexto);

    return(
        <div>
            <h1>Componente Filho</h1>
            <img 
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numero+2}.png`}
                width="480px"
                alt={`Pokemon número ${numero}`}
            />
        </div>
    );
};

export default ComponenteFilho;
```

- Este componente também consome o contexto `PokemonContexto` usando o hook `useContext`. Ele exibe uma imagem de Pokémon com base no número fornecido pelo contexto, aumentado em 2.

## **Resumo:**

- O contexto `PokemonContexto` é usado para passar o número do Pokémon entre os componentes `ComponenteAvo`, `ComponenteNeto` e `ComponenteFilho`.
- `ComponenteAvo` é o componente mais alto na árvore de componentes e fornece o valor do número do Pokémon para seus componentes filhos.
- `ComponenteNeto` e `ComponenteFilho` consomem o contexto `PokemonContexto` usando o hook `useContext` para acessar o número do Pokémon fornecido pelo componente avô.

---
