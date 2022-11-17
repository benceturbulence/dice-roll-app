import React, { useContext } from 'react'
import { GameContext } from '../gameContext'
import { nanoid } from 'nanoid'

export default function Dice(props) {

  const { diceSettings } = useContext(GameContext)
  let { diceType } = diceSettings


  let dotArray = []

  // creates an array of dot spans to append to the dice

  for (let i = 0; i < props.value; i++) {
    dotArray.push(<span key={nanoid()} className="dot"></span>)
  }

  {/* If the dice type is with numbers it will return numbered dot*/ }
  {/* if the dotted option is chosen, it will return dotted */ }
  if (diceType) {
    return (
      <div className="dice num">
        {props.value}
      </div>
    )
  }


  else {
    return (
      <div className={`dice a_${props.value} dotted`}>
        {dotArray}
      </div>

    )
  }
}