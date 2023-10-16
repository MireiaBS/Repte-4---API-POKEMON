import React from 'react'
import { UserContext } from '../hooks/UserContext';
import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import '../css/App.css'
import Atras from '../images/deshacer.png'


export const PokedexComponent = () => {

    return (
    
    <div className='allContainerPokedex'>
        <div className='returnPokedex'>
            <Link to='/'>                
                    <img src={Atras} className='return' />                
            </Link>
        </div>
        <div className='divInputPregunta'>
            <p className='titulo-pregunta'>Hazme una pregunta!</p>
            <input type="text" placeholder='Escribe aquí tu pregunta' className='inputPregunta'></input>
            
        </div>
        <div className='div-boton-buscarPokedex'>
            <button onClick="" className='buttonBuscarPokedex' >Buscar</button>
        </div>
        <div>
            <p></p>
        </div>
        
    </div>

    )
}