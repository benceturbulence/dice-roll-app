import React, {useState} from 'react'
const GameContext = React.createContext()

function GameContextProvider(props) {

  const [diceType, setDiceType] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const [amount, setAmount] = useState(1)
  const [isStarted, setIsStarted] = useState(false)

  function toggleDiceType() {
    setDiceType(prevState => !prevState)
  }

  function toggleDarkMode() {
    setDarkMode(prevState => !prevState)
  }

  function toggleIsStarted() {
    setIsStarted(prevState => !prevState)
  }



  return (
  <GameContext.Provider value={{diceSettings: { diceType, toggleDiceType }, mode: { darkMode, toggleDarkMode }, diceAmount: { amount, setAmount }, startMode: { isStarted, toggleIsStarted }}}>
        {props.children}
  </GameContext.Provider>
    )
}

export { GameContextProvider, GameContext }