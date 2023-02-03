import React from 'react'
import '../styles/square.css'

import { useDispatch } from 'react-redux'
import { update } from '../slices/boardSlice'

const Square = ({pos, value}) => {
  const dispatch = useDispatch()

  const handleClick = () => {
    if(value === '') dispatch(update(pos))
  }

  return (
    <button onClick={handleClick} className='button-style'>{value}</button>
  )
}

export default Square