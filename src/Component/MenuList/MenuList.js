import React from 'react'
import './MenuList.css'
import { Link } from 'react-router-dom'
export default function MenuList(props) {
  return (
    <div className='menu'>
      <div className="menuList">
          <img src={props.url} className='Image'/>
          <p>{props.name}<br/>
          {props.price}<br/>
          <Link to='/form'><button className='Order'>Order</button></Link>
          </p>
          <br/>
      </div>
    </div>
  )
}
