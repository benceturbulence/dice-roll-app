import React, { useContext } from 'react'
import { GameContext } from '../gameContext'
import dice6 from '../img/dice6.png'
import dice3 from '../img/dice3.png'
import dice5 from '../img/dice5.png'
import dice1 from '../img/dice1.png'
import dices_footer from '../img/dices_footer.png'



export default function StartUI(props) {

  const { diceAmount } = useContext(GameContext)
  const { amount, setAmount } = diceAmount

  const { startMode } = useContext(GameContext)
  const { isStarted, toggleIsStarted } = startMode

  const { diceSettings } = useContext(GameContext)
  const { diceType, toggleDiceType } = diceSettings

  // to store the input value
  const [newAmount, setNewAmount] = React.useState(amount)



  function startApp(newAmount) {
    if (newAmount > 11) {
      setAmount(10)
    } else {
      setAmount(newAmount)
    }
    toggleIsStarted()
  }


  return (
    <div className="grid">
      <div className="content-container">
        <section className="rollui">
        <h2 className="title-line">Number of <span className="accent">dices</span></h2>
        <input
          type="number"
          name="newAmount"
          onChange={(event) => { setNewAmount(event.target.value) }}
          placeholder="1-10"
        />

        <div className="setting">
          <span className="option">Dotted</span>
          <div 
            onClick={toggleDiceType}
            className={`toggler-container ${diceType ? "on" : "off"}`}>
            <span
              className="toggler">
            </span>
          </div>
          <span className="option">Numbered</span>
        </div>
        <button className="btn" onClick={() => startApp(newAmount)}> 🎲 Start rolling</button>
        </section>
      </div>
    </div>
  )
}