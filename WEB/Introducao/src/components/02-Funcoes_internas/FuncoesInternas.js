const FuncoesInternas = () => {
    
    let numero1 = 10
    let numero2 = 2
    let myNumber = 3.14565

    const somar = (x,y) => x + y
    
    const subtrair = (x,y) => x - y

    const multiplicar = (x,y) => x * y

    const dividir = (x,y) => x / y


    return (
        <div>
            <h1>Calculadora</h1>
            <h2>O resultado da soma é : {somar(numero1, numero2)}</h2>
            <h2>O resultado da subtração é : {subtrair(numero1, numero2)}</h2>
            <h2>O resultado da multiplicação é : {multiplicar(numero1, numero2)}</h2>
            <h2>O resultado da divisão é : {dividir(numero1, numero2).toFixed(2)}</h2>
            <h2>{myNumber}</h2>
        </div>
    )
}


export default FuncoesInternas