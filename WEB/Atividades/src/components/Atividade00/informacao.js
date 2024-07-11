import MeusDadosProps from "./02MeusDados"

const Informacao = () => {

    return (
        <div>
            <MeusDadosProps
                nome="Danilo Gomes"
                curso="Sistemas de Informação"
                universidade="Universidade Federal do Ceará"
            />
            <br />
            <MeusDadosProps
                nome="Elysson Alves"
                curso="Sistemas de Informação"
                universidade="Universidade Federal do Ceará"
            />
        </div >
    )
}

export default Informacao