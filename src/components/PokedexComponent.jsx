import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/App.css';
import Atras from '../images/deshacer.png';
import logo from '../images/logo.png'
import pokedex from '../images/pokedex.gif'

export const PokedexComponent = () => {
  const [pregunta, setPregunta] = useState('');

  const buscarChatGPT = () => {
    let preguntaChat = [pregunta];
    console.log('Valor de pregunta:', preguntaChat);
    alert(preguntaChat);
    setPregunta('');
  };

  return (
    <>
      <div className='nav'>                
        <img src={logo} alt='Logo PokeMon' className='logo' />                                           
        <Link className='botonPokedex' to="/PokeDex" placeholder='pokedex' >
          <img src={pokedex} alt='PokeDex'  className='gifPokedex'/>  
        </Link>                                    
      </div>
      <div className='allContainerPokedex'>
        <div className='returnPokedex'>
          <Link to='/'>
            <img src={Atras} alt='' className='return' />
          </Link>
        </div>
        <div className='divInputPregunta'>
          <p className='titulo-pregunta'>Hazme una pregunta!</p>
          <input
            type='text'
            placeholder='Escribe aquí tu pregunta'
            value={pregunta}
            onChange={(e) => setPregunta(e.target.value)}
            className='inputPregunta'
          ></input>
        </div>
        <div className='div-boton-buscarPokedex'>
          <button onClick={buscarChatGPT} className='buttonBuscarPokedex'>
            Buscar
          </button>
        </div>
        <div>
          <p></p>
        </div>
      </div>
    </>
  );
};