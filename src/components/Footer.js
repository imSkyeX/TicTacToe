import React from 'react'
import '../styles/footer.css'

const Footer = () => {
  return (
    <div className='footer-container'>
        <div className='footer-text'>
            <span>Open source TicTacToe.</span><br /><br />
            This project was developed using <span>React.JS </span> 
            and is licensed under the <span>MIT license. </span><br /><br />
            Developers:
            <ul>
                <li>Pablo Sanchidrian</li>
                <li>Jose Manuel Macias</li>
            </ul>
        </div>
    </div>
  )
}

export default Footer