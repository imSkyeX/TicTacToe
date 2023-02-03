import React from 'react'
import '../styles/square.css'

import { useDispatch } from 'react-redux'
import { update } from '../slices/boardSlice'

const Square = ({pos, value}) => {
  const dispatch = useDispatch()

  return (
    <button onClick={() => dispatch(update(pos))} className='button-style'>{value}</button>
  )
}

export default Square