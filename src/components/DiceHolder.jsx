import React from 'react'
import Dice from './Dice.jsx'
import { nanoid } from 'nanoid'

export default function DiceHolder(props) {

  const dicesArray = props.dices
  return (
    <div className="diceHolder">
      {dicesArray.map(dice => <Dice key={nanoid()} value={dice} />)}
    </div>
  )
}