import franco from "../img/franco.jpg";
import "../animation.css"
import logo from '../img/logardo.png'
import linke from '../img/linkedin.png'
import wpp from '../img/wpp.png'

function Contactenos(){
    return (
        <div className="sombra">
        <a className="fixed w-20 bottom-2 left-0" href="https://api.whatsapp.com/send?phone=5492221410160&text=Hola%20me%20estoy%20contactando%20desde%20Instagram" target="_blank"><img src={wpp}/></a>
        <div className="bg-blue-900 w-full h-16 border-4 border-white mt-20 sombra">
            <img src={logo} className="h-16 w-16 m-auto"/>

            </div>
        <div className="w-full h-96  border-y-4 border-blue-900 bg-blue-900 flex sombra ">
            <div className="border-4 border-white w-full h-full flex justify-around">
                <div className="border-r-4 w-full flex  justify-around">
                    <h1 className="hidden md:flex text-6xl  w-96 h-80 text-white font-black m-auto text-center">Franco Etcheguia</h1>
                </div>
                <img src={franco} className="h-full w-70 m-auto  border-4 "/>
                <div className="border-l-4 w-full flex">
                    <h1 className="hidden md:flex text-6xl m-auto w-96 h-80 text-white font-black text-center content-center">
                    Martillero Publico
                        </h1>
                </div>
            </div>
        </div>
        <div className=" w-full bg-blue-900 mt-20 p-1 sombra">
        <div className="w-full h-full border-4 border-white flex justify-around p-4">
        <h1 className="text-2xl lg:text-7xl text-white font-black text-center"> Designed by: Bruno Membrado</h1>
        <a href="https://www.linkedin.com/in/bruno-barletta-0a7a1521b/" target="_blank"><img src={linke} className="w-20 h-16 m-2 md:h-20 "/></a>
        </div>
        </div>
        </div>
    )
}



export default Contactenos