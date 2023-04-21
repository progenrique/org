import "./lista-opciones.css"
const ListaOpciones =(props)=>{
    

    const manejarCambio=(evento)=>{
        props.actualizarEquipo(evento.target.value)
    }

    return <div className="listaOpciones">
        <label>Equipos</label>
        <select onChange={manejarCambio} value={props.valor}>
            <option value="" disabled defaultValue="" hidden>seleccionar equipo</option>
           {/* estudiar el concepto .map */}
           {props.equipos.map((equipo,posicion)=>{ //la funcion .map solo funciona en arreglos no en objetosy recibe el nombre de cada componente del arreglo y la posicion
                return <option key={posicion}>{equipo} </option> //siempre debe de llebar un prop key que debe ser un identificador unico en este caso puede ser la posicion
           })}
        </select>
        
    </div>
}

export default ListaOpciones