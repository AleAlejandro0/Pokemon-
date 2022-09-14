import React from 'react'

export const SearchPoke = ({setSearchPoke, setPokemonType}) => {
  
const handleSubmit = e => {
  e.preventDefault()
  setSearchPoke(e.target.poke.value.trim().toLowerCase())
  setPokemonType('unknown')
  e.target.poke.value = ''
}

  return (
   <div className='form__container'>
    <form  className="form" onSubmit={handleSubmit}>
      <input className="form__input"  id='poke' type="text" placeholder='Type a pokemons name'/>
      <button className='form__btn' ><i className="fa-solid fa-magnifying-glass"></i></button>
    </form>
   </div>
  )
}
