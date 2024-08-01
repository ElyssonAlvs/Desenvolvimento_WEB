
# 1. Configuração do Redux

## Arquivo: store.js

```javascript
import { configureStore } from "@reduxjs/toolkit"
import contadorSlice from "../slice/contadorSlice"

export const store = configureStore(
    {
        reducer: {
            contador: contadorSlice
        },
    }
)
```

Neste arquivo, usamos `configureStore` da biblioteca Redux Toolkit para criar a store do Redux. A store mantém o estado global da aplicação. No objeto `reducer`, associamos o slice `contador` com o estado global da aplicação.

## Arquivo: contadorSlice.js

```javascript
import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    valor: 344342
}

export const contadorSlice = createSlice(
    {
        name: "contador",
        initialState,
        reducers: {
            incrementar: (state) => { state.valor += 1},
            decrementar: (state) => { state.valor -= 1},
            incrementarPorQtd: (state, action) => { state.valor += action.payload},
            decrementarPorQtd: (state, action) => { state.valor -= action.payload}
        
        }
    }
)

export const { incrementar, decrementar, incrementarPorQtd, decrementarPorQtd } = contadorSlice.actions
export default contadorSlice.reducer
```

Neste arquivo, usamos `createSlice` para definir um slice do estado chamado `contador`. O estado inicial (`initialState`) é um objeto com uma propriedade `valor` inicializada com `344342`. Definimos quatro reducers (`incrementar`, `decrementar`, `incrementarPorQtd`, `decrementarPorQtd`) que modificam o estado de acordo com as ações recebidas.

### 2. Componente Principal

# Arquivo: PrincipalRedux.js

```javascript
import { store } from "./store/store"
import { Provider } from "react-redux"
import ContadorRedux from "./ContadorRedux"

const PrincipalRedux = () => {
    return (
        <>
           <Provider store={store}>
                <ContadorRedux />
           </Provider> 
        </>
    )
}

export default PrincipalRedux
```

Neste componente, usamos o `Provider` do `react-redux` para envolver o componente `ContadorRedux`. O `Provider` passa a store do Redux para todos os componentes filhos, permitindo que eles acessem o estado global.

## 3. Componente Contador

# Arquivo: ContadorRedux.js

```javascript
import { useSelector, useDispatch } from "react-redux"
import { incrementar, decrementar, incrementarPorQtd, decrementarPorQtd } from "./slice/contadorSlice"

const ContadorRedux = () => {

    const contador = useSelector(
        (state) => state.contador.valor 
    )

    const despachante = useDispatch()

    return (
        <>
            <h1>Contador: {contador}</h1>
            <button
                onClick={()=>{
                    despachante(incrementar())
                }}
            >Incrementar</button>
            <button
                onClick={()=>{
                    despachante(decrementar())
                }}
            >Decrementar</button>
            <button
                onClick={()=>{
                    despachante(incrementarPorQtd(10))
                }}
            >Aumentar +10</button>
            <button
                onClick={()=>{
                    despachante(decrementarPorQtd(10))
                }}
            >Decrementar -10</button>
        </>
    )
}

export default ContadorRedux
```

Neste componente, usamos `useSelector` para acessar o estado `valor` do slice `contador` e `useDispatch` para obter a função de despacho (`dispatch`). A função `dispatch` é usada para enviar ações para o store. Quando os botões são clicados, chamamos `dispatch` com as ações correspondentes (`incrementar`, `decrementar`, `incrementarPorQtd`, `decrementarPorQtd`) para atualizar o estado.

## Resumo

1. **Configuração do Redux**: Cria a store e define os reducers para gerenciar o estado global.
2. **Componente Principal**: Usa `Provider` para fornecer a store aos componentes filhos.
3. **Componente Contador**: Usa `useSelector` para acessar o estado e `useDispatch` para enviar ações que modificam o estado.

Essa estrutura permite que o estado seja centralizado e gerenciado de maneira previsível em uma aplicação React usando Redux.
