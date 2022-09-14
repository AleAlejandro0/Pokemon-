import './StyleHome.css'
import './StylePokedex.css'
import './StylePokeInfo.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import ProtectedRoutes from './Components/ProtectedRoutes'
import Pokedex from './Components/Pokedex'
import PokeInformation from './Components/PokeInformation'
import { useState } from 'react'

function App() {

  const [colorPoke, setColorPoke] = useState()

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>

        <Route element={<ProtectedRoutes/>}>
          <Route path='/pokedex' element={<Pokedex setColorPoke={setColorPoke}/>}/>
          <Route path='/pokedex/:name' element={<PokeInformation colorPoke={colorPoke}/>}/>
        </Route>

        <Route path='*' element={<h1>404 Page not found</h1>}/>

      </Routes>
    </div>
  )
}

export default App
