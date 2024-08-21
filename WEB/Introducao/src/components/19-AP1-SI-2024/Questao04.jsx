import { useState, useEffect, useCallback } from 'react'

const Questao04 = () => {

    // Estados para armazenar as capitais com menor e maior população
    const [menorCapital, setMenorCapital] = useState('')
    const [maiorCapital, setMaiorCapital] = useState('')

    const fetchCapitalsPromise = () => {
        // Criação de uma Promise para simular a chamada de uma API
        return new Promise((resolve) => {
            // Simula um tempo de resposta da API de 1 segundo
            setTimeout(() => {
                resolve([
                    { "capital": ["Dublin"], "population": 4994724 },
                    { "capital": ["Nicosia"], "population": 1207361 },
                    { "capital": ["Madrid"], "population": 47351567 }
                ])
            }, 1000)
        })
    }

    // Busca os dados da API usando Promisse e define as capitais com menor e maior população
    // Callback para evitar que a função seja recriada a cada renderização
    const fetchCapitals = useCallback(async () => {
        try {
            const data = await fetchCapitalsPromise();

            // Ordena os dados pelo campo population
            const sortedData = data.sort((a, b) => a.population - b.population);

            // Define as capitais com menor e maior população
            setMenorCapital(sortedData[0].capital[0]);
            setMaiorCapital(sortedData[sortedData.length - 1].capital[0]);
        } catch (error) {
            console.error('Erro ao obter os dados:', error);
        }
    }, [])

    // useEffect para chamar a função de busca ao montar o componente
    useEffect(() => {
        fetchCapitals()
    }, [fetchCapitals])

    return (
        <div>
            <h1>Questão 4</h1>
            <h2>Capitais com Maior e Menor População</h2>
            <p><strong>Capital com Menor População:</strong> {menorCapital}</p>
            <p><strong>Capital com Maior População:</strong> {maiorCapital}</p>
        </div>
    )
}

export default Questao04