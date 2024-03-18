import Filho from "./01Filho"

const Pai = () => {
    return (
        <div>
            {/* Renderiza o componente Filho com props */}
            <Filho altura={1.8} peso={90} nome="Elysson" />
        </div>
    )
}

export default Pai