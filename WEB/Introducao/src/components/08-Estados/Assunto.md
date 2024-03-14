# README - Utilizando useState em React

Dois componentes React que demonstram o uso do hook `useState` para gerenciar o estado local de componentes funcionais.

## Componente Estado

### Descrição

O componente `Estado` é responsável por exibir um contador simples que pode ser incrementado clicando em um botão.

### Funcionalidades

- Exibe um contador na interface.
- Permite incrementar o contador em 1 ao clicar no botão "Incrementar Contador".

### Uso

Para utilizar o componente `Estado`, importe-o e insira-o onde desejar exibir o contador na sua aplicação.

```javascript
import Estado from './Estado';

function App() {
  return (
    <div>
      <Estado />
    </div>
  );
}

export default App;
```

## Componente Pokemon

### Descrição

O componente `Pokemon` exibe imagens de Pokémon da API PokeAPI, permitindo ao usuário avançar e retroceder pelos IDs dos Pokémon.

### Funcionalidades

- Exibe a imagem de um Pokémon com base no ID atual.
- Permite avançar para o próximo Pokémon ao clicar no botão "Incrementar Contador".
- Permite retroceder para o Pokémon anterior ao clicar no botão "Decrementar Contador".

### Uso

Para utilizar o componente `Pokemon`, importe-o e insira-o onde desejar exibir as imagens dos Pokémon na sua aplicação.

```javascript
import Pokemon from './Pokemon';

function App() {
  return (
    <div>
      <Pokemon />
    </div>
  );
}

export default App;
```

Ambos os componentes utilizam o hook `useState` do React para gerenciar o estado local das variáveis `contador`, permitindo atualizações dinâmicas na interface com base nas interações do usuário.