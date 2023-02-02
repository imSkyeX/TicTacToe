import React from 'react'
import '../styles/footer.css'

const Footer = () => {
  return (
    <div className='footer-container'>
        <div className='footer-text'>
            Open source TicTacToe.<br /><br />
            This project was developed using React.JS 
            and is licensed under the MIT license.<br /><br />
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