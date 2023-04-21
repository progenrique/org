import "./equipo.css"
import Colaborador from "../colaborador/colaborador"
import hexToRgba from 'hex-to-rgba'

/* esta parte es sin destructuracion */

/* const Equipo =(props)=>{
    return <section className="equipo" style={{backgroundColor: props.datos.colorSecundario }} >
        <h3 style={{borderColor:props.datos.colorPrimario}}>{props.datos.titulo}</h3>
        <div className="colaboradores">

        </div>
    </section>
} */

/* esta parte es con destructuracion */
/* ver notas de destructuracion */
const Equipo =(props)=>{

    const {nombre,puesto,foto,equipo,like} = props.colaboradores
    const {titulo,colorPrimario,colorSecundario,id} = props.datos
    const{eliminarColaboradores,actualizrColor,crearLike} = props

    const colorOpaco = { 
        backgroundColor: hexToRgba(colorPrimario, 0.6)
    }

    console.log(props.colaboradores)
    if(props.colaboradores.length>0) {  /* si esta condicion no se cumple no hay un return y al no haber un return no crea el equipo que todas las etiquetas del componente equipo estan dentro del return */
        return  <section className="equipo" style={colorOpaco} >
            <input
                className="input-color"
                type="color"
                value={colorPrimario}
                onChange={(evento)=>{
                    actualizrColor(evento.target.value,id)
                }}
            />
            <h3 style={{borderColor:colorPrimario}}>{titulo}</h3>
            <div className="colaboradores">
            {props.colaboradores.map((colaborador,index)=>{
                return <Colaborador 
                key={index} 
                colaboradores={colaborador}
                colorPrimario={colorPrimario}
                eliminarColaboradores={eliminarColaboradores}
                crearLike={crearLike}
                like={colaborador.like}
                
                />                
                })} 
            
            </div>
        </section>
    }
}

export default Equipo