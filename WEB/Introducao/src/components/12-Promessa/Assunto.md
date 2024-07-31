### Código 1

```javascript
import { useEffect, useState } from "react";

const MinhaPromessa = new Promise((resolve, rejected) => {
    // computação em x segundos,...
    setTimeout(() => {
        const meuNumero = Math.floor(Math.random() * 10) + 1;
        if (meuNumero % 2 === 0)
            resolve("Deu tudo certo, seu número é " + meuNumero);
        else rejected("Deu tudo errado, seu número é : " + meuNumero);
    }, 5000);
}); // Promise

const ComponentePromessa = () => {
    const [resultado, setResultado] = useState();

    useEffect(() => {
        MinhaPromessa.then((valor) => {
            // console.log("OK :" + valor)
            setResultado(valor);
        }).catch((error) => setResultado(error));
    }, []);

    return (
        <>
            <h3>Promessa!</h3>
            <h2>Resultado : {resultado}</h2>
        </>
    );
};

export default ComponentePromessa;
```

#### Explicação:

1. **Importação de Hooks**:
   - `useEffect` e `useState` são hooks do React usados para gerenciar efeitos colaterais e estado do componente, respectivamente.

2. **Criação da Promessa `MinhaPromessa`**:
   - Uma nova `Promise` é criada, que após um atraso de 5 segundos (`setTimeout`), gera um número aleatório entre 1 e 10.
   - Se o número gerado for par, a promessa é resolvida (`resolve`) com uma mensagem de sucesso.
   - Se o número gerado for ímpar, a promessa é rejeitada (`rejected`) com uma mensagem de erro.

3. **Componente `ComponentePromessa`**:
   - Utiliza o hook `useState` para definir um estado chamado `resultado`.
   - Utiliza o hook `useEffect` para lidar com efeitos colaterais após a montagem do componente.
   - No `useEffect`, a promessa `MinhaPromessa` é chamada:
     - Se resolvida com sucesso, o valor é armazenado no estado `resultado`.
     - Se rejeitada, o erro é armazenado no estado `resultado`.
   - Retorna um JSX que exibe o título "Promessa!" e o resultado da promessa.

### Código 2

```javascript
import { useEffect, useState } from "react";

const MinhaPromessa = new Promise((resolve, rejected) => {
    // computação em x segundos,...
    setTimeout(() => {
        const meuNumero = Math.floor(Math.random() * 10) + 1;
        if (meuNumero % 2 === 0)
            resolve("Deu tudo certo, seu número é " + meuNumero);
        else rejected("Deu tudo errado, seu número é : " + meuNumero);
    }, 2000);
}); // Promise

const ComponentePromessa = () => {
    const [resultado, setResultado] = useState();

    async function apiGetPromessa() {
        try {
            const res = await MinhaPromessa;
            setResultado(res);
        } catch (error) {
            setResultado(error);
        }
    }

    useEffect(() => {
        apiGetPromessa();
    }, []);

    return (
        <>
            <h3>Promessa com Async!</h3>
            <h2>Resultado : {resultado}</h2>
        </>
    );
};

export default ComponentePromessa;
```

#### Explicação:

1. **Importação de Hooks**:
   - `useEffect` e `useState` são hooks do React usados para gerenciar efeitos colaterais e estado do componente, respectivamente.

2. **Criação da Promessa `MinhaPromessa`**:
   - Semelhante ao Código 1, uma nova `Promise` é criada, que após um atraso de 2 segundos (`setTimeout`), gera um número aleatório entre 1 e 10.
   - Se o número gerado for par, a promessa é resolvida (`resolve`) com uma mensagem de sucesso.
   - Se o número gerado for ímpar, a promessa é rejeitada (`rejected`) com uma mensagem de erro.

3. **Componente `ComponentePromessa`**:
   - Utiliza o hook `useState` para definir um estado chamado `resultado`.
   - Define uma função assíncrona `apiGetPromessa` que aguarda (`await`) a resolução ou rejeição da promessa `MinhaPromessa`:
     - Se resolvida com sucesso, o valor é armazenado no estado `resultado`.
     - Se rejeitada, o erro é armazenado no estado `resultado`.
   - Utiliza o hook `useEffect` para chamar `apiGetPromessa` após a montagem do componente.
   - Retorna um JSX que exibe o título "Promessa com Async!" e o resultado da promessa.

### Diferenças Principais:

- **Atraso Diferente**:
  - O Código 1 utiliza um atraso de 5 segundos (`5000 ms`), enquanto o Código 2 utiliza um atraso de 2 segundos (`2000 ms`).

- **Manejo da Promessa**:
  - No Código 1, a promessa é manipulada diretamente dentro do `useEffect` com `.then` e `.catch`.
  - No Código 2, uma função assíncrona `apiGetPromessa` é definida para lidar com a promessa usando `await` dentro de um bloco `try-catch`, e essa função é chamada no `useEffect`.

Ambos os códigos lidam com a promessa de maneira semelhante, mas o Código 2 usa a sintaxe assíncrona/await para uma abordagem mais limpa e moderna de lidar com promessas em JavaScript.