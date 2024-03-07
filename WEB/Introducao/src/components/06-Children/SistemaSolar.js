//import Planeta from "./Planeta"

import React from "react"

// Este é um componente funcional chamado SistemaSolar que recebe props de children e galaxia.
// Ele renderiza um título indicando o sistema solar da galáxia e depois mapeia os elementos filhos (children).
// Para cada elemento filho, ele clona o elemento e passa a prop galaxia para ele.

const SistemaSolar = ({children, galaxia}) => {
    return (
        <>
            {/* Renderiza o título indicando o sistema solar da galáxia */}
            <h2>Sistema Solar da Galáxia {galaxia}</h2>
            <hr />
            {
                // Mapeia os elementos filhos (children)
                React.Children.map(
                    children,
                    // Para cada elemento filho, clona o elemento e passa a prop galaxia para ele
                    ( elemento ) => {
                        return React.cloneElement(elemento,{galaxia})
                    }
                )
            }
        </>
    )
}

export default SistemaSolar
