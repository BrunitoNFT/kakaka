import React from 'react'

import Iahorro from '../img/icono_ahorro.svg';
import Icasa from '../img/icono_casa.svg';
import Icomida from '../img/icono_comida.svg';
import Igastos from '../img/icono_gastos.svg';
import Iocio from '../img/icono_ocio.svg';
import Isalud from '../img/icono_salud.svg';
import Isuscripciones from '../img/icono_suscripciones.svg';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import {
        LeadingActions,
        SwipeableList,
        SwipeableListItem,
        SwipeAction,
        TrailingActions,
      } from 'react-swipeable-list';
import '../style.css';

const Listadogastosjunior = ({gastosmap,setEliminar,setEditar}) => {
    
    const dic={
        Ahorro : Iahorro,
        Casa : Icasa,
        Comida :Icomida,
        Gastos : Igastos,
        Ocio : Iocio,
        Salud : Isalud,
        Suscripciones : Isuscripciones
    }

    var categoria = gastosmap.categoria;
    console.log("categoria: ", categoria)

    const handleEliminar =(e)=>{
        if (e!==undefined) {
        e.preventDefault()
        }
        setEliminar(gastosmap)
    }
    const handleEditar =(e)=>{
        if (e!==undefined) {
        e.preventDefault()
        }
        setEditar(gastosmap)
    }

    const leadingActions = () => (
        <LeadingActions>
          <SwipeAction onClick={() => handleEditar()}>
            Editar
          </SwipeAction>
        </LeadingActions>
      );
      
      const trailingActions = () => (
        <TrailingActions>
          <SwipeAction
            onClick={() => handleEliminar()}
          >
            Eliminar
          </SwipeAction>
        </TrailingActions>
      );

  return (
        <SwipeableList>
        <SwipeableListItem
          leadingActions={leadingActions()}
          trailingActions={trailingActions()}
        >
    <div className='Listadogastosjunior'>



                                        
                        




        <div className='Listadogastosjunior-datos'>


                        <div className='Listadogastosjunior-cont-prop'>

                                        <div className='Listadogastosjunior-cont-prop-precio'>

                                                <span className='verde'>$</span>{gastosmap.precio}

                                        </div>

                                <div className='Listadogastosjunior-cont-prop-1ro'>

                                        <div className='Listadogastosjunior-cont-prop-categoria'>

                                                {gastosmap.categoria}

                                        </div>

                                        <div className='Listadogastosjunior-cont-prop-nombre'>

                                                {gastosmap.nombre}

                                        </div>


                                        <div className='Listadogastosjunior-cont-prop-fecha'>

                                                {gastosmap.fecha}

                                        </div>
                                </div>


                        </div>
                        <div className='Listadogastosjunior-cont-img'>

                                 <img src={dic[categoria]}/>

                        </div>
                           <div className='opciones'>
                                                <form onSubmit={handleEditar} 
                                                                
                                                                >
                                                                        
                                                                        <button type="submit"
                                                                        >
                                                                                <EditIcon/>
                                                                        </button>
                                                                </form>
                                                        <form onSubmit={handleEliminar} 

                                                        >

                                                                <button type="submit"
                                                                >
                                                                        <DeleteIcon/>
                                                                </button>
                                                        </form>
                           </div>
        </div>







    </div>
    </SwipeableListItem>
        </SwipeableList>
  )
}

export default Listadogastosjunior