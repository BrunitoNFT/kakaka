import './Style.css'
import './Input.css'
import { useState,useEffect} from 'react'
import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import CheckIcon from '@mui/icons-material/Check';


function App() {

  const [fdetencion, setFdetencion] = useState("dd/mm/aaaa")
  const [fliberacion, setFliberacion] = useState("dd/mm/aaaa")
  const [diasdetenido, setDiasdetenido] = useState(0)
  const [diasdetenidofinal, setDiasdetenidofinal] = useState( JSON.parse(localStorage.getItem('diasdetenido')) ?? "")

  const [diassimples, setDiassimples] = useState("")

  const [error, setError] = useState([false,"Todos los campos son obligatorios"])

  const [DCondena,setDCondena] = useState()
  const [MCondena,setMCondena] = useState()
  const [ACondena,setACondena] = useState()
  const [errorC, setErrorC] = useState([false,"Todos los campos son obligatorios"])

  const [DiasCondena,setDiasCondena] = useState(JSON.parse(localStorage.getItem('diascondena')) ?? "")

  const [tick, setTick] = useState(false)
  const [tick2, setTick2] = useState(false)
  const [tick3, setTick3] = useState(false)

  const [FInicial,setFInicial] = useState(JSON.parse(localStorage.getItem('fechaini')) ?? 0)

  const [Calculofin,setCalculofin] = useState(0)

  const [mostrarfechafin,setMostrarfechafin] = useState(false)

  const [fechaSalida,setFechaSalida] = useState([])

  const [errorFF, setErrorFF] = useState([false,"Todos los campos son obligatorios"])




  useEffect(() => {
   localStorage.setItem('diasdetenido',JSON.stringify(diasdetenidofinal))
  }, [diasdetenidofinal])
  useEffect(() => {
    localStorage.setItem('diascondena',JSON.stringify(DiasCondena))
   }, [DiasCondena])
   useEffect(() => {
    localStorage.setItem('fechaini',JSON.stringify(FInicial))
   }, [FInicial])
  

  var aFecha1
  var fecha1
  var aFecha2
  var fecha2
  var fecha3

  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log("Enviando Info")
    if ((fliberacion == "dd/mm/aaaa" || fdetencion == "dd/mm/aaaa" || fliberacion == "" || fdetencion == "") && (diassimples==="" || diassimples<0) ) {
      setError([true,"Todos los campos son obligatorios."])
      setTimeout(()=>{setError([false,"La suma de fechas debe ser mayor a 0."])},4000)
    } else {
      
      aFecha1 = fdetencion.split('-')
      aFecha1[0] = Number(aFecha1[0]*360)
      aFecha1[1] = Number(aFecha1[1]*30)
      aFecha1[2] = Number(aFecha1[2])
      console.log(aFecha1)
      fecha1 = aFecha1.reduce((a,b) => a+b, 0)
  
      aFecha2 = fliberacion.split('-')
      console.log(aFecha1)
      aFecha2[0] = Number(aFecha2[0]*360);
      aFecha2[1] = Number(aFecha2[1]*30);
      aFecha2[2] = Number(aFecha2[2])
      fecha2 = aFecha2.reduce((a,b) => a+b, 0)
      console.log(fecha1,fecha2)
      fecha3 = fecha2-fecha1
      console.log(fecha3)
      if (fecha3<=0) {
        setError([true,"La fecha de liberación no puede ser igual o menor a la de detención."])
        setTimeout(()=>{setError([false,"La suma de fechas debe ser mayor a 0."])},4000)
      }else{

        setDiasdetenido( diasdetenido + fecha3)
        setDiasdetenidofinal(diasdetenido + fecha3)
        setTick2(true)
        if (diassimples>0) {
          setDiasdetenidofinal(diassimples)
        }
        setFdetencion("dd/mm/aaaa")
        setFliberacion("dd/mm/aaaa")
        setError(false)
        setDiasdetenido(0)
        setTimeout(()=>{setTick2(false)},4000)
            }
    }

  }

 useEffect(() => {
  (DiasCondena>0 && diasdetenidofinal>0?(setCalculofin(DiasCondena-diasdetenidofinal)):"" )
 }, [DiasCondena])
 useEffect(() => {
  (DiasCondena>0 && diasdetenidofinal>0?(setCalculofin(DiasCondena-diasdetenidofinal)):"" )
 }, [diasdetenidofinal])
 

  const handleSubmitMonto = (e) =>{
    e.preventDefault()
    if (DCondena===undefined && MCondena==undefined && ACondena==undefined ) {
      setErrorC([true,"La suma de fechas debe ser mayor a 0."])
      setTimeout(()=>{setErrorC([false,"La suma de fechas debe ser mayor a 0."])},4000)
    }else{
      if (DCondena<1 && MCondena<1 && ACondena<1) {
        setErrorC([true,"La suma de fechas debe ser mayor a 0."])
        setTimeout(()=>{setErrorC([false,"La suma de fechas debe ser mayor a 0."])},4000)
      }else{
/*         console.log((Number(DCondena),(MCondena==!undefined?Number(MCondena)*30:0),(ACondena==!undefined>0?Number(ACondena)*360:0))
 */        setDiasCondena( (DCondena!==undefined?Number(DCondena):0)+ (MCondena!==undefined?Number(MCondena)*30:0) + (ACondena!==undefined?Number(ACondena)*360:0) )
        setTick(true)
        setTimeout(()=>{setTick(false)},4000)
      }

    }
  }

  const handleMas = (e) => {
    e.preventDefault()
    setDiasdetenidofinal(Number(diasdetenidofinal)+1)
  }
  const handleMenos = (e) => {
    e.preventDefault()
    setDiasdetenidofinal(Number(diasdetenidofinal)>0?Number(diasdetenidofinal)-1:diasdetenidofinal)
  }
  const handleReiniciar = (e) => {
    e.preventDefault()
    var r = confirm("¿Desea reiniciar los dias de Detención?")
    if (r===true) {
      setDiasdetenidofinal(0)
    }
  }

  const handleMas1 = (e) => {
    e.preventDefault()
    setDiasCondena(DiasCondena+1)
  }
  const handleMenos1 = (e) => {
    e.preventDefault()
    setDiasCondena(DiasCondena>0?DiasCondena-1:DiasCondena)
  }
  const handleReiniciar1 = (e) => {
    e.preventDefault()
    var r = confirm("¿Desea reiniciar la condena?")
    if (r===true) {
      setDiasCondena(0)
    }
  }
 const handleSubmitFinal = (e)=>{
  e.preventDefault()
  if (FInicial=="") {
    setErrorFF([true,"Es Obligatoria la fecha inicial."])
    setTimeout(()=>{setErrorFF([false,"La suma de fechas debe ser mayor a 0."])},4000)
  }else if (diasdetenidofinal<1 || DiasCondena<1) {
    setErrorFF([true,"Es necesario el periodo de detención y un monto de condena."])
    setTimeout(()=>{setErrorFF([false,"La suma de fechas debe ser mayor a 0."])},4000)
  } else {
    setErrorFF([false,"Es necesario el periodo de detención y un monto de condena."])

    setMostrarfechafin(true)
    var fecha=[0,0,0]
    fecha = FInicial.split("-")
    console.log(fecha)
    fecha[0] = (Number(fecha[0]))+ Math.floor(Calculofin/360)
    fecha[1] = (Number(fecha[1]))+ Math.floor((Calculofin%360)/30)
    fecha[2] = (Number(fecha[2]))+ Math.floor((Calculofin%360)%30)
    if (fecha[2] > 31){
      fecha[1]++
      fecha[2] -= 30
  }
  if (fecha[1] > 12){
    fecha[0]++
    fecha[1] -= 12
  }
  
  if((fecha[1] != 1 && fecha[1] != 3 && fecha[1] != 5 && fecha[1] != 7 && fecha[1] != 8 && fecha[1] != 10 && fecha[1] != 12) && fecha[2] > 30){
    fecha[1]++
    fecha[2] -= 30
  }
  if(fecha[2] > 28 && fecha[1] == 2 && fecha[0] % 4 != 0){
    fecha[1]++
    fecha[2] -= 28
  }
  if(fecha[2] > 29 && fecha[1] == 2 && fecha[0] % 4 == 0){
    fecha[1]++
    fecha[2] -= 29
  }
  setFechaSalida(fecha)
  }

 }

  return (
    <div className="bg-gray-200 w-screen h-full flex flex-col">
      
      <div className='font-black text-7xl text-indigo-600 w-full h-full flex justify-center text-shadow text-center mt-8'>
        Sistema Computo De Pena
      </div>
      <div className='w-full h-full mt-20 flex   flex-wrap justify-around items-start'>

            <form className=' w-96 shadow-xl text-center p-3 mt-5 flex flex-col justify-center items-center flex-wrap' onSubmit={handleSubmit}>

              <div className='text-indigo-600 font-black text-4xl uppercase mb-5 text-shadow-sm'>Periodo de detención
              </div>

              <div className={error[0]?'border-l-4 border-red-800 h-15 font-bold w-80 flex justify-center items-center text-black mt-3 mb-3 bg-red-300':"hidden  :"}>{error[1]}
              </div>

              <label htmlFor='fecha-detencion' className='font-bold w-80 text-center text-xl '>Ingrese la Fecha de Detención: </label>
              <input onChange={e=>setFdetencion(e.target.value)} value={fdetencion} type="date" placeholder='Ingrese Fecha' id='fecha-detencion' className='w-80 p-2 h-10 text-xl border-2 border-indigo-600 rounded-md mt-3 mb-3'>
              </input>

              <label htmlFor='fecha-liberacion' className='font-bold text-center text-xl w-80 '>Ingrese la fecha de libertad, sentencia o computo: </label>
              <input onChange={e=>setFliberacion(e.target.value)} value={fliberacion} type="date" placeholder='Ingrese Fecha' id='fecha-liberacion' className='w-80 h-10 text-xl p-2 border-2 border-indigo-600 rounded-md mt-3'>
              </input>

              <div className='w-80 h-10 border-4 border-y-indigo-600 mt-5 font-bold flex justify-center items-center text-xl'> O ingrese dias</div>

              
              <input onChange={e=>setDiassimples(e.target.value)} value={diassimples} type="number" placeholder='Ej: 4 Días.' id='fecha-detencion' className='p-2 w-80 h-10 text-xl border-2 border-indigo-600 rounded-md mt-3 mb-3'>
              </input>

              <input type="submit" value={`Acumular Fechas ${tick2?"✔️":""}`} className="bg-indigo-600 hover:bg-indigo-800 hover:transition-  focus:outline-none focus:ring focus:ring-white w-80 h-10 rounded-md mt-5 font-bold text-white uppercase">
              </input>
              
              
              <div className={diasdetenido>0 ?'w-80 mt-3 bg-white font-bold rounded-md p-2 text-indigo-600 shadow-xl':"hidden"}>
                Dias De Detención Acumulados: {diasdetenido}
              </div>

              <div className={diasdetenidofinal>0 ?'w-80 mt-3 bg-white font-bold rounded-md p-2 text-indigo-600 shadow-xl':"hidden"}>
                  Periodo de detención: <span className='uppercase font-black text-xl'>{diasdetenidofinal } Dias </span>

                  <div className='w-full mt-3 flex justify-around border-b-4 border-indigo-600 p-3'>
                  <button onClick={(e)=>handleMas(e)} className="bg-indigo-600 h-7 w-7 rounded-md font-bold text-xl text-white text-center "><AddIcon className='relative bottom-0.5'/></button>
                  <button onClick={(e)=>handleMenos(e)} className="bg-indigo-600 h-7 w-7 rounded-md font-bold text-xl text-white text-center "><RemoveIcon className='relative bottom-0.5'/></button>
                  <button onClick={(e)=>handleReiniciar(e)} className="bg-indigo-600 h-7 w-7 rounded-md font-bold text-xl text-white text-center "><DeleteOutlineIcon className='relative bottom-0.5'/></button>
                  </div>

                </div>
              

            </form>

            <form className=' w-96 shadow-xl text-center p-3 mt-5 flex flex-col justify-center content-center flex-wrap' onSubmit={handleSubmitMonto}>

              <div className='text-indigo-600 w-80 font-black text-4xl uppercase mb-5 text-shadow-sm'>Monto de la Condena
              </div>

              <div className={errorC[0]?'border-l-4 border-red-800 h-15 font-bold w-80 flex justify-center items-center text-black mt-3 mb-3 bg-red-300':"hidden  :"}>{errorC[1]}
              </div>

              <label htmlFor='fecha-y' className='font-bold text-center w-80 text-xl '>Ingrese Los Dias de Condena: </label>
              <input onChange={e=>setDCondena(e.target.value)} value={DCondena} type="number" placeholder='Ej: 4 Días.' id='fecha-y' className='p-2 w-80 h-10 text-xl border-2 border-indigo-600 rounded-md mt-3 mb-3'>
              </input>


              <label htmlFor='fecha-b' className='font-bold text-center text-xl w-80 '>Ingrese Los Meses de Condena: </label>
              <input onChange={e=>setMCondena(e.target.value)} value={MCondena} type="number" placeholder='Ej: 6 Meses.' id='fecha-b' className='mb-3 p-2 w-80 h-10 text-xl border-2 border-indigo-600 rounded-md mt-3'>
              </input>

              <label htmlFor='fecha-a' className='font-bold text-center text-xl w-80'>Ingrese Los Años de Condena: </label>
              <input onChange={e=>setACondena(e.target.value)} value={ACondena} type="number" placeholder='Ej: 22 Años.' id='fecha-a' className='p-2 w-80 h-10 text-xl border-2 border-indigo-600 rounded-md mt-3 mb-3'>
              </input>
              
              <input type="submit" value={`Actualizar Condena ${tick?"✔️":""}`} className="bg-indigo-600 w-80 h-10 rounded-md mt-5 font-bold text-white uppercase hover:bg-indigo-800 hover:transition-  focus:outline-none focus:ring focus:ring-white">
              </input>
              
          

              <div className={DiasCondena>0 ?'mt-3 bg-white font-bold rounded-md p-2 text-indigo-600 shadow-xl w-80':"hidden"}>
                  Condena: <span className='uppercase font-black text-xl'>{DiasCondena} Dias </span>
                  
                  <div className=' flex justify-around border-b-4 border-indigo-600 p-2 w-full mt-3'>
                      
                      <button onClick={(e)=>handleMas1(e)} className="bg-indigo-600 h-7 w-7 rounded-md font-bold text-xl text-white text-center "><AddIcon className='relative bottom-0.5'/></button>
                      <button onClick={(e)=>handleMenos1(e)} className="bg-indigo-600 h-7 w-7 rounded-md font-bold text-xl text-white text-center "><RemoveIcon className='relative bottom-0.5'/></button>
                      <button onClick={(e)=>handleReiniciar1(e)} className="bg-indigo-600 h-7 w-7 rounded-md font-bold text-xl text-white text-center "><DeleteOutlineIcon className='relative bottom-0.5'/></button>
                  
                      
                  </div>
                  
                </div>
            </form>

            <form className='  w-96 shadow-xl text-center p-3 mt-5 flex flex-col justify-center items-center flex-wrap' onSubmit={handleSubmitFinal}>

              <div className='text-indigo-600 w-80 font-black text-4xl uppercase mb-5 text-shadow-sm'>Calculo final
              </div>

              <div className={errorFF[0]?'border-l-4 border-red-800 h-15 font-bold w-80 flex justify-center items-center text-black mt-3 mb-3 bg-red-300':"hidden  :"}>{errorFF[1]}
              </div>

              <label htmlFor='fecha-ini' className='font-bold text-center text-xl w-80 '>Ingrese fecha inicial: </label>
              <input onChange={e=>setFInicial(e.target.value)} value={FInicial} type="date" id='fecha-ini' className='p-2 w-80 h-10 text-xl border-2  border-indigo-600 rounded-md  mt-3 mb-3'>
              </input>

                

                

                <div className={DiasCondena>0 && diasdetenidofinal>0?'mt-3 bg-white font-bold rounded-md p-2 w-80 text-indigo-600 shadow-xl':"hidden"}>
                  Condena - Periodo de detención =

                  <div className='flex justify-around border-b-4 border-indigo-600 p-3 w-full'>
                  <span className='uppercase font-black text-xl'>{Calculofin} Dias </span>
                  </div>

                </div>

                <div className={DiasCondena>0 && diasdetenidofinal>0 && mostrarfechafin?'mt-3 bg-white w-80 font-bold rounded-md p-2 text-indigo-600 shadow-xl':"hidden"}>
                  Fecha de Salida:

                  <div className='flex justify-around border-b-4 border-indigo-600 w-full p-3'>
                    <span className='uppercase font-black text-xl'>{fechaSalida[2]}/{fechaSalida[1]}/{fechaSalida[0]} </span>
                  </div>

                </div>
              
              <input type="submit" value={`cALCULAR FECHA SALIDA ${tick3?"✔️":""}`} className="bg-indigo-600 w-80 hover:bg-indigo-800 hover:transition-  focus:outline-none focus:ring focus:ring-white h-10 rounded-md mt-5 font-bold text-white uppercase">
              </input>

              
             
            </form>

        <div>

        </div>

      </div>
    </div>
  )
}

export default App
