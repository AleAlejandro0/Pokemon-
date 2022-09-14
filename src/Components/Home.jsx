import React from 'react'
import imageHome from '../assets/img/home.png'
import pokeLogo from '../assets/img/pokeLogo.png'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setNameTrainer } from '../Store/slices/masterName.slice'

const Home = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const getName = e => {
   e.preventDefault()
   const valuSubmited =  e.target.name.value.trim()
   if(valuSubmited.length !== 0){
     dispatch(setNameTrainer(valuSubmited))
     navigate('/pokedex')
   }
   e.target.name.value = ''
  }
  
  return (
    <div className='home'>
     <div className='home__square_top'>
        <img className='home__pokeLogo' src={pokeLogo} alt="Pokemon logo" />
     </div>
     <img className='home__img' src={imageHome}  alt="Pokemon home image"/>
     <h1 className='home__title'>Hello Pokemon Master!</h1>
      <p className='home__text'>Type your name to start:</p>
      <form className='home__form' onSubmit={getName}>
        <input id="name" className='home__input' type='text'></input>
        <button className='home__btn'>Go!</button>
      </form>
    </div>
  )
}

export default Home