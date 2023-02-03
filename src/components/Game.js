import React, { useEffect, useState } from 'react'
import '../styles/game.css'
import Square from './Square'
import Header from './Header'
import { useSelector, useDispatch } from 'react-redux'
import { setTurn } from '../slices/boardSlice'
import { DiscreteInterpolant } from 'three'

const Game = () => {
  const board = useSelector((state) => state.board.value)
  const dispatch = useDispatch()

  return (
    <>
      <Header />
      <div className='game-container'>
          <div className='board-container'>
              {board.map((el, index) => {
                  return <Square key={index} pos={index} value={el}/>
              })}
          </div>
      </div>
    </>
  )
}

export default Game