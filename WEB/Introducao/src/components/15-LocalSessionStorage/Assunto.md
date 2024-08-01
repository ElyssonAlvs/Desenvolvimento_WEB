# Importação de useState

## Importação de useState (React Hook)

```javascript
import { useState } from "react"
```

Aqui, a função `useState` do React é importada. `useState` é um hook que permite adicionar o estado a um componente funcional.

## Definição do Componente SaveLoadData

```javascript
const SaveLoadData = () => {
```

Este é o componente funcional chamado `SaveLoadData`.

## Declaração de Variáveis e Estado

```javascript
const aluno = {nome:"Fulano", curso:"CC", IRA: 6.7}
const [alunoData, setAlunoData] = useState({})
```

- `aluno` é um objeto com informações fictícias de um aluno.
- `alunoData` é uma variável de estado que inicialmente é um objeto vazio. `setAlunoData` é a função usada para atualizar o estado de `alunoData`.

## Função saveData

```javascript
function saveData() {
    //localStorage.setItem("aluno",JSON.stringify(aluno))
    sessionStorage.setItem("aluno",JSON.stringify(aluno))
    alert("Dado salvo com sucesso!")
}
```

- Esta função salva o objeto `aluno` como uma string JSON no `sessionStorage`.
- A linha comentada usa `localStorage`, mas a linha ativa usa `sessionStorage`. `sessionStorage` mantém os dados somente durante a sessão da página.
- Após salvar os dados, um alerta é exibido.

## Função loadData

```javascript
function loadData() {
    //const alunoCarregado = localStorage.getItem("aluno")
    const alunoCarregado = sessionStorage.getItem("aluno")
    setAlunoData(JSON.parse(alunoCarregado))
}
```

- Esta função carrega os dados armazenados no `sessionStorage`.
- A linha comentada usa `localStorage`, mas a linha ativa usa `sessionStorage`.
- Os dados carregados são convertidos de volta para um objeto JavaScript usando `JSON.parse` e o estado `alunoData` é atualizado com esses dados.

## Renderização do Componente

```javascript
return (
    <div>
        <h1>SAVE AND LOAD DATA</h1>
        <h3>{JSON.stringify(alunoData)}</h3>
        <button onClick={saveData}>SAVE DATA</button>
        <button onClick={loadData}>LOAD DATA</button>
    </div>
)
```

- O componente retorna um `div` que contém um título, uma representação em JSON do `alunoData` e dois botões.
- O botão "SAVE DATA" chama a função `saveData` quando clicado.
- O botão "LOAD DATA" chama a função `loadData` quando clicado.

## Exportação do Componente

```javascript
export default SaveLoadData
```

- O componente `SaveLoadData` é exportado como padrão para que possa ser importado e usado em outros arquivos.

Este código é um exemplo simples de como armazenar e recuperar dados utilizando `sessionStorage` em um componente React.
