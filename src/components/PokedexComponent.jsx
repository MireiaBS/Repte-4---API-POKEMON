import React from 'react'
import { UserContext } from '../hooks/UserContext';
import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import '../css/App.css'
import Atras from '../images/deshacer.png'


export const PokedexComponent = () => {

    return (

        <>
        <Link to='/'>
        <div className='div-return'>
          <img src={Atras} className='return' />
        </div>
        </Link>
        <div>
            <h1>Soc una superpokedex</h1>
        </div>
            
        </>
    )
}