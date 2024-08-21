import { useState, useEffect } from 'react'

const Questao03 = () => {

    // Utiliza o estado para armazenar as capitais de maior e menor população
    const [menorCapital, setMenorCapital] = useState('')
    const [maiorCapital, setMaiorCapital] = useState('')

    // Função assíncrona para buscar os dados da API
    const fetchCapitals = async () => {
        try {
            // Busca os dados da API
            const response = await fetch("https://restcountries.com/v3.1/region/europe?fields=capital,population")
            const data = await response.json()

            // Ordena os países pelo tamanho da população
            const sortedData = data.sort((a, b) => a.population - b.population)

            // Define a capital com menor e maior população
            setMenorCapital(sortedData[0].capital[0])
            setMaiorCapital(sortedData[sortedData.length - 1].capital[0])
        } catch (error) {
            console.error('Erro ao buscar os dados da API:', error)
        }
    }

    // useEffect para chamar a função de busca ao montar o componente
    useEffect(() => {
        fetchCapitals()
    }, [])

    // Renderiza na tela as capitais com maior e menor população
    return (
        <div>
            <h1>Questão 3</h1>
            <h2>Capitais com Maior e Menor População</h2>
            <p><strong>Capital com Menor População:</strong> {menorCapital}</p>
            <p><strong>Capital com Maior População:</strong> {maiorCapital}</p>
        </div>
    )
}

export default Questao03