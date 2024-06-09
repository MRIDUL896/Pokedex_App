import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Pokelist from './Components/Pokelist/Pokelist'

function App() {
  return(
    <div>
      <Header/>
      <Pokelist/>
    </div>
  )
}

export default App
