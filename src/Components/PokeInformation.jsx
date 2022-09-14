import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import pokeLogo from '../assets/img/pokeLogo.png'

const PokeInformation = ({colorPoke}) => {
  console.log(colorPoke)

  const [pokeInfo, setPokeInfo] = useState()
  const {name} = useParams()

  useEffect(() => {
    const URL = `https://pokeapi.co/api/v2/pokemon/${name}/`
    axios.get(URL)
         .then(res => setPokeInfo(res.data))
         .catch(err => console.log(err))
  }, [])

  return (
    <article className='article__pokeInfo' style={{background: colorPoke}}>
        <header className='article__header'>
          <img className='article__logo' src={pokeLogo} alt="Pokemon logo" />
        </header>

        <div className='article__general'>
          <div className='section__one'>
            <section className='article__section_1'>
              <div className='article__section_container'>
                 <img  className='article__img' src={pokeInfo?.sprites.other['official-artwork']['front_default']} alt='' />
                 <h1 className='article__name'>{pokeInfo?.name}</h1>
                 <ul className='article__characteristics'>
                    <li><span className='article__span'>Height:</span> {pokeInfo?.height}</li>
                    <li><span className='article__span'>Weight:</span> {pokeInfo?.weight}</li>
                 </ul>
              </div>
            </section>

            <footer className='article__footer'>
              <div className='article__container_1'>
                <h2 className='article__type'>Type</h2>
                <ul className='article__ul_type'>
                  {
                    pokeInfo?.types.map(type => (
                       <li className='article__li_type' style={{background: colorPoke}} key={type.type.url}>{type.type.name}</li>
                    ))
                  }
                </ul>
              </div>
    
              <div className='article__container_2'>
                <h2 className='article__abilities'>Abilities</h2>
                <ul className='article__ul_abilities'>
                  {
                    pokeInfo?.abilities.map(slot => (
                      <li className='article__li_abilities' style={{background: colorPoke}} key={slot.ability.name}>{slot.ability.name}</li>
                    ))
                  }
                 </ul>
              </div>
            </footer>
          </div>

          <div className='aside__container'>
            <aside className='aside'>
              <h2 className='aside__title' style={{background: colorPoke}}>Movements</h2>
                <ul className='aside__list'>
                 {
                  pokeInfo?.moves.map(move => (
                    <li className='aside__item' key={move.move.url}>{move.move.name}</li>
                  ))
                 }
                </ul>
            </aside>
          </div>   
        </div>

    </article>
  )
}

export default PokeInformation