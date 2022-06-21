import {useState,useEffect} from 'react';
import '../style.css';
import {CircularProgressbar,buildStyles} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Pestañapresupuestoaceptado = (
  {presupuesto,
    presupuestoValido,
    setPresupuestoValido,
    setPresupuesto,
    modularestado,
    setModularestado,
    presupuestoGastado,
    setPresupuestoGastado,
    gastos,
    setGastos,
    eliminar,
    setEliminar
  }) => {

    const [porcentaje, setPorcentaje] = useState(0)

  const handleCerrar = (e)=>{
    e.preventDefault()
    if (confirm("¿Desea reiniciar el presupuesto?")) {
      setPresupuestoValido(false)
      setPresupuesto(0)
      setGastos([])
      
    }
  }
  const handleNuevo = (e)=>{
    e.preventDefault()
    setModularestado(true)
  }

  useEffect(() => {
    var totalGastado = gastos.reduce((total,gasto)=>total+Number(gasto.precio),0)
    console.log(totalGastado)

    setPresupuestoGastado(totalGastado)
    
  }, [gastos])
  
  useEffect(() => {
    if (presupuestoGastado!==0) {
      
      var porc = (presupuestoGastado/presupuesto)*100
      setTimeout(()=>{setPorcentaje(Math.round(porc) )},1000)
    }else{
      setPorcentaje(0)
    }
  }, [presupuestoGastado])
  
  console.log(porcentaje)
  return (
    <div className={presupuestoValido?'pestañapresupuestoaceptado':'pestañapresupuestotrue'}>
        


        <div className={porcentaje<=100?'decoracion':'decoracion rojo-back'}>

            <div className='pestañapresupuestoaceptado-central'>

                  <div className={porcentaje<=100?'porcentaje':'porcentaje rojo '}>
                  <CircularProgressbar
                  value={porcentaje}
                  text={porcentaje+`%`}
                  styles={buildStyles({
                    pathColor : porcentaje>100?"rgb(214, 49, 27)":"rgb(19, 132, 224)",
                    textColor: porcentaje>100?"rgb(214, 49, 27)":"rgb(19, 132, 224)",
                  })}
                  />
                  </div>

                  <div className='datos'>
                      <div >
                      Presupuesto: <span>${presupuesto}</span>
                      </div>
                      <div className={porcentaje>100?"red":""}>
                      Dinero Gastado: <span>${presupuestoGastado}</span>
                      </div>
                      <div >
                      Dinero Restante: <span>${presupuesto-presupuestoGastado}</span>
                      </div>
                  </div>
            </div>
        </div>


        <form onSubmit={handleCerrar}
        className='pestañapresupuestoaceptado-volver'
        >
          <input type="submit" value="reiniciar"
          >
          </input>
        </form>


        <form onSubmit={handleNuevo}
        className='pestañapresupuestoaceptado-nuevo'
        >
          <input type="submit" value="nuevo gasto" className={porcentaje<=100?'rojo-back':'rojo-back'}
          >
          </input>
        </form>




    </div>
  )
}

export default Pestañapresupuestoaceptado