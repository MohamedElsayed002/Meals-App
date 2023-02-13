import { useState , useContext } from 'react'
import {Link , Route , Routes} from 'react-router-dom'
import './App.css'
import Search  from './components/search'
import Meals from './components/meals'
import Favorites from './components/favorites'
import Modals from './components/modal'
import { useGlobalContext} from './context'



function App() {
  const {showModal , favorites} = useGlobalContext()
  return ( 
    <div>
      <Search/>
      {favorites.length > 0 && <Favorites/>}
      <Meals/>
      {showModal && <Modals/>}
    </div>

  )
}

export default App
