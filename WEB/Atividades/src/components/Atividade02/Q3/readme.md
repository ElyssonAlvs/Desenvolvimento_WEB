
# Explicação

Na questão, modifica-se um pouco a questão anterior, mas com
melhoria, um botão onde os sprites das imgens são carregados
a partit dele, mudando o estado.

## 1. MyContext.js

```javascript
import { createContext } from "react";

const PokemonContext = createContext("");

export default PokemonContext;
```

- Este arquivo exporta um contexto React chamado `PokemonContext` usando a função `createContext`. O contexto é inicializado com um valor vazio `""`.

## 2. ComponenteNeto.js

```javascript
import { useContext } from "react";
import ComponenteFilho from "./ComponenteFilho";
import PokemonContext from "./MyContext";

const ComponenteNeto = () => {
    const numero = useContext(PokemonContext);

    return (
        <div>
            <h1>Componente Neto</h1>
            <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numero+1}.png`}
                style={{ width: "400px" }}
                alt={`Pokemon número ${numero}`}
            />
            <ComponenteFilho />
        </div>
    );
};

export default ComponenteNeto;
```

- Este componente consome o contexto `PokemonContext` usando o hook `useContext`. Ele renderiza uma imagem de Pokémon com base no número recebido do contexto e também renderiza o componente filho `ComponenteFilho`.

## 3. ComponenteFilho.js

```javascript
import { useContext } from "react";
import PokemonContext from "./MyContext";

const ComponenteFilho = () => {
    const numero = useContext(PokemonContext);

    return (
        <div>
            <h1>Componente Filho</h1>
            <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numero+2}.png`}
                style={{ width: "400px" }}
                alt={`Pokemon número ${numero}`}
            />
        </div>
    );
};

export default ComponenteFilho;
```

- Este componente também consome o contexto `PokemonContext` e renderiza uma imagem de Pokémon com base no número recebido do contexto, adicionando 2 ao número.

## 4. ComponenteAvo.js

```javascript
import { useState } from "react";
import PokemonContext from "./MyContext";
import ComponenteNeto from "./ComponenteNeto";

const ComponenteAvo = () => {
    const [numero, setNumero] = useState(1);

    const acaoBotao = () => {
        setNumero(numero + 1);
    };

    return (
        <PokemonContext.Provider value={numero}>
            <div>
                <h1>Componente Avô</h1>
                <img 
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numero}.png`}
                    style={{ width: "400px" }}
                    alt={`Pokemon número ${numero}`}
                />
                <button onClick={acaoBotao}>
                    Aumentar Número
                </button>
                <ComponenteNeto />
            </div>
        </PokemonContext.Provider>
    );
};

export default ComponenteAvo;
```

- Este componente é o componente de nível superior que define o estado usando o hook `useState`. Ele também fornece o contexto `PokemonContext.Provider` com o valor `numero` para seus componentes filhos. Ele renderiza uma imagem de Pokémon com base no número atual e um botão que, quando clicado, aumenta o número.

## Funcionamento e Relacionamento

- `ComponenteAvo` é o componente de nível superior que mantém o estado `numero` e o compartilha com seus componentes filhos através do contexto `PokemonContext.Provider`.
- `ComponenteNeto` é um componente filho de `ComponenteAvo` que consome o contexto `PokemonContext` e exibe uma imagem de Pokémon baseada no número.
- `ComponenteFilho` é um componente neto de `ComponenteAvo` (através de `ComponenteNeto`) que também consome o contexto `PokemonContext` e exibe uma imagem de Pokémon com um número maior do que o recebido do contexto.

Essa estrutura permite que os componentes filhos acessem o estado `numero` sem a necessidade de passá-lo manualmente por props, simplificando o gerenciamento do estado globalmente na aplicação React.
