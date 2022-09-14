import axios from 'axios'
import pokeLogo from '../assets/img/pokeLogo.png'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import PokemonCard from './Pokedex/PokemonCard'
import { SearchPoke } from './Pokedex/SearchPoke'
import SelectType from './Pokedex/SelectType'
import Pagination from './Pagination/Pagination'

const Pokedex = ({setColorPoke}) => {

  const masterName = useSelector(state => state.masterName)
  const [pokemons, setPokemons] = useState() 
  const [pokemonType, setPokemonType] = useState('pokemons')
  const [searchPoke, setSearchPoke] = useState()

  // PAGINATION 
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(10)

  //Limit pagination numbers
  const [pageNumberLimit] = useState(5)
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5)
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0)

  useEffect(() => {
  /*DO THE REQUEST TO THE END POINT IF NAME IS SUBMITED ON IMPUT */
    if(searchPoke){
      const url = `https://pokeapi.co/api/v2/pokemon/${searchPoke}/`
      
      const obj = {
        results: [{url}]
      }
      setPokemons(obj)
      setCurrentPage(1)
      setminPageNumberLimit(0)
      setmaxPageNumberLimit(5)

    }else if(pokemonType !== 'pokemons'){
  /* DO THE REQUEST TO THE END POINT IF POKE-TYPE IS SELECTED */
      const url = `https://pokeapi.co/api/v2/type/${pokemonType}/`
      axios.get(url)
           .then(res => {
            const arr = res.data.pokemon.map(e => e.pokemon)
            setPokemons({results: arr})
          })
          .catch(err => console.log(err))
          setCurrentPage(1)
          setminPageNumberLimit(0)
          setmaxPageNumberLimit(5)
    }else{
  /*REQUEST ALL POKEMONS TO THE END POINT IF POKE TYPE IS NOT SELECTED OR NAME SUBMITED */
      const url = 'https://pokeapi.co/api/v2/pokemon/?offset=20&limit=1154'
      axios.get(url)
           .then(res => setPokemons(res.data))
           .catch(err => console.log(err))
           setCurrentPage(1)
           setminPageNumberLimit(0)
           setmaxPageNumberLimit(5)
    }
  }, [searchPoke, pokemonType])

  //Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts =  pokemons?.results.slice(indexOfFirstPost, indexOfLastPost)

  //Change Page
  const paginate = pageNumber => {
    setCurrentPage(pageNumber)
  }

  return (
    <div className='pokedex'>
      <div className='pokedex__square'>
        <img className='pokedex__pokeLogo' src={pokeLogo} alt="Poke logo icon" />
      </div>
      <h2 className='pokedex__title'>Welcom {masterName} these are all the pokemons available:</h2>
      <div>
        <SearchPoke 
          setSearchPoke={setSearchPoke} 
          setPokemonType={setPokemonType}
        />
        <SelectType 
          setPokemonType={setPokemonType} 
          pokemonType={pokemonType}
          setSearchPoke={setSearchPoke}
        />
      </div>
      <div className='pokedex__pokemon'>
        {
          currentPosts?.map(pokemon => (
            <PokemonCard
              key={pokemon.url}
              url={pokemon.url}
              setColorPoke={setColorPoke}
            />
          ))
        }
      </div>
      <div className='pagination'>
        <Pagination 
          postsPerPage={postsPerPage}
          totalPosts={pokemons?.results.length}
          paginate={paginate}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}

          // Limit pagination numbers 
          pageNumberLimit={pageNumberLimit}
          maxPageNumberLimit={maxPageNumberLimit}
          setmaxPageNumberLimit={setmaxPageNumberLimit}
          minPageNumberLimit={minPageNumberLimit}
          setminPageNumberLimit={setminPageNumberLimit}
        />
      </div>
    </div>
  )
}

export default Pokedex