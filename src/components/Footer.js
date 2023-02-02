import React from 'react'
import '../styles/footer.css'

const Footer = () => {
  return (
    <div className='footer-container'>
        <p className='footer-text'>
            Open source TicTacToe.<br /><br />
            This project was developed using React.JS 
            and is licensed under the MIT license.<br /><br />
            Developers:
            <ol>
                <li>Pablo Sanchidrian</li>
                <li>Jose Manuel Macias</li>
            </ol>
        </p>
    </div>
  )
}

export default Footer