import React, { useEffect, useState } from 'react'
import '../styles/game.css'
import Square from './Square'
import Header from './Header'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { update } from '../slices/boardSlice'

const Game = () => {
  const board = useSelector((state) => state.board.value)
  const turn = useSelector((state) => state.board.turn)
  const dispatch = useDispatch()

  useEffect(() => {
    if(turn === 'O') {
      console.log('fetching ai move')
      axios({
        method: 'post',
        url: `${process.env.API_URL}/aimove`,
        headers: {
          'Content-Type': 'application/json'
        },
        // withCredentials: false,
        data: {
          board: board,
        }
      })
      .then(res => {console.log(res.data); dispatch(update(res.data.move)) })
      .catch(err => console.error(err))
    }
  }, [turn])

  // useEffect(() => {
  //   if(turn === 'O') {
  //     axios.get('/user', {
  //       board: board
  //     })
  //   })
  //   .then(function (response) {
  //     console.log(response);
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });  
  // }, [turn])

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