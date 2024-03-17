# Prop Drilling

Prop drilling é um padrão comum em React onde os componentes passam props para componentes filhos, mesmo que esses props não sejam utilizados diretamente pelos componentes intermediários. Isso pode tornar o código mais difícil de entender e manter, especialmente em aplicações grandes e complexas.

## Exemplo de Prop Drilling

No exemplo fornecido, temos uma hierarquia de componentes onde `CompA` é o componente pai e `CompE` é o componente filho. `CompA` possui uma variável `variavelDeA` que é passada como prop para `CompB`, `CompC`, `CompD`, e finalmente para `CompE`.

```javascript
//PROP DRILLING
const CompA = () => {

    const variavelDeA = "Variável de A Alterada"

    return (
        <div>
            <CompB variavelDeA={variavelDeA}/>
            <CompC variavelDeA={variavelDeA}/>
        </div>
    )
}

const CompB = ({variavelDeA}) => {
    return (
        <div>
            <h3>B: {variavelDeA}</h3>
        </div>
    )
}

const CompC = ({variavelDeA}) => {
    return (
        <div>
            <CompD variavelDeA={variavelDeA} />
        </div>
    )
}

const CompD = ({variavelDeA}) => {
    return (
        <div>
            <CompE variavelDeA={variavelDeA} />
        </div>
    )
}

const CompE = ({variavelDeA}) => {
    return (
        <div>
            <h3>E: {variavelDeA}</h3>
        </div>
    )
}

export { CompA, CompB, CompC, CompD, CompE }
```

Neste exemplo, a prop `variavelDeA` é passada de `CompA` para `CompB`, `CompC`, `CompD` e, finalmente, para `CompE`, mesmo que `CompB`, `CompC` e `CompD` não façam uso direto dela.

## Consequências do Prop Drilling

- Dificuldade de manutenção: À medida que a aplicação cresce, pode se tornar difícil rastrear o fluxo de props através de múltiplos componentes.
- Aumento da complexidade: Introduzir props adicionais em componentes intermediários apenas para passá-los para componentes filhos pode aumentar a complexidade do código.

## Como Evitar o Prop Drilling

Para evitar o prop drilling, pode-se usar técnicas como Context API, Redux, ou React Query para gerenciar o estado globalmente na aplicação, permitindo que os componentes acessem o estado sem a necessidade de passar props manualmente através de múltiplos níveis de hierarquia de componentes.

## Conclusão

O prop drilling é uma técnica comum em React, mas pode levar a código difícil de manter e entender, especialmente em aplicações grandes. É importante considerar alternativas, como o uso de gerenciamento de estado global, para evitar prop drilling excessivo e simplificar o fluxo de dados dentro da aplicação.