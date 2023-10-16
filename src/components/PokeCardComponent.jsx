import React from 'react'
import { UserContext } from '../hooks/UserContext';
import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Atras from '../images/deshacer.png'
import axios from 'axios';

export const PokeCardComponent = () => {

  const [pokemonCard, setPokemonCard] = useState([])
  const [pokemonCard2, setPokemonCard2] = useState([])
  const [link, setLink] = useState([])

  const { setPokeList, pokeList } = useContext(UserContext)
  const { name } = useParams();

  useEffect(() => {
    getPokemon();
    
  }, [])

  useEffect(() => {
    getLink()
    
  }, [pokemonCard])


  const getPokemon = () => {
    const newPokemon = [...pokeList]
    const result = newPokemon.filter(element => element.data.name === name)

    setPokemonCard(result)


  }

  const getLink =  () => {
    const newPokemonCard = [...pokemonCard]
    let specieLink = newPokemonCard.map(element=> element.data.species.url)
    setLink(specieLink)
    //console.log('pokecard',newPokemonCard, 'link',specieLink, 'state',link)
    const newLink = []
    specieLink.map(element => {
      axios.get(element)
      .then(element => {
        newLink.push(element)
        setPokemonCard2(newLink)
      })        
      })       
  }

 
  console.log('poke2',pokemonCard2)
  
  return (
    <>
      <Link to='/'>
        <div className='div-return'>
          <img src={Atras} alt='' className='return' />
        </div>
      </Link>

      <div className='card'>
        <div className='title-card'>
          <div className='flex'>
            <h1 >{pokemonCard.map(element => element.data.name.toUpperCase())}</h1>
            <div className='div-datos'>
              <div className='margin-stats'>
                <h3>Height</h3>
                <p  className='text'>{pokemonCard.map(element => element.data.height)} ft.</p>
              </div>
              <div className='margin-stats'>
                <h3 >Abilities</h3>
                <p className='text'>{pokemonCard.map(element => element.data.abilities
                  .map(element =>
                    <p> {element.ability.name.charAt(0).toUpperCase() + element.ability.name.slice(1)}</p>))}</p>
              </div>
              <div className='margin-stats'>
                <h3>Types</h3>
                <p className='text'>{pokemonCard.map(element => element.data.types.map(element => <p> {element.type.name.charAt(0).toUpperCase() + element.type.name.slice(1)}</p>))}</p>
              </div>
              <div className='margin-stats'>
                <h3>Weight</h3>
                <p className='text'>{pokemonCard.map(element => element.data.weight)} lbs</p>
              </div>

            </div>
            <div className='div-stats'>
              <h2>STATS</h2>
              <div>
                <tr>{pokemonCard.map(element => element.data.stats.map(element => <td className='table'><h3>{element.stat.name.charAt(0).toUpperCase() + element.stat.name.slice(1)}</h3>{element.base_stat}</td>))} </tr>
              </div>
            </div>
          </div>
          <img src={pokemonCard.map(element => element.data.sprites.other.home.front_default)}alt='' className='img-card' />
        </div>
      

        <div className='title-card'>
          <div>
            
            <div className='div-datos '>
            <h2>SPECIE INFORMATION</h2>
              <div className='margin-stats'>
                <h3>Name</h3>
                <p>{pokemonCard.map(element => element.data.name.toUpperCase())}</p>
              </div>
              <div className='margin-stats'>
                <h3>Generation</h3>
                <p>{pokemonCard2.map(element => element.data.generation.name.toUpperCase())}</p>
              </div>
              <div className='margin-stats'>
                <h3>Color</h3>
                <p>{pokemonCard2.map(element => element.data.color.name.toUpperCase())}</p>
              </div>
              <div className='margin-stats'>
                <h3>Habitat</h3>
                <p>{pokemonCard2.map(element => element.data.habitat.name.toUpperCase())}</p>
              </div>
              <div className='margin-stats'>
                <h3>Capture Rate</h3>
                <p>{pokemonCard2.map(element => element.data.capture_rate)}</p>
              </div>
              <div className='margin-stats'>
                <h3>Growth Rate</h3>
                <p>{pokemonCard2.map(element => element.data.growth_rate.name.toUpperCase())}</p>
              </div>

            </div>
          </div>
        </div>

      </div>
    </>
  )
}
 