import React from 'react'
import './App.css'
import Main from './components/Main.jsx'
import { GameContextProvider } from './gameContext.jsx'

export default function App() {

  return (
    <GameContextProvider>
      <Main />
    </GameContextProvider>

  )
}
