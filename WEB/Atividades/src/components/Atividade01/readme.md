### Questão 01

Cria-se dois componentes em arquivos separados para calcular o Índice de Massa Corporal (IMC). O componente Pai irá importar e chamar o componente Filho, passando as propriedades de altura e peso. O componente Filho calculará o IMC e exibirá mensagens JSX com base no resultado do cálculo.

1. **Componente Pai (`01Pai.jsx`):**
   - Importa-se o componente Filho de `01Filho.jsx`.
   - Faz-se uma chamada do componente Filho, passando as propriedades de altura e peso.

2. **Componente Filho (`01Filho.jsx`):**
   - Calcula-se o IMC usando a fórmula: `IMC = peso / (altura * altura)`.
   - Cria-se uma função interna que retorna mensagens JSX com base no IMC calculado:
     - Se o IMC for menor que 18, exibir `<h3>Abaixo do peso</h3>`.
     - Se o IMC for maior que 25, exibir `<h3>Acima do peso</h3>`.
     - Caso contrário, exibir `<h3>Peso ideal</h3>`.

### Questão 02

Será criado componentes internos para representar as partes de um computador (Placa Mãe, Memória e Placa de Vídeo) e os exportará para serem utilizados em outro arquivo. No arquivo principal (`App.js`), importa-se esses componentes usando um default e chame-os no JSX.

1. **Componentes Internos:**
   - Cria-se os componentes internos PlacaMae, Memória e PlacaDeVideo.
   - Cada componente deve receber, via props, um nome e um preço e exibi-los em seu JSX.

2. **Exportação dos Componentes:**
   - Exporta-se os componentes da forma que preferir.

### Questão 03

Os componentes representam uma batalha entre heróis e inimigos. Cria-se os componentes Hero, Enemy, Arena e World. O componente Arena irá renderizar os componentes Hero e Enemy. Além disso, o componente World terá uma chamada ao props.children.

1. **Componentes Internos:**
   - Cria-se os componentes Hero, Enemy, Arena e World.
   - Hero e Enemy imprimirão a propriedade "name" recebida via props, além de uma imagem.
   - Arena irá renderizar os componentes Hero e Enemy.

2. **Utilização de Props.children:**
   - Em World, faça uma chamada ao props.children.

3. **Exibição em App.js:**
   - Exiba World em `App.js`, envolvendo chamadas ao componente Arena.

   ```javascript
    import React from 'react';
    import { Arena, World } from './components/Atividade01/03Batalha';

    function App() {
        return (
            <World>
            <Arena/>
            </World>
        );
    }
   ```

### Opcional da questão 3

1. **Modificação do Componente Arena:**
   - Componente Arena para trabalhar com React.Children.
   - Adiciona-se um prop chamado "arena" em Arena, que será repassado para suas tags filhas usando cloneElement.
   - As informações referentes ao nome da Arena devem ser exibidas nos componentes filhos Hero e Enemy.
