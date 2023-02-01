import React from 'react'
import '../styles/header.css'
import logo from '../images/ttt-white.png'
import { FaGamepad, FaUsers } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
        <div className='box-logo'>
            <Link to='/'><img className='logo' src={logo} /></Link>
        </div>
        
    </div>
  )
}

export default Header