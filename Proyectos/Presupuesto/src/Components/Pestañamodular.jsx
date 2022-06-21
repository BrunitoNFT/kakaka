import {useState,useEffect} from 'react'
import '../style.css';

const Pestañamodular = (
  {modularestado,
  setModularestado,
  gastos,
  setGastos,
  editar,
  setEditar
}) => {

  const [nombre,setNombre] = useState("")
  const [precio,setPrecio] = useState(0)
  const [categoria,setCategoria] = useState("")
  const [error,setError] = useState(false)

  useEffect(() => {
    if (editar.nombre!==undefined) {
      console.log("Editando",editar)
      setModularestado(true)
      setNombre(editar.nombre)
      setPrecio(editar.precio)
      setCategoria(editar.categoria)


    }
  }, [editar])
  

  const handleNuevo = (e)=>{
    e.preventDefault()
    setModularestado(false)
  }
  

  const datos ={
    nombre,
    precio,
    categoria
  }

  const idfun = ()=> Math.random().toString(36).substr(2) + Date.now().toString(36)
  const opciones = {
    year : 'numeric',
    month: 'long',
    day: '2-digit'
  }
  const fechanueva = ()=> (new Date()).toLocaleDateString('es-ES',opciones)

  const handlesubmit = (e)=>{
    e.preventDefault()
    if (nombre!="" && precio>=0 && categoria!="") {

        if (editar.nombre!==undefined) {

              var nuevalista = gastos.map((gastoos)=>{

                  if (gastoos.id==editar.id) {
                    gastoos.nombre=nombre
                    gastoos.precio=precio
                    gastoos.categoria=categoria
                    return(gastoos);
                  }else{return gastoos}
              })

              setEditar({})
              setGastos(nuevalista)
              setNombre("")
              setPrecio(0)
              setCategoria("")
              setModularestado(false)

        }else{

            datos.id=idfun();
            datos.fecha=fechanueva();
            setGastos([...gastos,datos])
            setModularestado(false)
            setNombre("")
            setPrecio(0)
            setCategoria("")
            setError(false)

        }
    }else{
      console.log("Todos los campos son obligatorios")
    }
  }

  return (
    <div className={modularestado?"modular-general":"display-none"}>


          <div className='modular-general-sub'>

                      <div className='modular-general-sub-form'>
                                            <form onSubmit={handlesubmit}
                                              className='form-modal'
                                            > 
                                              <label>Nombre Gasto: 
                                              <input 
                                              type="text"
                                              placeholder='EJ: "Netflix"'
                                              value={nombre}
                                              onChange={e=>setNombre(e.target.value)}
                                              >
                                              </input>
                                              </label>
                                              <label>Precio: 
                                              <input 
                                              type="number"
                                              placeholder='EJ: "$200"'
                                              value={precio}
                                              onChange={e=>setPrecio(e.target.value)}
                                              >
                                              </input>
                                              </label>
                                              <label>
                                                Categoría:
                                                <select 
                                                onChange={e=>setCategoria(e.target.value)}
                                                value={categoria}
                                                >

                                                  <option value="">Seleccione Categoría</option>
                                                  <option value="Ahorro">Ahorro</option>
                                                  <option value="Casa">Casa</option>
                                                  <option value="Gastos Varios">Gastos Varios</option>
                                                  <option value="Ocio">Ocio</option>
                                                  <option value="Salud">Salud</option>
                                                  <option value="Suscripciones">Suscripciones</option>
                                                  <option></option>

                                                </select>
                                              </label>
                                              <input type="submit" value="Guardar Cambios"
                                              >
                                              </input>
                                            </form>
                      </div>

                      <div className='cont-modal'>




                      </div>







          </div>
      
      
      
          <div>
                        <form onSubmit={handleNuevo}
                      className='modular-cerrar'
                      >
                        <input type="submit" value="X"
                        >
                        </input>
                      </form>
          </div>
      </div>
  )
}

export default Pestañamodular