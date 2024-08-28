import React, { useState, useEffect } from 'react';

const Questao03SemNet = () => {
  const [maiorCapital, setMaiorCapital] = useState('');
  const [menorCapital, setMenorCapital] = useState('');

  // Promise simulada para retornar dados sem internet
  const fetchData = () => {
    return new Promise((resolve) => {
      resolve([
        { "capital": ["Dublin"], "population": 4994724 },
        { "capital": ["Nicosia"], "population": 1207361 },
        { "capital": ["Madrid"], "population": 47351567 }
      ]);
    });
  };

  useEffect(() => {
    fetchData().then(data => {
      // Inicializando variáveis com o primeiro elemento do array
      let maiorPopulacao = data[0].population;
      let menorPopulacao = data[0].population;
      let maiorPopIndex = 0;
      let menorPopIndex = 0;

      // Iterando pelo array a partir do segundo elemento
      for (let i = 1; i < data.length; i++) {
        if (data[i].population > maiorPopulacao) {
          maiorPopulacao = data[i].population;
          maiorPopIndex = i;
        }
        if (data[i].population < menorPopulacao) {
          menorPopulacao = data[i].population;
          menorPopIndex = i;
        }
      }

      // Atualizando os estados com as capitais de maior e menor população
      setMaiorCapital(data[maiorPopIndex].capital[0]);
      setMenorCapital(data[menorPopIndex].capital[0]);
    }).catch(error => {
      console.error("Erro ao buscar os dados:", error);
    });
  }, []);

  return (
    <div>
      <h1>Questão 03</h1>
      <p>Capital com maior população: {maiorCapital}</p>
      <p>Capital com menor população: {menorCapital}</p>
    </div>
  );
};

export default Questao03SemNet;
