
### Importações

```javascript
import { useEffect, useState } from "react"
import axios from "axios"
```

Aqui estamos importando duas funcionalidades do React: `useEffect` e `useState`. `useState` é usado para criar variáveis de estado no componente, enquanto `useEffect` é usado para realizar efeitos colaterais, como chamadas à API, quando o componente é montado ou atualizado. Também importamos a biblioteca `axios`, que facilita fazer requisições HTTP.

### Definindo o Componente `CovidAxios`

```javascript
const CovidAxios = () => {
```

Esta linha define um componente funcional chamado `CovidAxios`.

### Estado do Componente

```javascript
const [casos, setCasos] = useState(0)
const [mortes, setMortes] = useState(0)
```

Aqui, estamos criando dois estados: `casos` e `mortes`, ambos inicializados com o valor 0. `setCasos` e `setMortes` são as funções que usamos para atualizar esses estados.

### Efeito Colateral com `useEffect`

```javascript
useEffect(
    () => {
        axios.get("https://covid19-brazil-api.now.sh/api/report/v1")
        .then(resposta => {
            setCasos(resposta.data.data[8].cases)
            setMortes(resposta.data.data[8].deaths)
        })
        .catch(error => console.log(error))
    },
    []
)
```

Aqui usamos `useEffect` para fazer uma requisição HTTP usando `axios` quando o componente é montado. A URL da API retorna dados sobre COVID-19 no Brasil.

Dentro do `useEffect`:

- `axios.get` faz a requisição à API.
- `then` lida com a resposta da API, atualizando os estados `casos` e `mortes` com os valores apropriados da resposta (`resposta.data.data[8].cases` e `resposta.data.data[8].deaths`).
- `catch` lida com qualquer erro que possa ocorrer durante a requisição.

O array vazio `[]` como segundo argumento para `useEffect` garante que este efeito colateral só rode uma vez, quando o componente é montado.

### Renderização do Componente

```javascript
return (
    <>
        <h1>CEARÁ</h1>
        <h3>Casos: {casos}</h3>
        <h3>Mortes: {mortes}</h3>
    </>
)
```

Aqui estamos retornando o JSX que define como o componente será renderizado na interface do usuário. Exibimos um título "CEARÁ" e, em seguida, os números de casos e mortes.

### Código Comentado

Há duas abordagens alternativas comentadas para fazer a requisição à API: usando `fetch` com `then-catch` e usando `async-await`.

#### Usando `fetch` com `then-catch`

```javascript
fetch("https://covid19-brazil-api.vercel.app/api/report/v1")
.then(response => response.json())
.then((json) => {
    console.log(json.data[8].cases)
    console.log("TESTE")
})
.catch(error => console.log(error))
```

Neste trecho, `fetch` é usado para fazer a requisição. Após a resposta ser recebida, ela é convertida para JSON. Em seguida, os dados específicos são acessados e logados no console.

#### Usando `async-await`

```javascript
async function acessarCOVID() {
    const response = await fetch("https://covid19-brazil-api.vercel.app/api/report/v1")
    const json = await response.json()
    return json.data[8].deaths
}
```

Aqui, `async-await` é usado para lidar com a requisição de forma assíncrona. A função `acessarCOVID` faz a requisição e espera pela resposta e pela conversão para JSON, retornando o número de mortes.

Essas abordagens são alternativas ao uso de `axios` para fazer a requisição HTTP.

### Conclusão

O componente `CovidAxios` utiliza `axios` para buscar dados de COVID-19 e atualiza os estados `casos` e `mortes` com os dados recebidos, exibindo-os na interface do usuário. As abordagens alternativas com `fetch` mostram como isso poderia ser feito de outras maneiras.
