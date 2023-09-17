import { useState } from "react"
import "./MyOrg.css"

const MyOrg = (props) => {

    //const [nameVariable, updateFunction] = useState(initialValue)
    const[mostrar, actualizarMostrar] = useState(true)

    // const manejarClick = () => {
    //     console.log("mostrar o no", !mostrar)
    //     actualizarMostrar(!mostrar)
    // }

    return <section className="orgSection">
        <h3 className="tittle">Mi organizacion </h3>
        <img src="/img/add.png" alt="add" onClick={props.cambiarMostrar}/>
    </section>
}

export default MyOrg