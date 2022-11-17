import { React, useContext } from 'react'
import { GameContext } from '../gameContext'

export default function Header() {
  
  const { mode } = useContext(GameContext)
  const { toggleDarkMode, darkMode } = mode

  return (
    <header className="grid">
      <div className="content-container">
        <h2 className="header-title">DiceRoller</h2>

      
        <div className="setting">
          <span className="option">💡</span>
          <div 
            onClick={toggleDarkMode} 
            className={`toggler-container ${darkMode ? "on" : "off"}`}>
            <span className="toggler">
            </span>
          </div>
          <span className="option">🌜</span>
        </div>
      </div>
      
    </header>
  )
}