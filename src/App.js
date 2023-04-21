import './App.css';
import Header from './componentes/header/header';
import Formulario from './componentes/formulario/formulario';
import MiOrg from './componentes/miorg/miorg';
import Equipo from './componentes/equipo/equipi';
import { useState } from "react"
import Footer from './componentes/footer/footer';
import { v4 as uuid } from 'uuid'

function App() {
  //const [nombre,funcionCmabio] = useState(true) aprender usar hooks
  const [mostrarFormulario,actualizarMostrar] = useState(false)
    const cambiarMostrar = ()=>{
        actualizarMostrar(!mostrarFormulario)        
      }
/* registrar colaborador */
  const [colaboradores,setColaboradores] = useState([
    {
      id:uuid(),
      nombre:"enrique",
      puesto:"instructor1",
      foto:"https://github.com/progenrique.png",
      equipo:"Programacion",
      like: true
    },
    {
      id:uuid(),
      nombre:"enrique",
      puesto:"instructor2",
      foto:"https://github.com/progenrique.png",
      equipo:"Front End",
      like: true
    },
    {
      id:uuid(),
      nombre:"enrique",
      puesto:"instructor3",
      foto:"https://github.com/progenrique.png",
      equipo:"Devops",
      like: true
    },
    {
      id:uuid(),
      nombre:"enrique",
      puesto:"instructor4",
      foto:"https://github.com/progenrique.png",
      equipo:"Inovacion Gestion",
      like: true
    },
    {
      id:uuid(),
      nombre:"enrique",
      puesto:"instructor5",
      foto:"https://github.com/progenrique.png",
      equipo:"Inovacion Gestion",
      like: true
    },
    
  ])

  /* lista de equipos */
  const [equipos,setEquipos]=useState([
    {
      id:uuid(),
      titulo:"Programacion",
      colorPrimario: "#57C278" ,
      colorSecundario:"#D9F7E9"
    },
    {
      id:uuid(),
      titulo:"Front End",
      colorPrimario:"#82CFFA",
      colorSecundario:"#E8F8FF"
    },
    {
      id:uuid(),
      titulo:"Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2"
    },
    {
      id:uuid(),
      titulo:"Devops",
      colorPrimario:"#E06B69",
      colorSecundario:"#FDE7E8"
    },
    {
      id:uuid(),
      titulo:"UX y Diseño",
      colorPrimario:"#DB6EBF",
      colorSecundario:"#FAE9F5"
    },
    {
      id:uuid(),
      titulo:"Movil",
      colorPrimario:"#FFBA05",
      colorSecundario:"#FFF5D9"
    },
    {
      id:uuid(),
      titulo:"Inovacion Gestion",
      colorPrimario:"#FF8A29",
      colorSecundario:"#FFEEDF"
    }    
  ])

  const registrarColaborador =(colaborador)=>{ /* en la variable colaborador esta regitrado lo que el formulario recolecto la funcion se mando como un prop y dentrl de esa funcion en el archivo formulario se puso el arreglo que contiene los datos del formulario  */
    setColaboradores([...colaboradores,colaborador])   
  }


  /* eliminar colaboradores  */
  const eliminarColaboradores = (id) =>{
    const nuevosColaboradores =  colaboradores.filter(elemento=>elemento.id !== id)
    setColaboradores(nuevosColaboradores)
  }


  /* actualizar color de equipo */

  const actualizrColor = (color,id) =>{
    const equiposActualizados = equipos.map((equipo)=>{
      if(equipo.id === id){
        equipo.colorPrimario = color
      }     
      return equipo
    })
    setEquipos(equiposActualizados)    
  }

  /* crear equipos */

  const crearEquipos = (titulo,color)=>{

    const nuevoEquipo = [...equipos,{titulo,colorPrimario:color,id:uuid()}]
    
    setEquipos(nuevoEquipo)
  }

  /* crear like  */
  const crearLike = (id) =>{
    const nuevoColaboradores=colaboradores.map((elemento)=>{
      if (elemento.id === id){
        elemento.like=!elemento.like
        console.log(elemento.like)
      }
      
      return elemento;
    })
    setColaboradores(nuevoColaboradores)
  }
  
    
  return (
    <div>
      <Header />
      {/* condicion ? seMuestra : NoSeMuestra */}
      {mostrarFormulario === true ? <Formulario
        registrarColaborador={registrarColaborador}
        equipos={equipos.map((equipo)=>{return equipo.titulo})}
        crearEquipos={crearEquipos}
      /> : <div></div>  }
      


      <MiOrg cambiarMostrar={cambiarMostrar}  />
      
      {
      equipos.map((elemento,posicion)=>{
      return <Equipo 
        key={elemento.id}
        datos={elemento} 
        colaboradores={colaboradores.filter(valor => valor.equipo === elemento.titulo )} /* la variable colaborador tiene todos los datos del formulario se esta haciendo una condicion se esta comparando el titulo del equipo con el equpio que ponemos en el formulario si es correcto lo muestra */
        eliminarColaboradores={eliminarColaboradores}
        actualizrColor={actualizrColor}
        crearLike={crearLike}        
        />
        
        
      })
      }
      
      <Footer/>
          
    </div>
  );
}

export default App;
