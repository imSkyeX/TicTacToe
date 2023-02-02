import React from 'react'

const Square = ({value}) => {
  return (
    <button style={{width: '115px', height: '115px', borderRadius: '7%', border: 'none', backgroundColor: 'lightgrey'}}>{value}</button>
  )
}

export default Square