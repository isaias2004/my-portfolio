import React from 'react';
import logocuidar from '../img/cuidar-corazon.jpeg'

const Proyectos = () => {
  return (
    <div className='proyectos-container'>
      <h2>Proyectos personales</h2>
      <p>Algunos proyectos desarrollados con distintas tecnologías.</p>

      <div className='container-general'>
          <div className='container-individual'>
            <a target="_blank" href='https://cuidarconscientemujer.com/'>
              <img id='logocuidar' src={logocuidar} /></a>
              <h3>Cuidar Consciente</h3>
              <p>cuidarconscientemujer.com/</p>
          </div>
          <div className='container-individual'>
            <a target="_blank" href='https://cuidarconscientemujer.com/'>
              <img id='logocuidar' src={logocuidar} /></a>
              <h3>Cuidar Consciente</h3>
              <p>cuidarconscientemujer.com/</p>
          </div>
          <div className='container-individual'>
            <a target="_blank" href='https://cuidarconscientemujer.com/'>
              <img id='logocuidar' src={logocuidar} /></a>
              <h3>Cuidar Consciente</h3>
              <p>cuidarconscientemujer.com/</p>
          </div>
          <div className='container-individual'>
            <a target="_blank" href='https://cuidarconscientemujer.com/'>
              <img id='logocuidar' src={logocuidar} /></a>
              <h3>Cuidar Consciente</h3>
              <p>cuidarconscientemujer.com/</p>
          </div>
      </div>
    </div>  
  )
}

export default Proyectos