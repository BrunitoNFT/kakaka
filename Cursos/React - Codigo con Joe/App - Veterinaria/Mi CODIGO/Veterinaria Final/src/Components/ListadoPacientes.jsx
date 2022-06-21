import React from 'react'
import Paciente from './Paciente'


const ListadoPacientes = ({almacen,setPaciente, setEliminar}) => {
  return (
    <div className="md:w-1/2 lg:w-/5 mx-auto ">
      {almacen.length>0?
      <div className="md:h-screen overflow-x-hidden p-9">
      <h2 className='font-black text-3xl text-center'>Listado Pacientes</h2>
      <p className='text-xl text-center my-5   '>
      Admnistra tus { }
      <span className='text-indigo-600 font-bold'>Pacientes y Citas</span>
      </p>
      <div className="md:h-screen overflow-x-hidden p-9">
      {almacen.map(holu=>{
        return(
          <Paciente
          almacen={holu}
          setPaciente={setPaciente}
          setEliminar={setEliminar}
          key={holu.id}

          />
        )
      })}


      </div>
      </div>
      
      
      :<div className="md:h-screen overflow-x-hidden p-9">
      <h2 className='font-black text-3xl text-center'>Ingrese aqui su Listado</h2>
      <p className='text-xl text-center my-5   '>
      Escriba sus primeros { }
      <span className='text-indigo-600 font-bold'>Pacientes y Citas</span>
      </p>
      <div className='bg-white shadow-xl rounded-lg py-10 px-5 mb-10'>

      <h2 className='font-black text-3xl text-center'>⚪ Con un solo click</h2>
      <p className='text-xl text-center my-5   '>
      ⚪ Una Organización { }
      <span className='text-indigo-600 font-bold'>EXITOSA, de tus clientes</span>
      </p>



      </div>
      </div>}

      {/* {almacen.map(holu=>{
        return(
          <Paciente
          almacen={holu}
          />
        )
      })} */}


      

    </div>
  )
}

export default ListadoPacientes



{/* <div className="md:w-1/2 lg:w-/5 mx-auto ">

<h2 className='font-black text-3xl text-center'>Listado Pacientes</h2>
<p className='text-xl text-center my-5   '>
  Admnistra tus { }
  <span className='text-indigo-600 font-bold'>Pacientes y Citas</span>
</p>
<div className="md:h-screen overflow-x-hidden p-9"> */}