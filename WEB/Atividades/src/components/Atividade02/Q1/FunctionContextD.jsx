import ColorTheme from "./MyColorContext"

// Legacy mode
const FunctionContextD = () => {
    return (
        <ColorTheme.Consumer>{
            (color) => 
                <div>
                    <h1 style={{background: color.bkgD}}>Função D </h1>
                </div>
            }
        </ColorTheme.Consumer>

    )
}

export default FunctionContextD