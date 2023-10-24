import React from 'react'
import Logo from '../../Assests/images.jfif'
import { Link } from 'react-router-dom'
import './Navbar.css'


export default function Navbar() {
  return (
    <div className='navbar'>
      <div className="navLeft">
        <img src={Logo} className='logo'/>
      </div>
      <div className="navRight">
        <Link to='/' className='link'>Home</Link>
        <Link to='/menu'className='link'>Menu</Link>
        <Link to='/about'className='link'>About</Link>
        
      </div>
    </div>
  )
}
