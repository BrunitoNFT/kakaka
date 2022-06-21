import '../animation.css'


function Casas({lote}){
    console.log(lote.img)
    return (
        <div className="w-96 h-96  m-4  sombra overflow-hidden ">
            <img src={lote.img} className="h-96"/>
            <div className="relative bottom-28 bg-blue-900 w-full h-32 bg-opacity-70">
            <h1 className="h-10 w-full text-center relative top-1  font-black text-white text-3xl ">{lote.precio}</h1>
            <h1 className=" w-full text-center  h-10 font-black relative top-1 text-white text-xl ">{lote.nombre}</h1>
            <h1 className=" relative bottom-2 h-10 w-full text-center font-black text-white text-xl mb-2 ">{lote.direccion}</h1>
            </div>
        </div>
    )
}

export default Casas