import "./formulario.css"
import Campo from "../campo/campo"
import ListaOpciones from "../lista-opciones/lista-opciones"
import Boton from "../boton/boton"
import { useState } from "react"

const Formulario = (props) => {
    const [nombre,actualizarNombre]=useState("")
    const [puesto,actualizarPuesto]=useState("")
    const [foto,actualizarFoto]=useState("")
    const [equipo,actualizarEquipo]=useState("")

    const [nuevoEquipo,setNuevoEquipo]=useState("")
    const [color,setColor]=useState("")

    const manejarEnvio = (evento)=>{
        evento.preventDefault()
        let DatosAEnviar ={
            nombre:nombre,
            puesto:puesto,
            foto:foto,
            equipo:equipo            
        }
        props.registrarColaborador(DatosAEnviar)
    }

    const manejarEnvioEquipos = (evento)=>{
        evento.preventDefault();
        props.crearEquipos(nuevoEquipo,color)
    }
    
    

    return <section className="formulario" >
        <form onSubmit = {manejarEnvio} >
            <h2> Rellena el formulario para crear el colaborador. </h2>
            <Campo
                titulo="Nombre" 
                placeholder="Ingresa Nombre" 
                required={true}
                valor={nombre}/* es el valor del estado que creamos la variabre nombre la mandamos a campo  */
                actualizarValor={actualizarNombre}
             />
            <Campo 
                titulo="Puesto" 
                placeholder="Ingresar Puesto" 
                required 
                valor={puesto}
                actualizarValor={actualizarPuesto}
            />
            <Campo 
                titulo="Foto" 
                placeholder="Ingresar enlace de foto" 
                required={true}
                valor={foto}
                actualizarValor={actualizarFoto}
            />
            <ListaOpciones 
                valor={equipo}
                actualizarEquipo={actualizarEquipo}
                equipos={props.equipos}
            />
            <Boton >
                
                Crear
            </Boton>
            

        </form>
        <form onSubmit = {manejarEnvioEquipos} >
            <h2> Rellena el formulario para crear un equipo. </h2>
            <Campo
                titulo="Equipo" 
                placeholder="Ingresa Equipo" 
                required={true}
                valor={nuevoEquipo}/* es el valor del estado que creamos la variabre nombre la mandamos a campo  */
                actualizarValor={setNuevoEquipo}
             />
            <Campo 
                titulo="color" 
                placeholder="Ingresar Color en Exadecimal" 
                required 
                valor={color}
                actualizarValor={setColor}
                type="color"
            />

            <Boton >                
                Crear Equipo
            </Boton>
        </form>
    
    </section>
}



export default Formulario