import React from 'react'
import './Home.css'
import HomeImage from '../../Assests/home.avif'
import { Link } from 'react-router-dom'
export default function Home() {
  return (
    <div className='home' style={{backgroundImage: `url(${HomeImage})`}}>
      <div className="homecontainer" >
      <h1>Delight Your Best Steak Burgar</h1>
      <p>We are Dedicated to the safety of our guests and employees have updated our safety manner</p>
      <Link to='/menu'>
         <button>Order Now</button>
      </Link>
     
      </div>
    </div>
  )
}
