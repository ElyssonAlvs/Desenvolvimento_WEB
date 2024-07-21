import { useSelector } from "react-redux"



const Contador = () => {

    const counter = useSelector((state) => {
        return state.counter.value
    })


}

export default Contador