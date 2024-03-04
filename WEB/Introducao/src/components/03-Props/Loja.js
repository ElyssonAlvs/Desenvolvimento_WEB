import Produto from "./Produto"

const Loja = () => {
    return (
        <div>
            <h1>Supermercado Quixadá</h1>
            <hr />
            <Produto
                nome="Máquina de Lavar"
                categoria="Eletrodoméstico"
                valor={2300} />
            <hr />
            <Produto
                nome="Senhor dos Anéis - A sociedade do Anel"
                categoria="Livro"
                valor={50} />
            <hr />
            <Produto
                nome="Esponja"
                categoria="Limpeza"
                valor={2}
            />
        </div>
    )
}

export default Loja