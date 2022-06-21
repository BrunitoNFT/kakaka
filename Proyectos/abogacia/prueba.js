var detencion = 12
dias = 420

if (dias > 360 && dias % 30 === 0){
    console.log(Math.floor(dias/360))
    console.log((dias%360)/30)
    detencion = `${Math.floor(dias/360)} año/s y ${Math.floor((dias%360)/30)} mes/meses`

}

console.log(detencion)

var a = 1234

console.log(Math.floor(a/360))
console.log(Math.floor((a%360)/30))
console.log(Math.floor((a%360)%30))




const handleSubmitFinal = (e)=>{
    e.preventDefault()
    setMostrarfechafin(true)
    var e = FInicial.split("-")
    setFechaSalida(e)
    console.log(e)
    console.log(fechaSalida)
    setFechaSalida([(Number(fechaSalida[0]))+ Math.floor(DiasCondena/360),(Number(fechaSalida[1]))+ Math.floor((DiasCondena%360)/30),(Number(fechaSalida[2]))+ Math.floor((DiasCondena%360)%30)])
    if (fechaSalida[2] > 31){
      setFechaSalida([(fechaSalida[0]),(fechaSalida[1]+1),(fechaSalida[2]-30)])
  }
  if (fecha[1] > 12){
    setFechaSalida([(fechaSalida[0]+1),(fechaSalida[1]-12),(fechaSalida[2])])
  }
  
  if((fecha[1] != 1 && fecha[1] != 3 && fecha[1] != 5 && fecha[1] != 7 && fecha[1] != 8 && fecha[1] != 10 && fecha[1] != 12) && fecha[2] > 30){
    setFechaSalida([(fechaSalida[0]),(fechaSalida[1]+1),(fechaSalida[2]-30)])
  }
  if(fecha[2] > 28 && fecha[1] == 2 && fecha[0] % 4 != 0){
    setFechaSalida([(fechaSalida[0]),(fechaSalida[1]+1),(fechaSalida[2]-28)])
  }
  if(fecha[2] > 29 && fecha[1] == 2 && fecha[0] % 4 == 0){
    setFechaSalida([(fechaSalida[0]),(fechaSalida[1]+1),(fechaSalida[2]-29)])
  }
  console.log(fechaSalida)
}