import './App.css'
import Header from "./Components/Header";
import Formulario from './Components/Form';
import ListadoPacientes from './Components/ListadoPacientes';
import { useState,useEffect } from 'react';

let cont = 0;

function App() {

  const [almacen, setAlmacen]= useState([])
  const [paciente, setPaciente]= useState({})
  const [eliminar, setEliminar]= useState()

  useEffect(() => {

     /*   if (localStorage.getItem("almacen")!==undefined) { */
        const contenido = JSON.parse(localStorage.getItem("almacen"))
        if(contenido!==undefined && contenido!==null&&cont==0){
          console.log(contenido)
          setAlmacen(contenido)
          cont=1;
        }else{
          console.log("Tipo de storage nulo: ",contenido)
        }
      
  }, []);


  useEffect(() => {
    localStorage.setItem("almacen",JSON.stringify(almacen));

  }, [almacen])



  if (eliminar!==undefined) {



    const nuevoalmacen = almacen.filter( object=>object.id!==eliminar.almacen.id)
    console.log(nuevoalmacen)
    setAlmacen(nuevoalmacen)
    setEliminar(undefined)
  }

  return (
    <div className="container mx-auto mt-20">
      <Header/>
      <div className='mt-14 md:flex p-5'>
        <Formulario
        almacen={almacen}
        setAlmacen={setAlmacen}
        setPaciente={setPaciente}
        paciente={paciente}
        eliminar={eliminar}
        setEliminar={setEliminar}
        />
        <ListadoPacientes
        almacen={almacen}
        setPaciente={setPaciente}
        setEliminar={setEliminar}
        />
      </div>
    </div>
  )
}

export default App
