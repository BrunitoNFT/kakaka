import { useState,useEffect } from "react";
import '../animation.css';
import Casas from "./Casas";
import Error from "./Error";
import lote1 from "../img/lotes/lote1.jpeg";
import lote2 from "../img/lotes/lote2.jpeg";
import lote3 from "../img/lotes/lote3.jpeg";
import lote4 from "../img/lotes/lote4.jpeg";
import lote5 from "../img/lotes/lote5.jpeg";
import lote6 from "../img/lotes/lote6.jpeg";
import lote7 from "../img/lotes/lote7.jpeg";
import lote8 from "../img/lotes/lote8.jpeg";
import lote9 from "../img/lotes/lote9.jpeg";

const almacen = [{key:"1",nombre:"15,65 x 19,30 Esquina",ubicacion:"Magdalena",img:lote1,precio:"$16.000 USD",direccion:"11 De Septiembre y Brandsen",tipo:"lote"},{key:"2",nombre:"12 x 43.30",ubicacion:"Magdalena",img:lote2,precio:"$18.000 USD",direccion:"11 de septiembre y brandsen",tipo:"lote"},{key:"3",nombre:"12 x 31,30",ubicacion:"Magdalena",img:lote3,precio:"$16.000 USD",direccion:"11 de septiembre y brandsen",tipo:"lote"},{key:"4",nombre:"15,65 x 19,30",ubicacion:"Magdalena",img:lote4,precio:"$16.000 USD",direccion:"11 de septiembre y brandsen",tipo:"lote"},{key:"5",nombre:"11,85 x 29,62",ubicacion:"Magdalena",img:lote5,precio:"$17.500 USD",direccion:"Siupacha y Tapalque",tipo:"lote"},{key:"6",nombre:"11,85 x 29,62",ubicacion:"Magdalena",img:lote6,precio:"$17.500 USD",direccion:"Siupacha y Tapalque",tipo:"lote"},{key:"7",nombre:"11,85 x 29,62",ubicacion:"Magdalena",img:lote7,precio:"$17.500 USD",direccion:"Siupacha y tapalque",tipo:"lote"},{key:"8",nombre:"13,35 x 28,77",ubicacion:"Magdalena",img:lote8,precio:"$17.500 USD",direccion:"Siupacha y Tapalque",tipo:"lote"}]


function Propiedades(){
    const [lugar, setLugar] = useState("Magdalena")
    const [precio, setPrecio] = useState("+$16.000 USD")
    const [tipo, setTipo] = useState("lote")

    const guardarLugar=e=>{
        e.preventDefault()
        setLugar(e.target.value)
    }
    const guardarPrecio=e=>{
        e.preventDefault()
        setPrecio(e.target.value)
    }
    const guardarTipo=e=>{
        e.preventDefault()
        setTipo(e.target.value)
    }

    var a = precio
    var b = a.replace(".","")
    b = b.replace("$","")
    b = b.replace("USD","")
    b = b.replace(" ","")
    b = parseInt(b)
    console.log("b es: ",b)

    var lol=almacen.filter(element=>{
        var y = element.precio
        var k = y.replace(".","")
        k = k.replace("$","")
        k = k.replace("USD","")
        k = k.replace(" ","")
        k = parseInt(k)
        console.log("k es: ",k)
        if(element.ubicacion==lugar && k>=b && element.tipo==tipo){
            return(element)
        }
    })
    if(lol.length==0){
        lol = ["nada"]
        var j = {height:"400px"}
    }
    if(lol.length>0 && lol.length<4){
        var j = {height:"500px"}
    }
    console.log(lol)


    return(
        <div className="w-full bg-white  flex flex-col justify-around mb-10 sombra">

                <form className="p-3   w-full h-78 flex flex-wrap justify-around  border-y-4 border-blue-900">
                    <div className="m-3 p-1 border-4 border-blue-900 rounded-xl sombra">
                            <div className="miravoooo w-full h-12 text-center font-black text-blue-900 text-2xl">
                                Ubicación
                            </div>
                            <div className="flex flex-wrap justify-around item-center ">

                            <input onClick={(e) => guardarLugar(e)}  value="Magdalena" type="submit" className="bg-blue-900 averga m-2 sombra transition-all miravoooo w-49 cursor-pointer e uppercase p-3 rounded-md text-white font-bold"/>
                            <input onClick={(e) => guardarLugar(e)}  value="Atalaya" type="submit" className="bg-blue-900 averga m-2 transition-all w-49 cursor-pointer miravoooo  uppercase p-3 rounded-md  text-white font-bold"/>
                            <input onClick={(e) => guardarLugar(e)}  value="Bavio" type="submit" className="bg-blue-900 averga m-2 transition-all w-49 cursor-pointer miravoooo  uppercase p-3 rounded-md text-white font-bold"/>
                            <input onClick={(e) => guardarLugar(e)}  value="La Plata" type="submit" className="bg-blue-900 averga m-2 transition-all w-49 cursor-pointer miravoooo  uppercase p-3 rounded-md  text-white font-bold"/>
                            </div>
                            </div>
                    <div className="bg-blue-900 rounded-md p-4 m-3 border-2 border-black sombra">
                            <div className=" miravoooo mt-3 w-full h-12 text-center font-black text-white text-2xl">
                                $ Precio $
                            </div>
                            <div className="flex flex-wrap justify-around item-center">
                            <input onClick={(e) => guardarPrecio(e)}  value="+$18.000 USD" type="submit" className="bg-white m-2 transition-all avergaa w-49 miravoooo  cursor-pointer  uppercase p-3 rounded-md text-blue-900 font-bold"/>                    
                            <input onClick={(e) => guardarPrecio(e)}  value="+$17.500 USD" type="submit" className="bg-white m-2 transition-all avergaa w-49 miravoooo cursor-pointer  uppercase p-3 rounded-md text-blue-900 font-bold"/>
                            <input onClick={(e) => guardarPrecio(e)}  value="+$16.000 USD" type="submit" className="bg-white m-2 transition-all avergaa w-49 miravoooo cursor-pointer  uppercase p-3 rounded-md text-blue-900 font-bold"/>                    
                    </div>
                    </div>
                    <div className="m-3 p-1 border-4 border-blue-900 rounded-xl sombra">

                            <div className="miravoooo w-full h-12 text-center font-black text-blue-900 text-2xl">
                                Tipo
                            </div>
                            <div className="flex flex-wrap justify-around item-center">

                            <input onClick={(e) => guardarTipo(e)}  value="lote" type="submit" className="bg-blue-900 averga m-2 sombra miravoooo transition-all w-49 cursor-pointer  uppercase p-3 rounded-md text-white font-bold"/>
                            <input onClick={(e) => guardarTipo(e)}  value="propiedad" type="submit" className="bg-blue-900 m-2 averga miravoooo transition-all w-49 cursor-pointer  uppercase p-3 rounded-md  text-white font-bold"/>
                            </div>
                    </div>
                </form>

            <div className="w-full tamañoy flex flex-wrap overflow-x-scroll justify-around items-center border-b-4 border-blue-900 p-1" style={j}>
            {
            lol.map(lote=>{
                if(lol[0]!="nada"){
                    console.log("Lol es de: ",lol.length)
                    return(<Casas
                        lote={lote}
                        />)
                        
                }
            })
            }
            {
            lol.map(lote=>{
                if (lol[0]=="nada") {
                    return(<Error/>)
                }
                }
            )
            }
            </div>


        </div>

    )
}


export default Propiedades