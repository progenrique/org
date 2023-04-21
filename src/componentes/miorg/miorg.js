import { useState } from "react"
import "./miorg.css"
const MiOrg = (props)=>{   
    return <section className = "orgsection">
        <h3 className="titulo">Mi organizacion</h3>
        <img src="/img/add.png" alt="add" onClick={props.cambiarMostrar} />
    </section>
}

export default MiOrg