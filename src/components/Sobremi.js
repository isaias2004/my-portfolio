import React from 'react';
import ig from '../img/ig.png';
import github from '../img/github.png';
import linkedin from '../img/linkedin.png';

const Sobremi = () => {
  return (
    <div className='sobre-mi-container'>
        <h1>Isaias es desarrollador web freelance</h1>
        <p>Anteriormente trabajé como desarrollador web en  
          <a id='dataremis' target='_blank' href='http://www.dataremis.com/remises/'>
             Dataremis
          </a>
          , actualmente me ecuentro trabajando como desarrollador y diseñador de forma freelance en
          <a id='cuidar-consciente' target='_blank' href='https://cuidarconscientemujer.com/'>
             CuidarConsciente.
          </a>
        </p>
        <div className='container-redes'>
            <a href='https://www.instagram.com/isalawicki/' target='_blank'><img src={ig}/></a>
            <a href='https://github.com/isaias2004' target='_blank'><img src={github}/></a>
            <a href='https://www.linkedin.com/in/isaiaslawicki/' target='_blank'><img src={linkedin}/></a>
        </div>
    </div> 
  )
}

export default Sobremi