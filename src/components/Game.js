import React, { useState } from 'react'
import '../styles/game.css'
import Square from './Square'
import Header from './Header'

const Game = () => {
    const [board, setBoard] = useState(['', '', '', '', '', '', '', '', ''])

  return (
    <>
      <Header />
      <div className='game-container'>
          <div className='board-container'>
              {board.map((el, index) => {
                  return <Square key={index} value={el} />
              })}
          </div>
      </div>
    </>
  )
}

export default Game