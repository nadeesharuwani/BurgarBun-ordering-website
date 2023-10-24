import React from 'react'
import './Form.css'
import { Link } from 'react-router-dom'
import Bugar from '../../Assests/form.jpg'
export default function Form() {
  return (
    <div className='mainContainer'>
      <div className="leftSide">
        <img src={Bugar} className='img1'/>
      </div>   
      <div className="rightSide">
        <form className='formContainer'>
          <p><label className='labelForm'>Full Name: </label><br/>
          <input type='text' placeholder='Enter your Name' className='inputForm'/>
          </p>
          <p>
          <label className='labelForm'>Address: </label><br/>
          <input type='text' placeholder='Enter your Address'className='inputForm'/>
          </p>
          <p><label className='labelForm'>Contact: </label><br/>
          <input type='text' placeholder='Enter Contact Number'className='inputForm'/>
          </p>
          <p>
          <label className='labelForm'>Email: </label><br/>
          <input type='email' placeholder='Enter your Email'className='inputForm'/>
          </p>
          <p><label className='labelForm'>Selected Items name: </label><br/>
          <input type='text' className='inputForm'/>
          </p>
          <p>
          <label className='labelForm'>Count of items : </label><br/>
          <input type='text'className='inputForm'/>
          </p>
          <Link to={'/addCard'}>
          <button className='subButton'>Submit</button>
         </Link>
        </form>
      </div> 
    </div>
  )
}
