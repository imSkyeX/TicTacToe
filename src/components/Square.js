import React, { useEffect } from 'react'
import '../styles/square.css'
import { useSelector, useDispatch } from 'react-redux'
import { update } from '../slices/boardSlice'
import { motion } from "framer-motion";

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i) => {
    return {
      pathLength: 1.1,
      opacity: 1,
      transition: {
        pathLength: { type: "spring", duration: 0.5, bounce: 0 },
        opacity: { duration: 0 }
      }
    };
  }
};

// green -> #00cc88
const Cross = () => {
  return (
    <motion.svg
    width="100%"
    height="100%"
    viewBox="0 0 10 10"
    initial="hidden"
    animate="visible">
      <motion.line
        x1="1"
        y1="1"
        x2="9"
        y2="9"
        stroke="#212121"
        variants={draw}
        custom={2}
      />
      <motion.line
        x1="9"
        y1="1"
        x2="1"
        y2="9"
        stroke="#212121"
        variants={draw}
        custom={2.5}
      />
    </motion.svg >
  )
}

// magenta -> #ff0055
const Circle = () => {
  return (
    <motion.svg
    width="100%"
    height="100%"
    viewBox="0 0 10 10"
    initial="hidden"
    animate="visible">
      <motion.circle
        cx="5"
        cy="5"
        r="4"
        stroke="#7d7d7d"
        fill="none"
        variants={draw}
        custom={1}
      />
    </motion.svg >
  )
}

const Square = ({pos, value}) => {
  const turn = useSelector((state) => state.board.turn)
  const dispatch = useDispatch()

  const handleClick = () => {
    if(turn === 'X' && value === '') dispatch(update(pos))
  }

  return (
    <button onClick={handleClick} className='button-style'>
      {value == 'X' ?  <Cross /> : value != '' ? <Circle /> : ''}
    </button>
  )
}

export default Square