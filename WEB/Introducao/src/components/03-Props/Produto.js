// Função anônima
const Produto = ({ nome, categoria, valor }) => {

    //let objJSON = {nome:"João", nota:{nota1:5, nota2:10}}
    //const {nome, categoria, valor} = props

    return (
        <div>
            {/*}
            Acesso clássico
            <h1>{objJSON.nota.nota1}</h1>
            {*/}
            <h3>Nome: {nome} </h3>
            <h3>Categoria: {categoria} </h3>
            <h3>Preço : R$ {valor} </h3>
        </div>
    )
}

export default Produto