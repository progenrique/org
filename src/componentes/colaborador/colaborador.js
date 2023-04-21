import "./colaborador.css"
import{AiFillCloseCircle,AiFillHeart,AiOutlineHeart} from "react-icons/ai"

const Colaborador = (props)=>{


    const {nombre,puesto,foto,equipo,id}= props.colaboradores
    const {colorPrimario, eliminarColaboradores,crearLike,like} = props

    return <div className="colaborador" >
        <AiFillCloseCircle className="eliminar" onClick={()=> eliminarColaboradores(id)} /> 
        <div className="encabezado" style={{backgroundColor:colorPrimario}}>
            <img src={foto} atl={nombre} />
        </div>
        <div className="info">
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>
            
            {like === true ?  <AiFillHeart color="red" onClick={()=>crearLike(id) } /> : <AiOutlineHeart onClick={()=>crearLike(id) } />}
            
            

        </div>
    </div>
}

export default Colaborador