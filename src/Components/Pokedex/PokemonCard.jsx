import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Stats from './Stats'

const PokemonCard = ({url, setColorPoke}) => {

const [pokemon, setPokemon] = useState()
const navigate = useNavigate()

 useEffect(() => {
    axios.get(url)
      .then(res => setPokemon(res.data))
      .catch(err => console.log(err))
 }, [url])

 /* ADD COLOR DEPEDING OF THE FIRST TYPE */ 
 const typePokemon =  pokemon?.types[0].type.name
 let backgroundCardColor = 'black'
 let lettersColor = 'black'

 if(typePokemon == 'fire'){
  backgroundCardColor = 'linear-gradient(to top right, rgb(245, 245, 101), rgb(245, 43, 43))' 
  lettersColor = '#e04e4e'
 }else if(typePokemon == 'fighting'){
  backgroundCardColor = 'linear-gradient(to top right, #D1D1D1, #e7cb5a )'
  lettersColor = '#c5ab41'
 }else if(typePokemon == 'flying'){
  backgroundCardColor = 'linear-gradient(to top right, #F3EEC4, #025669)'
  lettersColor = 'rgb(12, 67, 80)' 
 }else if(typePokemon == 'poison'){
  backgroundCardColor = 'linear-gradient(to top right, #817467, #E63244)'
  lettersColor = '#f74a5b' 
 }else if(typePokemon == 'ground'){
  backgroundCardColor = 'linear-gradient(to top right, #9B9188, #EA899A 80%)'
  lettersColor = 'rgb(200, 101, 122)'
 }else if(typePokemon == 'rock'){
  backgroundCardColor = 'linear-gradient(to top right, #d434a7, #E55137 80%)'
  lettersColor = '#be361e'
 }else if(typePokemon == 'ghost'){
  backgroundCardColor = 'linear-gradient(to top right, #3BB9B0, #F54021)'
  lettersColor = '#aa301b' 
 }else if(typePokemon == 'steel'){
  backgroundCardColor = 'linear-gradient(to top right,  #FDF4E3, #969992 80%)'
  lettersColor = '#60635c'
 }else if(typePokemon == 'electric'){
  backgroundCardColor = 'linear-gradient(to top right, #0DE8FC, #031E99)'
  lettersColor = '#112169' 
 }else if(typePokemon == 'psychic'){
  backgroundCardColor = 'linear-gradient(to top right, #35C827, #DB4DD5 80%)'
  lettersColor = '#a3369e' 
 }else if(typePokemon == 'ice'){
  backgroundCardColor = 'linear-gradient(to top right, #F2FFFA, #3F838B)'
  lettersColor = '#336c72'
 }else if(typePokemon == 'dragon'){
  backgroundCardColor = 'linear-gradient(to top right, #0D1080, #E20323)'
  lettersColor = '#9c091f'
 }else if(typePokemon == 'dark'){
  backgroundCardColor = 'linear-gradient(to top right, #CB6C5A, #063C48 80%)'
  lettersColor = '#09323b'
 }else if(typePokemon == 'fairy'){
  backgroundCardColor = 'linear-gradient(to top right, #E98FFD, #514FFD )'
  lettersColor = '#4341c4' 
 }else if(typePokemon == 'grass'){
  backgroundCardColor = 'linear-gradient(to top right, #954B2A, rgb(135, 235, 149))'
  lettersColor = '#6d916a'
 }else if(typePokemon == 'water'){
  backgroundCardColor = 'linear-gradient(to top right, #EBC0CA , rgb(57, 122, 241))'
  lettersColor = '#6476d1'
 }else if(typePokemon == 'bug'){
  backgroundCardColor = 'linear-gradient(to top right, #C9D278, #A0442B)'
  lettersColor = '#9b5639'
 }else if(typePokemon == 'normal'){
  backgroundCardColor = 'linear-gradient(to top right, #CBE2C9, #905B68 65%)'
  lettersColor = '#8659a0'
 }
  
 /* RE-DIRECT TO POKEINFORMATION */
 const handleClick = () => {
   navigate(`../Pokedex/${pokemon.name}`)
   setColorPoke(backgroundCardColor)
 }

  return (
    <article onClick={handleClick} className='pokeCard' style={{backgroundImage: backgroundCardColor }}>
        <header className='pokeCard__header'>
          <img className='pokeCard__img' src={pokemon?.sprites.other['official-artwork']['front_default']} alt= {`${pokemon?.name}'s photo image`} />
        </header>
        <section className='pokeCard__section'>
          <h3 className='pokeCard__name' style={{color: lettersColor}}>{pokemon?.name}</h3>
          <ul className='pokeCard__type'>
             {
               pokemon?.types.map(slot=> (
                 <li key={slot.type.url}>{slot.type.name}</li>
               ))
             }
          </ul>
          <footer>
           <ul className='pokeCard__powers' style={{color: lettersColor}}>
             {
               pokemon?.stats.map(stat => (
                <Stats
                 key={stat.stat.url}
                 statInfo={stat}
                 />
                ))
              }
           </ul>
          </footer>
        </section>
    </article>
  )
}
export default PokemonCard