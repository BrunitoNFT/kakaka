import google from "../img/ubiación inmobiliaría.png"
import "../animation.css"

function Donde(){

    return(
        <div className="w-full mt-20 border-y-4 border-blue-900 flex uwu mb-10 flex-wrap items-center justify-around sombra">
                <div className="flex justify-center  border-white tamaño">

                    <img src={google} className="h-full rounded-md miravooo sombra w-full" ></img>
                </div>
                <div>

                    <div className=" flex flex-col justify-around mx-auto ">
                        <div className=" font-black text-6xl w-96  text-blue-900 mb-5 text-center miravooo  ">
                            
                            Magdalena
                    </div>
                    <div className="font-black text-6xl mb-5  text-white text-center miravooo sombratexto ">
                            Chacabuco 850
                        </div>
                    <a href="https://goo.gl/maps/sBgNk3Es4CQHwjRP7" target="_blank" className="w-60 h-16 rounded-2xl mb-5 bg-blue-900 font-black text-white text-2xl mx-auto flex justify-center items-center border-4 sombratexto miravoooo border-white ">¿Como llegar?</a>
                    </div>
                </div>
        </div>

    )
}




export default Donde


