import React from 'react'
import './Menu.css'
import MenuList from '../../Component/MenuList/MenuList'
import Hamburger from '../../Assests/Hamburger.jpg'
import TurkeyBurger from '../../Assests/Turkey_burger.jpg'
import Portobellomushroomburger from '../../Assests/portobello_mushroom_burger.jpg'
import Elkburger from '../../Assests/Elkburger.jpg'
import Veggieburger from '../../Assests/vegie_burger.jpg'
import Wildsalmonburger  from '../../Assests/salmon_burger.jpg'
import Beanburger from '../../Assests/chickpea_burger.jpg'
import Cheeseburger from '../../Assests/cheeseburger.jpg'
import Beyondmeatburger from '../../Assests/Beyondmeatburger.jpg'


export default function Menu() {
  return (
    <div className='menu'>
      <div className="menuTitle">
        <h1>Our Menu</h1>
      </div>

      <div className='menuItemList'>
        <MenuList 
        url={Hamburger}
        name='Hamburger'
        price='$8.12'
        className='menuItem' />

      <MenuList 
        url={TurkeyBurger }
        name='Turkey burger '
        price='$10.05'
        className='menuItem'/>

      <MenuList 
        url={Portobellomushroomburger}
        name='Portobello mushroom burger'
        price='$5.12'
       className='menuItem' />
       </div>
      <div className='menuItemList'>
      <MenuList 
        url={Elkburger}
        name='Elk burger'
        price='$10.18'
        className='menuItem'/>

        <MenuList 
        url={Veggieburger}
        name='Veggie burger'
        price='$14.08'
        className='menuItem'/>
     
        <MenuList 
        url={Wildsalmonburger}
        name='Wild salmon burger'
        price='$18.02'
        className='menuItem'/>
       </div>
      <div className='menuItemList'>
        <MenuList 
        url={Beanburger}
        name='Bean burger'
        price='$11.05'
        className='menuItem'
        />

      <MenuList 
        url={Cheeseburger}
        name='Cheese burger'
        price='$5.12'
        className='menuItem'
        />

      <MenuList 
        url={Beyondmeatburger}
        name='Beyond meat burger'
        price='$13.04'
        className='menuItem'/>
      </div>

    </div>
  )
}
