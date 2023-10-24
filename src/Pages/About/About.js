import React from 'react'
import Bugar from '../../Assests/about.avif'
import './About.css'
export default function About() {
  return (
    <div className='aboutContainer'>
      
        <img src={Bugar}  className="aboutImage"/>
      <h1 className='aboutHead'>About Us</h1>
      <div className="aboutDetail">
        <p>Welcome to Testy Burger,
           where we're passionate about serving the best burgers in town. 
           Our journey began with a simple yet profound idea: to create mouthwatering,
           delicious burgers that satisfy your cravings and leave you coming back for more.
            At Testy Burger , we believe that a great burger is more than just a meal;
            it's an experience. Our commitment to quality starts with our ingredients.
            From our juicy, hand-formed beef patties to our selection of unique, flavorful toppings and secret sauces, 
            every burger is a masterpiece of taste and quality.</p>
      </div>
    </div>
  )
}
