import {useState,useEffect} from 'react';
import '../style.css';

function Pestañapresupuesto(
    {presupuesto,
        setPresupuesto,
        presupuestoValido,
        setPresupuestoValido
    }) {

    const [error, setError] = useState(false)

   const handleinputsubmit = e=>{
    e.preventDefault()
    if (presupuesto<0) {
        setError(true)
        setTimeout(()=>setError(false),5000)
    }else{
        setPresupuestoValido(true)
    }
   }
  return (
    <div className={presupuestoValido?'pestañapresupuestotrue':'pestañapresupuestofalse'}>
        <div className='adm'>
            Adminstre Sus Gastos
        </div>
        
        <div className='in'>
            <div className={error?"error":"noerror"}>
                    <span>El Presupuesto no puede ser MENOR a 0</span>
            </div>
            <form onSubmit={handleinputsubmit}>
                <label >
                Ingrese su presupuesto

                <input 
                type='number'
                id='presupuesto'
                onChange={e=>setPresupuesto(Number(e.target.value))}
                value={presupuesto}
                />
                </label>
                <input type="submit"/>
            </form>
        </div>












    </div>
  )
}

export default Pestañapresupuesto