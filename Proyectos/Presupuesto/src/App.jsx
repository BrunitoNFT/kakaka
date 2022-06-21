import { useState,useEffect } from 'react'
import './App.css'
import './normalize.css'
import ahorro from './img/icono_ahorro.svg'
import Pestañapresupuesto from './Components/Pestañapresupuesto'
import Pestañapresupuestoaceptado from './Components/Pestañapresupuestoaceptado'
import Modular from './Components/Pestañamodular'
import Listadogastos from './Components/Listadogastos';
import { jsx } from '@emotion/react'



function App() {
  const [presupuesto,setPresupuesto] = useState(
    Number(localStorage.getItem('presupuesto')) ?? 0
  )
  const [presupuestoGastado,setPresupuestoGastado] = useState(0)
  const [presupuestoValido,setPresupuestoValido] = useState(false)
  const [modularestado,setModularestado] = useState(false)
  const [gastos,setGastos] = useState(
    localStorage.getItem('gastos')? JSON.parse(localStorage.getItem('gastos')) : []
  )
  const [eliminar,setEliminar] = useState({})
  const [editar,setEditar] = useState({})

  useEffect(() => {
    if (eliminar.nombre!==undefined) {
      console.log("eliminando",eliminar)
      var nuevogastos = gastos.filter((gastoos)=>{
        if (gastoos.id!==eliminar.id) {
          return gastoos
        }
      })
      setGastos(nuevogastos)
      setEliminar({})
    }
  }, [eliminar])
  
  useEffect(() => {
    localStorage.setItem('presupuesto',presupuesto ?? 0)
  }, [presupuesto])
  useEffect(() => {
    if ((Number(localStorage.getItem('presupuesto')) ?? 0)>0) {
      setPresupuestoValido(true)
    }
  }, [])
  useEffect(() => {
    localStorage.setItem('gastos',JSON.stringify(gastos) ?? [])
  }, [gastos])

  return (
    <div className='app'>
      <Pestañapresupuesto
      presupuesto={presupuesto}
      setPresupuesto={setPresupuesto}
      presupuestoValido={presupuestoValido}
      setPresupuestoValido={setPresupuestoValido}
      />
      <Pestañapresupuestoaceptado
      presupuestoValido={presupuestoValido}
      setPresupuestoValido={setPresupuestoValido}
      presupuesto={presupuesto}
      setPresupuesto={setPresupuesto}
      modularestado={modularestado}
      setModularestado={setModularestado}
      presupuestoGastado={presupuestoGastado}
      setPresupuestoGastado={setPresupuestoGastado}
      gastos={gastos}
      setGastos={setGastos}

      />
      {gastos.length>0 ?(
        <Listadogastos
        gastos={gastos}
        eliminar={eliminar}
        setEliminar={setEliminar}
        editar={editar}
        setEditar={setEditar}
        />):""
      }
      {presupuestoValido && gastos.length<1?<h1 className='agregue'>Agregue un Nuevo Gasto</h1>:""}
      <Modular
      modularestado={modularestado}
      setModularestado={setModularestado}
      gastos={gastos}
      setGastos={setGastos}
      editar={editar}
      setEditar={setEditar}
      />
    </div>
  )
}

export default App
