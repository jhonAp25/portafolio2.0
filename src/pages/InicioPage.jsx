import React from 'react'
import perfil from '../utils/image/perfil.png'


const InicioPage = () => {
  return (
    <div className='page ' >

      <div className='image_fondo'>
        <img src={perfil} alt="" srcset="" className='img_profile' />
      </div>

      <div className='content_text '>
       
        <span className='label_title_2'>Hola, soy Jhon Apaza</span>
        <span className='label_title_1'>Desarrollador web</span>

        <span className='text_normal descripcion'>
                    Nacido en Lima,Peru. Me encanta el desarrollo web actualmente me encuentro trabajando con tecnologias como React js , React Native y Spring Boot.
        </span>
        

          
      </div>


       

        
    </div>
  )
}

export default InicioPage