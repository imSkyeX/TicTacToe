import React, { useState } from 'react'
import '../styles/game.css'
import Square from './Square'


const Game = () => {
    const [board, setBoard] = useState(['', '', '', '', '', '', '', '', ''])

  return (
    <div className='game-container'>
        <div className='board-container'>
            {board.map((el, index) => {
                return <Square key={index} value={el} />
            })}
        </div>
    </div>
  )
}

export default Game