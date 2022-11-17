import React, { useContext } from 'react'
import { GameContext } from '../gameContext'

import Header from './Header.jsx'
import StartUI from './StartUI.jsx'
import RollUI from './RollUI.jsx'


export default function Main() {

  const { startMode } = useContext(GameContext)
  const { isStarted, toggleIsStarted } = startMode

  const { mode } = useContext(GameContext)
  const { darkMode } = mode

  return (
    <main className={darkMode ? "dark" : "light"}>
      <Header />
      {isStarted ? <RollUI /> : <StartUI e />}
    </main>
  )
}