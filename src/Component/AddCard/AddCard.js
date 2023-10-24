import React from 'react'
import './AddCard.css'
import {Link} from 'react-router-dom'
import cardBugar from '../../Assests/vegie_burger.jpg'

export default function AddCard() {
  return (
    <div className='addContainer'>
      <img src={cardBugar} className='addImage'/>

      <div className="formDetails">
        <form>
          <h1 className='payment'>Payment </h1>
          <p><label>Payer Name: </label><br/>
          <input type='text' placeholder='Enter Your Name...'/>
          </p>
          <p>
          <label>Email Address: </label><br/>
          <input type='email' placeholder='Enter Email Address...'/>
          </p>
          <p><label>Card Number: </label><br/>
          <input type='text' placeholder='Enter Card Number...'/>
          </p>
          <tr>
            <td><label>card expiry month</label></td>
            <td><label>card expiry year</label></td>
            <td><label>Card CVC</label></td>
          </tr>
          <tr>
            <td><input type='month' /></td>
            <td><input type='year' /></td>
            <td><input type='text' /></td>
          </tr>
          <tr>
            <Link to='/'><button className='addButton'>Pay Now</button></Link>
            <Link to='/form'><button className='addButton Button2'>Close</button></Link>
          </tr>

          
        </form>
      </div>
    </div>
  )
}
