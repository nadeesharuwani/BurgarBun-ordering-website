import React from 'react'
import './Footer.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Footer() {
  return (
    <div className='footer'>
      <div className="icons">
      <InstagramIcon/>
      <TwitterIcon/>
      <FacebookIcon/>
      <LinkedInIcon/>
      </div>
      <p>&copy; 2023 bugarbun.com</p>
    </div>
  )
}
