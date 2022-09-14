import axios from 'axios'
import React, { useEffect, useState } from 'react'

const SelectType = ({setPokemonType, pokemonType, setSearchPoke}) => {

 const [pokeType, setPokeType] = useState()

 useEffect(() => {
   const URL = "https://pokeapi.co/api/v2/type/"
   axios.get(URL)
        .then(res => setPokeType(res.data.results))
        .catch(err => console.log(err))
 }, [])

 const handleChange = e => {
    setPokemonType(e.target.value) 
    setSearchPoke('')
 }
 
  return (
    <div className='select__container'>
     <select className='select' value={pokemonType} onChange={handleChange}>
       <option value="pokemons">All pokemons</option>
       {
         pokeType?.map(type => (
           <option key={type.name} value={type.name}>{type.name}</option>
         ))
       }
     </select>
    </div>
  )
}

export default SelectType