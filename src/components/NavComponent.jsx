import React, { useContext } from 'react'
import {UserContext} from "../hooks/UserContext"
import logo from '../images/logo.png'
import '../css/App.css'
import { Link } from 'react-router-dom'
import pokedex from '../images/pokedex.gif'


export const NavComponent = () => {
    const {setPokeList, allPokemons } = useContext(UserContext)

    const searchPokemon = (e) => {
        let { value } = e.target
        const searchResult = allPokemons.filter(element => element.data.name.includes(value.toLowerCase()))
        setPokeList(searchResult)
    }

    const filterPokemon = (e) => {
        let { id } = e.target
        const filter = allPokemons.filter(element => element.data.types.map(element => element.type.name).includes(id))
        setPokeList(filter)
        id === 'all'? setPokeList(allPokemons) : console.log(null)
    
    }
    return (
        <>              
            <div className='nav'>                
                <img src={logo} alt='Logo PokeMon' className='logo' />                                           
                <Link className='botonPokedex' to="/PokeDex" placeholder='pokedex' >
                    <img src={pokedex} alt='PokeDex'  className='gifPokedex'/>  
                </Link>                                    
            </div>
            <div className='nav'>
                <input type='text' placeholder='Busca un Pokémon!' onChange={searchPokemon} className='margin'></input>
            </div>
            <div className='nav'>
                <button className='boton all' id='all' onClick={filterPokemon}>ALL</button>
                <button className='boton normal'id='normal' onClick={filterPokemon}>Normal</button>
                <button className='boton fire' id='fire' onClick={filterPokemon}>Fire</button>
                <button className='boton water' id='water' onClick={filterPokemon}>Water</button>
                <button className='boton grass' id='grass' onClick={filterPokemon}>Grass</button>
                <button className='boton electric' id='electric' onClick={filterPokemon}>Electric</button>
                <button className='boton flying' id='flying' onClick={filterPokemon}>Flying</button>
                <button className='boton psychic' id='psychic' onClick={filterPokemon}>Psychic</button>
                <button className='boton bug' id='bug' onClick={filterPokemon}>Bug</button>
                <button className='boton rock' id='rock' onClick={filterPokemon}>Rock</button>
                <button className='boton ghost' id='ghost' onClick={filterPokemon}>Ghost</button>
                <button className='boton ice' id='ice' onClick={filterPokemon}>Ice</button>
                <button className='boton dark' id='dark' onClick={filterPokemon}>Dark</button>
                <button className='boton fighting' id='fighting' onClick={filterPokemon}>Fighting</button>
                <button className='boton dragon' id='dragon' onClick={filterPokemon}>Dragon</button>
                <button className='boton poison' id='poison' onClick={filterPokemon}>Poison</button>
                <button className='boton steel' id='steel' onClick={filterPokemon}>Steel</button>
                <button className='boton ground' id='ground' onClick={filterPokemon}>Ground</button>
                <button className='boton fairy' id='fairy' onClick={filterPokemon}>Fairy</button>
            </div>
        </>
    )
}