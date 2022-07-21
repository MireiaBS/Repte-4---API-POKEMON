import React from 'react'
import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Atras from '../images/deshacer.png'

export const PokeCardComponent = () => {

  const {name} = useParams();

  const returnHome = () => {

  }

  return (
    <>
      <Link to='/'>
        <div className='div-return'>
          <img src={Atras} className='return'/>
        </div>
      </Link>
      <div className='card'>pokeCards</div>
    </>
  )
}
