import ColorTheme from "./MyColorContext"

// Legado
const FunctionContextB = () => {
    return (
        <ColorTheme.Consumer>
            {
                ({bkgB}) =>
                    <div>
                        <h1 style={{background: bkgB}}>
                            Função B
                        </h1>
                    </div>
            }
        </ColorTheme.Consumer>

    )
}

export default FunctionContextB