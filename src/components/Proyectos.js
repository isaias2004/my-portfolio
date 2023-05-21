import React from 'react';
import logocuidar from '../img/cuidar-corazon.jpeg';
import logoninety from '../img/logo-ninety.jpg';
import logopokemon from '../img/logo-pokemon.png';
import logostorex from '../img/logo-storex.png';

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
          <div className='container-individual2'>
            <a target="_blank" href='https://isaias2004.github.io/ninety9/'>
              <img id='logoninety' src={logoninety} /></a>
              <h3>Ninety 9</h3>
              <p>ninety9.com/</p>
          </div>
          <div className='container-individual3'>
            <a target="_blank" href='https://isaias2004.github.io/pokeapi/'>
              <img id='logopokemon' src={logopokemon} /></a>
              <h3>Poke Api</h3>
              <p>pokeapi.com/</p>
          </div>
          <div className='container-individual4'>
            <a target="_blank" href='https://isaias2004.github.io/storex/'>
              <img id='logostorex' src={logostorex} /></a>
              <h3>Store X</h3>
              <p>storex.com/</p>
          </div>
      </div>
    </div>  
  )
}

export default Proyectos