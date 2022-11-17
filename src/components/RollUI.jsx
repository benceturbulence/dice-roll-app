import React, { useContext } from 'react'
import { GameContext } from '../gameContext'
import { nanoid } from 'nanoid'

import close from '../img/close.png'
import Dice from './Dice.jsx'
import DiceHolder from './DiceHolder.jsx'
import generateNumber from './generateNumber.js'

export default function RollUI(props) {

  const { diceAmount } = useContext(GameContext)
  const { amount, setAmount } = diceAmount

  const { startMode } = useContext(GameContext)
  const { isStarted, toggleIsStarted } = startMode


  const [numberArray, setNumberArray] = React.useState([])
  const [historyArray, setHistoryArray] = React.useState([])

  const [showAll, setShowAll] = React.useState(false)

  
  function rollDice() {
    let emptyArray = []
    for (let i = 0; i < amount; i++) {
      const num = generateNumber()
      emptyArray.push(num)
    }
    console.log(emptyArray)
    setNumberArray(prevArray => emptyArray)
    setHistoryArray(prevArray => ([...prevArray, numberArray]))
  }

  function reset() {
    setNumberArray([])
    setHistoryArray([])
    setAmount(1)
    toggleIsStarted()
  }

  return (
    <div className="grid">
      <div className="content-container">
      <section className="rollui">
        
        <div className="diceBox">
            {numberArray.length > 0 ?
          (<div className="diceHolder">
            {numberArray.map(e => <Dice key={nanoid()} value={e} />)}
          </div>) :
          <h1>No dices rolled</h1>}
        </div>

        <button className="btn" onClick={rollDice}>Roll</button>
        
        <button className="btn" id="reset" onClick={reset}>Reset</button>
        <span className="openToggle" onClick={()=>setShowAll(true)}>Show all rounds 🎲</span>

      </section>
        {showAll ? 
          (<section className="allRolls">
              <div className="flex">
                <h2>All rolls</h2>
                <img onClick={()=>setShowAll(false)}src={close} className="closeToggle" />
              </div>
        {historyArray.map(oldDiceArray => oldDiceArray.length > 0 ? 
          <DiceHolder key={nanoid()} dices={oldDiceArray} /> : null)
        }
      </section>) : null }
      </div>
    </div>
  )

}