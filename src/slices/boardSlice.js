import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: ['', '', '', '', '', '', '', '', ''], 
  turn: 'X'
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
    }
  },
})

export const { update, reset } = boardSlice.actions

export default boardSlice.reducer