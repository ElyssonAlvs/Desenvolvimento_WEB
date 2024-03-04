const Temperatura = () => {

    const celsiuspfahrenheit = (celsius) => {
        return (9 * celsius) / 5 + 32

    }
    const fahrenheitpcelsius = (fahrenheit) => {
        return ((fahrenheit - 32) / 9) * 5
    }


    const kelvinpfc = (kelvin) => {

        const kelvinpc = ((kelvin - 273) / 5) * 5
        const kelvinpf = ((kelvin - 273) / 5) * 9 + 32

        return { kelvinpc, kelvinpf }
    }

    return (
        <div>
            <h1>Temperaturas</h1>
            <h2>Resultado Celsius para Fahrenheit = {celsiuspfahrenheit(32)} </h2>
            <h2>Resultado de Fahrenheit para Celsius = {fahrenheitpcelsius(32)} </h2>
            <h2>Resultado de Kelvin para Celsius: {kelvinpfc(32).kelvinpc}</h2>
            <h2>Resultado de Kelvin para Fahrenheit: {kelvinpfc(32).kelvinpf} </h2>

            {/* <h2>Resultado da transformação = {JSON.stringify(kelvin(32).kelvinpc)} </h2>
            <h2>Resultado da transformação = {JSON.stringify(kelvin(32).kelvinpf)} </h2> */}
        </div>
    )
}

export default Temperatura