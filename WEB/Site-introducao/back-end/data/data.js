const professores = [
    { id: 0, nome: "Wladimir Tavares", curso: "CC", titulacao: "DOUTORADO", universidade: { ufc: true, ifce: false }, ai: { es: false, lc: false, mc: false } },
    { id: 1, nome: "Fábio Campos", curso: "SI", titulacao: "DOUTORADO", universidade: { ufc: true, ifce: false }, ai: { es: false, lc: false, mc: true } },
    { id: 2, nome: "João Marcel", curso: "CC", titulacao: "DOUTORADO", universidade: { ufc: true, ifce: false }, ai: { es: false, lc: false, mc: false } },
    { id: 3, nome: "Arthur Araruna", curso: "DD", titulacao: "MESTRADO", universidade: { ufc: true, ifce: false }, ai: { es: false, lc: false, mc: false } },
    { id: 4, nome: "Davi Romero", curso: "EC", titulacao: "DOUTORADO", universidade: { ufc: true, ifce: false }, ai: { es: false, lc: false, mc: false } }
]

const alunos = [
    { id: 0, nome: "Lucas", curso: "SI", ira: 8.5 },
    { id: 1, nome: "Maria", curso: "CC", ira: 7.2 },
    { id: 2, nome: "Pedro", curso: "EC", ira: 9.0 },
    { id: 3, nome: "Ana", curso: "ES", ira: 6.8 },
    { id: 4, nome: "João", curso: "DD", ira: 8.9 }
]

module.exports = { professores, alunos }