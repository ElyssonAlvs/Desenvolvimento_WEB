import Dados from "./02MeusDados"

const Informacao = () => {

    return (
        <div>
            <h1>Universidade</h1>
            <Dados
                nome="Danilo Gomes"
                curso="Sistemas de Informação"
                universidade="Universidade Federal do Ceará"
            />
            <br/>
            <Dados
                nome="Elysson Alves"
                curso="Sistemas de Informação"
                universidade="Universidade Federal do Ceará"
            />
        </div >
    )
}

export default Informacao