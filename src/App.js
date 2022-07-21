import React from 'react';
import './css/App.css'
import { useState, useEffect} from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { PokeListComponent } from './components/PokeListComponent';
import { PokeCardComponent } from './components/PokeCardComponent';
import { NavComponent } from './components/NavComponent';
import { UserContext } from './hooks/UserContext';
import Musica from './music/pokemon.mp3'
import Play from './images/play.png'
import Pausa from './images/pausa.png'
import axios from 'axios';
import { useParams } from 'react-router-dom';

function App() {

  const [allPokemons, setAllPokemons] = useState(null)
  const [pokeList, setPokeList] = useState([])
  const [play, setPlay] = useState(false);
  const [song] = useState(new Audio(Musica));

  
  const changePlay = async () => {   
    setPlay(prev => !prev)      
     play ? song.pause() : await song.play();

  }
  
  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=898")
      .then((element) => {
        const list = element.data.results.map(element => element.url)
        const list2 = []
        list.map(element => {
            axios.get(element)
                .then((element) =>{
                  list2.push(element) 
                  setPokeList(list2)  
                  setAllPokemons(list2)             
            })                    
        }) 
      })    
  }, []);


  console.log(allPokemons)

  return (
      <BrowserRouter>
      <UserContext.Provider value={{pokeList , setPokeList , allPokemons}}>
      {play ? <img className='boton-play' alt='boton-play' onClick={changePlay} src={Pausa} /> : <img className='boton-play' alt='boton-stop'onClick={changePlay} src={Play} />}
      <Routes>
        <Route path="/"
          element={
            <>
              <NavComponent />
              <PokeListComponent />
            </>
          }
        />
        <Route path="/pokemon/:name"
          element={
            <>
              <PokeCardComponent/>
            </>
          }
        />
      </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  )
}


export default App;