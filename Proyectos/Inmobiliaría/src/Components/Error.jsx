import logo from "../img/logardo.png"


function Error(){
    return(
        <div className="bg-blue-900 flex flex-col rounded-md p-4 justify-around items-center ">
        <img src={logo} className="h-40 w-40 m-4"/>
        <h1 className="text-7xl font-black text-white m-4 text-center">Sin Stock</h1>
        </div>
    )
}

export default Error