import React, { useEffect, useState } from 'react'
import '../styles/game.css'
import Square from './Square'
import Header from './Header'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { update, reset } from '../slices/boardSlice'

const Game = () => {
  const board = useSelector((state) => state.board.value)
  const turn = useSelector((state) => state.board.turn)
  const [over, setOver] = useState(false)
  const dispatch = useDispatch()

  // check if there are free spaces left, return true or false
  const checkFreeSpaces = () => {
    return board.includes('')
  }

  useEffect(() => {
    if(checkFreeSpaces() && turn === 'O') {
      axios({
        method: 'post',
        url: `${process.env.REACT_APP_API_URL}/aimove`,
        headers: {
          'Content-Type': 'application/json'
        },
        withCredentials: false,
        data: {
          board: board,
        }
      })
      .then(res => { 
        dispatch(update(res.data.move)) 
        if (res.data.over || res.data.tie) {
          setOver(true)
          console.log(`Game Over: ${res.data.over} | Tie: ${res.data.tie} | Winner: ${res.data.winner}`)
        }
      })
      .catch(err => console.error(err))
    } else {
      console.log('No free spaces left')
    }
  }, [turn])

  useEffect(() => {
    if(!over) return

    setTimeout(() => {
      dispatch(reset())
    }, 2000)

    setOver(false)
  }, [over])
  
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