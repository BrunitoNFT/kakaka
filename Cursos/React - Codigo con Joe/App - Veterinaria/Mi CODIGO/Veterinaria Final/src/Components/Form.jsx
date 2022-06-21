import { useState, useEffect } from "react"
import Error from "./Error"
import Exito from "./Exito"

const Formulario = ({almacen,setAlmacen,setPaciente,paciente}) =>{
    const [nombre, setNombre] = useState("")
    const [propietario, setPropietario] = useState("")
    const [email, setEmail] = useState("")
    const [fecha, setFecha] = useState("")
    const [sintomas, setSintomas] = useState("")
    const [error, setError] = useState(2)
    const [id, setId] = useState("")

    useEffect(() => {
      if (Object.keys(paciente).length>0) {
        console.log("editar activado!")
        setNombre(paciente.almacen.nombre)
        setPropietario(paciente.almacen.propietario)
        setEmail(paciente.almacen.email)
        setFecha(paciente.almacen.fecha)
        setSintomas(paciente.almacen.sintomas)
        /* setError(2) */
      }
    }, [paciente])

    const generarId = () => Math.random().toString(36).substr(2)+Date.now().toString(36)

    const motor = () =>{

        if(paciente.almacen===undefined){


                    const orden ={
                        nombre,
                        propietario,
                        email,
                        fecha,
                        sintomas,
                        id : generarId()
                    }
                    setAlmacen([...almacen,orden])
                    setNombre(""),
                    setPropietario(""),
                    setEmail(""),
                    setFecha(""),
                    setSintomas(""),
                    setError(1)

        }else{
            const nuevoalmacen = almacen.map( object=>{
                if (object.id==paciente.almacen.id) {
                    console.log("El similar es: ",object)
                    object = {
                        nombre:nombre,
                        propietario:propietario,
                        email:email,
                        fecha:fecha,
                        sintomas:sintomas,
                        id : paciente.almacen.id
                    }
                }return object;
            })      
                    console.log("el nuevo almacen es:",nuevoalmacen)
                    setAlmacen(nuevoalmacen)
                    setNombre("")
                    setPropietario("")
                    setEmail("")
                    setFecha("")
                    setSintomas("")
                    setError(2)
                    setPaciente({})
        }
    }

    const guardar = (e)=>{
        e.preventDefault()
        if ([nombre,propietario,email,fecha,sintomas].includes("")){{setError(0)}}else{motor()}
    }



    return(
        <div className="md:w-1/2 lg:w-2/5">
            <h2 className="font-black text-3xl text-center">
                Seguimientos Pacientes
            </h2>

            <p className="text-xl mt-5 text-center mb-10 ">
                Añade Pacientes y {""}
                <span className=" text-indigo-600 font-bold ">
                    Administralos
                </span>
            </p>
            <form
            className="bg-white shadow-xl rounded-lg py-10 px-5 mb-10"
            onSubmit={e => guardar(e)}>
                <div className="mb-5">
                {error==0 ? <Error></Error> :error==1?<Exito></Exito>:<div></div>}
                    <label
                    className="block text-grey-700 uppercase font-bold"
                    htmlFor="mascota"
                    >
                        Nombre Mascota
                    </label>
                    <input
                    id="mascota"
                    type="text"
                    placeholder="Nombre de la mascota"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <label
                    className="block text-grey-700 uppercase font-bold"
                    htmlFor="propietario"
                    >
                        Nombre Propetario
                    </label>
                    <input
                    id="propietario"
                    type="text"
                    placeholder="Nombre del Propietario"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    value={propietario}
                    onChange={(e) => setPropietario(e.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <label 
                    className="block text-grey-700 uppercase font-bold"
                    htmlFor="email"
                    >
                        Email
                    </label>
                    <input
                    id="email"
                    type="email"
                    placeholder="Email Contacto Propietario"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <label 
                    className="block text-grey-700 uppercase font-bold"
                    htmlFor="fecha"
                    >
                        Fecha
                    </label>
                    <input
                    id="fecha"
                    type="date"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    value={fecha}
                    onChange={(e) => setFecha(e.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <label 
                    className="block text-grey-700 uppercase font-bold"
                    htmlFor="sintomas"
                    >
                        Sintomas
                    </label>
                    <textarea
                    placeholder="Describa los Sintomas..."
                    id="sintomas"
                    type="textarea"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    value={sintomas}
                    onChange={(e) => setSintomas(e.target.value)}
                    />
                </div>
                <input
                type="submit"
                className="bg-indigo-600 transition-all cursor-pointer hover:bg-indigo-700 uppercase w-full p-3 rounded-md text-white font-bold"
                value={paciente.almacen===undefined?"Agregar Paciente":"Editar paciente"}
                />
            </form>
        </div>
    )
}

export default Formulario