
import '../App.css'
import '../animation.css'
import logo from '../img/logardo.png'
import ig from '../img/ig.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faArrowRight, faHouseChimneyCrack, faHome, faContactCard, faMapPin, faMoneyCheckDollar, faShare } from '@fortawesome/free-solid-svg-icons'



function Header(){
return(
    <nav className='w-full h-14 md:h-20  bg-blue-900 border-b-4'>
            <div className=' flex items-center  text-white font-black text-2xl h-full w-full'>
                <div className=' flex justify-around  w-2/5 h-1/2 '>
                    <div className=' animationmenu '>
                    <div className='miravo'>
                    <a href="" target="_blank"><FontAwesomeIcon icon={faHome} className="mr-1"/></a>
                    <a href="" target="_blank" className='hidden md:inline'>Inicio</a>
                    </div>
                    </div>
                    <div className='animationmenu'>
                    <div className='miravo flex'>

                    <a href="https://www.instagram.com/etcheguiapropiedades/?hl=es-la" target="_blank"><img src={ig} className="w-7 mr-2 relative top-1 nada"/></a>
                    <a href="https://www.instagram.com/etcheguiapropiedades/?hl=es-la" target="_blank" className='hidden md:inline'>Redes</a>
                    </div>
                    </div>

                </div>
              <div className=' w-1/5 h-full animationcasa'>
                    <img src={logo} className="m-auto h-full  z-10 miravoo miravoooo   "></img>
              </div>
                <div className='  flex justify-around  w-2/5 h-1/2 '>
                    <div className='animationmenu'>
                    <div className='miravo'>

                    <a href="https://api.whatsapp.com/send?phone=5492221410160&text=Hola%20me%20estoy%20contactando%20desde%20Instagram" target="_blank"><FontAwesomeIcon icon={faContactCard}className="mr-1"/></a>
                    <a href="https://api.whatsapp.com/send?phone=5492221410160&text=Hola%20me%20estoy%20contactando%20desde%20Instagram" target="_blank" className='hidden md:inline'>Contacto</a>
                    </div>

                    </div>
                    <div className='animationmenu'>
                    <div className='miravo'>

                    <a href="https://goo.gl/maps/sBgNk3Es4CQHwjRP7" target="_blank"><FontAwesomeIcon icon={faMapPin} className="mr-1"/></a>
                    <a href="https://goo.gl/maps/sBgNk3Es4CQHwjRP7" target="_blank" className='hidden md:inline'>Ubicación</a>
                    </div>
                    </div>
                </div>
            </div>
        </nav>
)
}
export default Header