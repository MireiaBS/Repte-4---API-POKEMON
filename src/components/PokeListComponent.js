import React from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../hooks/UserContext'
import { useContext } from 'react'

export const PokeListComponent = () => {

    const {pokeList} = useContext(UserContext)  

    const newOrder = pokeList.sort((a,b) => a.data.order - b.data.order)    
    let text = newOrder.map((element,i) => 
    <Link className='links' to={`/pokemon/${element.data.name}`} key={i+'order'} >
      <div className='sub-list' >
          <div>{element.data.name.toUpperCase()}</div>
          <img src={element.data.sprites.front_default} alt='PokeMon'/>
      </div> 
    </Link>)
    

    return (
    <div className='list'> 
      {text} 
    </div> 
    )
}
