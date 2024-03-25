import FunctionContextB from "./FunctionContextB"
import FunctionContextC from "./FunctionContextC"

import ColorTheme from "./MyColorContext"

const FunctionContextA = () => {

    const color = {bkgA:"green",bkgB:"white",bkgC:"yellow", bkgD:"blue"}

    return (
         <ColorTheme.Provider value={color}>
             <div>
                 <h1 style={{backgroundColor: color.bkgA}}> Função A</h1>
                 <FunctionContextB/>
                 <FunctionContextC/>
             </div>

         </ColorTheme.Provider>
    )
}

export default FunctionContextA