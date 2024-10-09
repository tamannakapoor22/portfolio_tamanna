import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/gdsc-image.svg'
import mail_icon from '../../assets/mail_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const Footer = () => {
  return(
<div className='footer'>
  <div className="footer-top">
    <div className="footer-top-left">
      <img src={footer_logo} alt="" />
      <p>I am an aspiring developer, feel free to contact me with either of the contact details for projects.</p>
    </div>
    <div className="footer-top-right">
       <div className="conatct-details">
        <img src={mail_icon} alt="" /><p>tamannakapoorrr@gmail.com</p>
      </div>
      <div className="conatct-details">
      <img src={call_icon} alt="" /><p>8130087872</p>
        </div>
       </div>
    </div>
  </div>
  
 
) 
}
export default Footer