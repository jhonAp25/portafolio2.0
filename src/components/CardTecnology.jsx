import React from 'react'
import {FaJava} from "react-icons/fa"

const CardTecnology = () => {
  return (
    <div className='content_card_tec'>
        <div className='card_icon'>
            <FaJava size={250} className="icon" />
        </div>
        <div className='text_tec'>
            <p className='label_title_2 title_card_tec '>Java</p>
            <p className='text_description_tect'>Tengo una experiencia de 3 anios usando este lenguaje de programacion, como proyectos academicos y personales.</p>
        </div>
    </div>
  )
}

export default CardTecnology