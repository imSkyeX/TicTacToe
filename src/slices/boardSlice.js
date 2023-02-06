import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: ['', '', '', '', '', '', '', '', ''], 
  turn: 'X',
  gameover: false,
  winner: undefined
}

export const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    update: (state, index) => {
      state.value[index.payload] = state.turn
      state.turn = state.turn === 'X' ? 'O' : 'X'
    },
    reset: (state) => {
      state.value = ['', '', '', '', '', '', '', '', '']
      state.turn = 'X'
      state.gameover = false
      state.winner = undefined
    },
    endGame(state, winner) {
      state.gameover = true
      state.winner = winner.payload
    }
  },
})

export const { update, reset, endGame } = boardSlice.actions

export default boardSlice.reducer