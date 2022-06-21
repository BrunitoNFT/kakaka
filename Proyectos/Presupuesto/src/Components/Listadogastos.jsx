import React from 'react'
import '../style.css';
import Listadogastosjunior from './Listadogastosjunior';

const Listadogastos = ({
  gastos,
  eliminar,
  setEliminar,
  editar,
  setEditar
}) => {
  return (
    <div className='Listadogastos'>
        <h1>Listado de Gastos</h1>
        {gastos.map((gastosmap)=>{
            return(<Listadogastosjunior 
              gastosmap={gastosmap}
              setEliminar={setEliminar}
              setEditar={setEditar}
              />);
        })}
        
        </div>
  )
}

export default Listadogastos