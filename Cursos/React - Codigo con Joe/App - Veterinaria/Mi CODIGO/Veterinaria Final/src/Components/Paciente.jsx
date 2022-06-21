import React from 'react'

const Paciente = ({almacen,setPaciente,setEliminar}) => {

  return (
      <div className='mt-10 w-full bg-white ml-5 py-10 px-5 rounded-xl shadow-xl'>
          <p className='font-bold mb-3 text-grey-700 uppercase'>Nombre:{" "}
              <span className='font-normal normal-case'>{almacen.nombre}</span>
          </p>
          <p className='font-bold mb-3 text-grey-700 uppercase'>Propietario:{" "}
              <span className='font-normal normal-case'>{almacen.propietario}</span>
          </p>
          <p className='font-bold mb-3 text-grey-700 uppercase'>Email:{" "}
              <span className='font-normal normal-case'>{almacen.email}</span>
          </p>
          <p className='font-bold mb-3 text-grey-700 uppercase'>Fecha de ALTA:{" "}
              <span className='font-normal normal-case'>{almacen.fecha}</span>
          </p>
          <p className='font-bold mb-3 text-grey-700 uppercase w-full '>Sintomas:{" "}
              <span className='font-normal normal-case'>
              {almacen.sintomas}
              </span>
          </p>
          <div className=' flex flex-col justify-between mt-6 mx-8 lg:flex-row'>
            <button className="bg-indigo-600 uppercase p-3 mb-5 lg:mb-3 text-white font-bold rounded-lg hover:bg-indigo-900 duration-300"
            onClick={()=>setPaciente({almacen})}
            >editar</button>
            <button className="bg-red-600 uppercase p-3 mb-5 lg:mb-3 text-white font-bold rounded-lg hover:bg-red-900 duration-300"
            onClick={()=>setEliminar({almacen})}
            >eliminar</button>

          </div>
      </div>
  )
}

export default Paciente