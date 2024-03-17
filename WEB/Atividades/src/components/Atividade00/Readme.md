## Questão 01

Uma função de componente chamada `Dados` escrita de três maneiras diferentes:

1. **Forma Clássica**: É uma função de componente comum.
2. **Arrow Function com return**: É uma função de componente escrita usando a sintaxe de arrow function, com um `return` explícito.
3. **Arrow Function sem return**: É uma função de componente escrita usando a sintaxe de arrow function, sem um `return` explícito.

## Questão 02

Criação de componentes funcionais e sua utilização em outro componente.

1. **MeusDadosProps**: É um componente funcional que recebe as propriedades `nome`, `curso` e `universidade` através de um objeto de propriedades (`Props`) e renderiza esses dados.

2. **Informacao**: É outro componente funcional que utiliza o componente `Dados` (importado do arquivo `02MeusDados.js`) para renderizar informações. Ele passa as propriedades `nome`, `curso` e `universidade` para o componente `Dados` duas vezes, com valores diferentes.

## Questão 03

Conversão de temperaturas. O componente `Temperatura` faz o seguinte:

1. Define funções para converter temperaturas entre Celsius, Fahrenheit e Kelvin.
2. Define valores de temperatura para Celsius, Fahrenheit e Kelvin.
3. Renderiza essas temperaturas convertidas para Fahrenheit e Celsius, e também para Kelvin utilizando as funções definidas anteriormente.

O componente `Temperatura` também tem a conversão de Kelvin para Celsius e Fahrenheit em formato JSON.

## app.js

Este arquivo é responsável pela organização e renderização dos componentes no aplicativo. Ele importa e utiliza os componentes `Dados`, `MeusDadosProps`, `Informacao` e `Temperatura` para exibir as informações na interface do usuário. Cada seção da interface é encabeçada com o título da respectiva questão.

```js

import MeusDadosProps from "./components/05-Atividade00/02MeusDados"
import Informacao from "./components/05-Atividade00/informacao";
import Dados from "./components/05-Atividade00/01MeusDados";
import Temperatura from "./components/05-Atividade00/03Temperatura"

function App() {
  return (
    <div className="App">
      <h1>Desenvolvimento de software para a WEB</h1>
      <h2>Questão 01</h2>
      <Dados />

      <h2>Questão 02</h2>
      <h3>- Dados direto do arquivo raiz</h3>
      <MeusDadosProps
        nome="Elysson"
        curso="SI"
        universidade="UFC" />
      <hr />
      <h3>- Dados que utilizam a estrutura do arquivo raiz, mas com mais dados envolvidos</h3>
      <Informacao />

      <h2>Questão 03</h2>
      <Temperatura />

    </div>
  )
}
```
