# Code

```javascript
import { useState, useEffect } from "react";
```

Esta linha importa os hooks `useState` e `useEffect` da biblioteca React. Os hooks são funções que permitem que você use estado e outros recursos do React em componentes funcionais.

```javascript
const Efeito = () => {
    const [contador, setContador] = useState(0);
    const [ehPar, setEhPar] = useState(true);
```

Aqui, define-se o componente funcional `Efeito`. Dentro deste componente, dois estados são definidos:

- `contador` inicializado com `0`, com a função `setContador` para atualizá-lo.
- `ehPar` inicializado com `true`, com a função `setEhPar` para atualizá-lo.

```javascript
    useEffect(() => {
        if (contador % 2 === 0) setEhPar(true);
        else setEhPar(false);
    }, [contador]);
```

O hook `useEffect` é utilizado para executar um efeito colateral quando o componente é renderizado ou quando o valor de `contador` é atualizado. Neste caso, verifica-se se `contador` é par ou ímpar:

- Se `contador` é par (`contador % 2 === 0`), `setEhPar` é chamado com `true`.
- Caso contrário, `setEhPar` é chamado com `false`.

O array `[contador]` passado como segundo argumento ao `useEffect` indica que este efeito deve ser executado sempre que `contador` mudar.

```javascript
    return (
        <div>
            <h2>Contador : {contador}</h2>
            <h3> {contador} é par ? {ehPar + ""}</h3>
            <button onClick={() => setContador((Anterior) => contador + 1)}>
                Aumentar!
            </button>
        </div>
    );
};
```

O componente retorna um bloco JSX que renderiza:

- Um título `<h2>` que exibe o valor atual de `contador`.
- Um subtítulo `<h3>` que exibe se o `contador` é par ou ímpar, convertendo `ehPar` para uma string (`ehPar + ""`).
- Um botão que, ao ser clicado, incrementa `contador` em 1 utilizando `setContador`.

```javascript
export default Efeito;
```

Finalmente, o componente `Efeito` é exportado como padrão para que possa ser importado e utilizado em outros arquivos.
