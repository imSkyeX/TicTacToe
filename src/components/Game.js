import React, { useEffect, useState } from 'react'
import Square from './Square'
import Header from './Header'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { update, reset, endGame } from '../slices/boardSlice'
import '../styles/game.css'
import '../styles/button.css'

const Game = () => {
  const board = useSelector((state) => state.board.value)
  const turn = useSelector((state) => state.board.turn)
  const gameOver = useSelector((state) => state.board.gameover)
  const winner = useSelector((state) => state.board.winner)
  const dispatch = useDispatch()
  const controller = new AbortController()
  // check if there are free spaces left, return true or false
  const checkFreeSpaces = () => {
    return board.includes('')
  }

  useEffect(() => {
    if(turn === 'O') {
      axios({
        method: 'post',
        url: `${process.env.REACT_APP_API_URL}/aimove`,
        headers: {
          'Content-Type': 'application/json'
        },
        withCredentials: false,
        data: {
          board: board,
        }, 
        signal: controller.signal
      })
      .then(res => { 
        if(res.data.move !== null) dispatch(update(res.data.move)) 

        console.log(res.data)
        if(res.data.over) {
          console.log('Game over')
          dispatch(endGame(res.data.winner))
        } else if (res.data.tie) {
          console.log('Game over tie')
          dispatch(endGame(' '))
        }
      })
      .catch(err => console.error(err))

      return () => controller.abort()
    }
  }, [turn])
  
  return (
    <>
      <Header />
      <div className='game-container'>
        {winner && <h1>{winner == ' ' ? 'TIE!' : `${winner} WINS!`}</h1>}
        <div className='board-container'>
          {board.map((el, index) => {
              return <Square key={index} pos={index} value={el}/>
          })}
        </div>
        <button className='button' onClick={() => dispatch(reset())}>Reset</button>
      </div>
    </>
  )
}

export default Game