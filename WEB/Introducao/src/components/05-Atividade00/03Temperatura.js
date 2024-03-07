const Temperatura = () => {

    const celsiuspfahrenheit = (celsius) => (9 * celsius) / 5 + 32
    const fahrenheitpcelsius = (fahrenheit) => ((fahrenheit - 32) / 9) * 5

    let c = 32
    let f = 32
    let k = 32
    function kelvinpfc(kelvin) {

        const kelvinpc = ((kelvin - 273) / 5) * 5
        const kelvinpf = ((kelvin - 273) / 5) * 9 + 32

        return { kelvinpc, kelvinpf }
    }

    return (
        <div>
            <h1>Temperaturas</h1>
            <h3>{c} Resultado Celsius para Fahrenheit = {celsiuspfahrenheit(c)} </h3>
            <h3>{f} Resultado de Fahrenheit para Celsius = {fahrenheitpcelsius(f).toFixed(2)} </h3>
            <h3>{k} Resultado de Kelvin para Celsius: {kelvinpfc(k).kelvinpc}</h3>
            <h3>{k} Resultado de Kelvin para Fahrenheit: {kelvinpfc(k).kelvinpf} </h3>

            {/* <h2>Resultado da transformação = {JSON.stringify(kelvinpfc(k))} </h2>
            <h2>Resultado da transformação = {JSON.stringify(kelvinpfc(k))} </h2> */}
        </div>
    )
}

export default Temperatura