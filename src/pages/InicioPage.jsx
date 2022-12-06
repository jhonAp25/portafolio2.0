import React from 'react'
import perfil from '../utils/image/perfil.png'

const InicioPage = () => {
  return (
    <div className='page ' >
        <div className='fondo'></div>


        <div className='image_fondo'>
            <img src={perfil} alt="" srcset="" className='' />
        </div>

        <div className='info'>
            <span className='label_title_1'>Hola, soy Jhon Apaza</span>
            <span className='label_title_2'>Desarrollador web</span>

            <span className='description'>
                Nacido en Lima,Peru. Me encanta el desarrollo web actualmente me encuentro trabajando con tecnologias como React js , React Native y Spring Boot.
            </span>
        </div>
    </div>
  )
}

export default InicioPage